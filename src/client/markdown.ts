/**
 * 轻量 Markdown 渲染器(浏览器端,无 DOM / 无副作用)。
 *
 * 只覆盖预览场景的常用子集:标题 / 加粗 / 斜体 / 删除线 / 行内码 /
 * 代码块(围栏```/缩进4空格) / 引用 / 有序+无序列表(含任务列表) /
 * 分隔线 / 链接(纯文本展示,不生成 <a> 以免 file:// 外跳) / 表格(简单行)。
 * 输出 React 元素描述(不直接依赖 react,调用方用 h 函数还原),
 * 因此天然免疫 XSS——不做任何 innerHTML 拼接。
 */

export type MdNode =
  | { t: 'h'; level: 1 | 2 | 3 | 4 | 5 | 6; inline: MdInline[] }
  | { t: 'p'; inline: MdInline[] }
  | { t: 'code'; lang: string; text: string }
  | { t: 'quote'; children: MdNode[] }
  | { t: 'ul'; items: MdInline[][] }
  | { t: 'ol'; start: number; items: MdInline[][] }
  | { t: 'task'; checked: boolean[]; items: MdInline[][] }
  | { t: 'hr' }
  | { t: 'table'; head: MdInline[][]; rows: MdInline[][][] }

export type MdInline =
  | { t: 'text'; text: string }
  | { t: 'b'; children: MdInline[] }
  | { t: 'i'; children: MdInline[] }
  | { t: 's'; children: MdInline[] }
  | { t: 'code'; text: string }
  | { t: 'link'; text: string }

