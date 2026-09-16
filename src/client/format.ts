/**
 * 纯格式化工具(浏览器端,无 DOM / 无副作用),供面板与单元测试复用。
 */

/** 人类可读文件大小(空值返回空串)。 */
export const fmtSize = (n: number | null | undefined): string => {
  if (n == null) return ''
  if (n < 1024) return `${n} B`
  if (n < 1048576) return `${(n / 1024).toFixed(1)} KB`
  return `${(n / 1048576).toFixed(1)} MB`
}

/** 浏览器安全的 basename(兼容正斜杠结尾;DSH 内不依赖 node:path)。 */
export const basename = (p: string): string => { const s = p.replace(/\/+$/, ''); const i = s.lastIndexOf('/'); return i >= 0 ? s.slice(i + 1) : s }

/** 路径归一化(比较用):反斜杠转正斜杠、去尾斜杠、小写——Windows 下会话 cwd 与工作区 path 常在三处不一致。 */
export const normPath = (p: string): string => p.replace(/\\/g, '/').replace(/\/+$/, '').toLowerCase()

/** 取小写扩展名;点开头(隐藏文件)或无扩展名返回空串。 */
export const extOf = (name: string): string => { const i = name.lastIndexOf('.'); return i <= 0 ? '' : name.slice(i + 1).toLowerCase() }

/** 展示层噪声目录名单(与 host 名单一致,前端展示过滤用,host 不动)。 */
export const NOISE_DIRS = ['.git', 'node_modules', '__pycache__', '.venv', 'venv', '.pytest_cache', '.ruff_cache', '.mypy_cache', 'dist', 'build', '.next', '.nuxt', 'coverage', '.idea', 'target']

/** 展示层噪声判断(纯前端,host 不动):名单命中的目录必藏;hideNoise 开时外加所有 `.` 开头目录。点开头文件永远保留。 */
export function isNoiseDir(name: string, hideNoise: boolean): boolean {
  return NOISE_DIRS.includes(name) || (hideNoise && name.startsWith('.'))
}

export interface VisibleEntry { name: string; type: 'directory' | 'file' }

/** 展示层过滤:文件树渲染前调用;host 返回全量,@ 搜索走原数据不受影响。 */
export function visibleEntries<T extends VisibleEntry>(entries: T[], hideNoise: boolean): T[] {
  if (!hideNoise) return entries.filter((e) => !(e.type === 'directory' && NOISE_DIRS.includes(e.name)))
  return entries.filter((e) => e.type !== 'directory' || !isNoiseDir(e.name, true))
}

/** 目录树文本节点。 */
interface TreeFormatNode { name: string; type: string; children: TreeFormatNode[] }

/** 把 /dsh-we/api/tree 的平铺条目渲染成带缩进与树形连线的文本块(目录拖拽 / 多选批量插入共用)。 */
export function formatTreeBlock(name: string, entries: Array<{ rel: string; type: string; name: string }>, truncated: boolean): string {
  const root: TreeFormatNode = { name, type: 'directory', children: [] }
  const map = new Map<string, TreeFormatNode>([['', root]])
  for (const e of entries) {
    const segs = e.rel.split('/')
    const node: TreeFormatNode = { name: e.name, type: e.type, children: [] }
    map.set(e.rel, node)
    const parent = segs.length > 1 ? segs.slice(0, -1).join('/') : ''
    map.get(parent)?.children.push(node)
  }
  const out: string[] = []
  const walk = (node: TreeFormatNode, prefix: string, isLast: boolean, isRoot: boolean): void => {
    if (isRoot) {
      out.push(`${node.name}/`)
    } else {
      out.push(`${prefix}${isLast ? '└── ' : '├── '}${node.name}${node.type === 'directory' ? '/' : ''}`)
      prefix += isLast ? '    ' : '│   '
    }
    node.children.forEach((c, i) => walk(c, prefix, i === node.children.length - 1, false))
  }
  walk(root, '', true, true)
  if (truncated) out.push('…')
  return out.join('\n')
}