const INLINE_RULES: Array<{ re: RegExp; kind: 'b' | 'i' | 's' | 'code' | 'link' }> = [
  { re: /(`[^`\n]+`)/, kind: 'code' },
  { re: /(\*\*[^*\n]+\*\*|__[^_\n]+__)/, kind: 'b' },
  { re: /(\*[^*\n]+\*|_[^_\n]+_)/, kind: 'i' },
  { re: /(~~[^~\n]+~~)/, kind: 's' },
  { re: /(\[[^\]\n]+\]\([^)\n]+\))/, kind: 'link' },
]

/** 解析行内格式,返回 inline 节点数组。 */
export function parseInline(src: string): MdInline[] {
  const out: MdInline[] = []
  let rest = src
  while (rest !== '') {
    let earliest: { idx: number; len: number; kind: MdInline['t']; inner: string } | null = null
    for (const rule of INLINE_RULES) {
      const m = rule.re.exec(rest)
      if (!m || m.index == null) continue
      if (earliest === null || m.index < earliest.idx) {
        earliest = { idx: m.index, len: m[0].length, kind: rule.kind, inner: m[0] }
      }
    }
    if (earliest === null) {
      out.push({ t: 'text', text: rest })
      break
    }
    if (earliest.idx > 0) out.push({ t: 'text', text: rest.slice(0, earliest.idx) })
    const inner = earliest.inner
    if (earliest.kind === 'code') {
      out.push({ t: 'code', text: inner.slice(1, -1) })
    } else if (earliest.kind === 'link') {
      const m = /^\[([^\]\n]+)\]\(([^)\n]+)\)$/.exec(inner)
      out.push(m ? { t: 'link', text: `${m[1]} (${m[2]})` } : { t: 'text', text: inner })
    } else {
      const strip = earliest.kind === 's' ? 2 : earliest.kind === 'b' && inner.startsWith('**') ? 2 : earliest.kind === 'b' ? 2 : 1
      const body = inner.slice(strip, inner.length - strip)
      const kids = parseInline(body)
      out.push(earliest.kind === 'b' ? { t: 'b', children: kids } : earliest.kind === 'i' ? { t: 'i', children: kids } : { t: 's', children: kids })
    }
    rest = rest.slice(earliest.idx + earliest.len)
  }
  return out
}

function isTableDelim(line: string): boolean {
  const cells = line.trim().replace(/^\||\|$/g, '').split('|')
  return cells.length > 0 && cells.every((c) => /^:?-{1,}:?$/.test(c.trim()))
}

function splitRow(line: string): string[] {
  return line.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim())
}

/** 解析整篇 Markdown 为块节点数组。 */
export function parseMarkdown(src: string): MdNode[] {
  const lines = src.replace(/\r\n?/g, '\n').split('\n')
  const blocks: MdNode[] = []
  let i = 0
  const pushPara = (buf: string[]): void => {
    const text = buf.join('\n').trim()
    if (text !== '') blocks.push({ t: 'p', inline: parseInline(buf.join('\n')) })
  }
  let para: string[] = []
  while (i < lines.length) {
    const line = lines[i]
    // 围栏代码块
    const fence = /^(`{3,}|~{3,})\s*([\w+-]*)\s*$/.exec(line)
    if (fence) {
      pushPara(para); para = []
      const tick = fence[1][0]
      const lang = fence[2] ?? ''
      const buf: string[] = []
      i++
      while (i < lines.length && !new RegExp(`^${tick}{3,}\\s*$`).test(lines[i])) { buf.push(lines[i]); i++ }
      i++ // 跳过结束围栏
      blocks.push({ t: 'code', lang, text: buf.join('\n') })
      continue
    }
    // 缩进代码块(4空格,紧跟非空)
    if (/^( {4}|\t)\S/.test(line)) {
      pushPara(para); para = []
      const buf: string[] = []
      while (i < lines.length && (/^( {4}|\t)/.test(lines[i]) || lines[i].trim() === '')) {
        buf.push(lines[i].replace(/^( {4}|\t)/, ''))
        i++
      }
      while (buf.length > 0 && buf[buf.length - 1].trim() === '') buf.pop()
      blocks.push({ t: 'code', lang: '', text: buf.join('\n') })
      continue
    }
    // 标题
    const h = /^(#{1,6})\s+(.+?)\s*#*\s*$/.exec(line)
    if (h) {
      pushPara(para); para = []
      blocks.push({ t: 'h', level: Math.min(6, h[1].length) as 1 | 2 | 3 | 4 | 5 | 6, inline: parseInline(h[2]) })
      i++
      continue
    }
    // 分隔线
    if (/^\s*([-*_])(\s*\1){2,}\s*$/.test(line)) {
      pushPara(para); para = []
      blocks.push({ t: 'hr' })
      i++
      continue
    }
    // 引用(连续 > 行合并)
    if (/^\s*>/.test(line)) {
      pushPara(para); para = []
      const buf: string[] = []
      while (i < lines.length && /^\s*>/.test(lines[i])) { buf.push(lines[i].replace(/^\s*> ?/, '')); i++ }
      blocks.push({ t: 'quote', children: parseMarkdown(buf.join('\n')) })
      continue
    }
    // 表格(表头 + 分隔行 + 数据行)
    if (line.includes('|') && i + 1 < lines.length && isTableDelim(lines[i + 1])) {
      pushPara(para); para = []
      const head = splitRow(line).map((c) => parseInline(c))
      i += 2
      const rows: MdInline[][][] = []
      while (i < lines.length && lines[i].includes('|') && lines[i].trim() !== '') {
        rows.push(splitRow(lines[i]).map((c) => parseInline(c)))
        i++
      }
      blocks.push({ t: 'table', head, rows })
      continue
    }
    // 列表(连续同类项合并;任务列表单独成块)
    const ulm = /^\s*([*+-])\s+(.*)$/.exec(line)
    const olm = /^\s*(\d+)[.)]\s+(.*)$/.exec(line)
    const taskm = /^\s*[*+-]\s+\[([ xX])\]\s+(.*)$/.exec(line)
    if (taskm || ulm || olm) {
      pushPara(para); para = []
      if (taskm || (ulm && /^\s*[*+-]\s+\[[ xX]\]\s+/.test(line))) {
        const checked: boolean[] = []
        const items: MdInline[][] = []
        while (i < lines.length) {
          const tm = /^\s*[*+-]\s+\[([ xX])\]\s+(.*)$/.exec(lines[i])
          if (!tm) break
          checked.push(tm[1].toLowerCase() === 'x')
          items.push(parseInline(tm[2]))
          i++
        }
        blocks.push({ t: 'task', checked, items })
      } else if (olm && !ulm) {
        const start = parseInt(olm[1], 10)
        const items: MdInline[][] = []
        while (i < lines.length) {
          const om = /^\s*\d+[.)]\s+(.*)$/.exec(lines[i])
          if (!om) break
          items.push(parseInline(om[1]))
          i++
        }
        blocks.push({ t: 'ol', start: Number.isNaN(start) ? 1 : start, items })
      } else {
        const items: MdInline[][] = []
        while (i < lines.length) {
          const um = /^\s*[*+-]\s+(.*)$/.exec(lines[i])
          if (!um || /^\s*[*+-]\s+\[[ xX]\]\s+/.test(lines[i])) break
          items.push(parseInline(um[1]))
          i++
        }
        blocks.push({ t: 'ul', items })
      }
      continue
    }
    // 空行:段落分隔
    if (line.trim() === '') {
      pushPara(para); para = []
      i++
      continue
    }
    para.push(line)
    i++
  }
  pushPara(para)
  return blocks
}

/** 是否 Markdown 文件(按扩展名)。 */
export function isMarkdownFile(name: string): boolean {
  const i = name.lastIndexOf('.')
  if (i <= 0) return false
  const ext = name.slice(i + 1).toLowerCase()
  return ext === 'md' || ext === 'mdx' || ext === 'markdown' || ext === 'mkd'
}
