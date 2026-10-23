/**
 * Mermaid 图表懒加载(浏览器端)。
 *
 * 约束:client bundle 走 purity 门禁(非平台 @deepseek-ai/* 一律内联),
 * mermaid 体积 ~1MB+ 不能打进 lib/client.js(当前仅 119KB)。
 * 因此运行时从 CDN 懒加载,点「渲染图表」时才拉取;无网/CSP 拦截时
 * 回落显示源码,不阻塞 Markdown 预览主流程。
 */

export const MERMAID_CDN_URLS = [
  'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js',
  'https://unpkg.com/mermaid@10/dist/mermaid.min.js',
]

/** 是否 mermaid 代码块(大小写/首尾空格不敏感)。 */
export function isMermaidLang(lang: string): boolean {
  return lang.trim().toLowerCase() === 'mermaid'
}

interface MermaidApi {
  initialize(cfg: Record<string, unknown>): void
  render(id: string, text: string): Promise<{ svg: string }>
  run(cfg: { nodes: Iterable<Element> | ArrayLike<Element> }): Promise<void>
}

// 脚本加载单例:同一次会话只插一次 <script>,多图表块共享
let cached: Promise<MermaidApi> | null = null

function injectScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const el = document.createElement('script')
    el.src = src
    el.async = true
    el.crossOrigin = 'anonymous'
    el.onload = () => resolve()
    el.onerror = () => {
      el.remove()
      reject(new Error(`load failed: ${src}`))
    }
    document.head.appendChild(el)
  })
}

function pickTheme(): string {
  try {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'default' : 'dark'
  } catch {
    return 'dark'
  }
}

/** 面板字体(与 panel.module.css .dshwe-popup 的 font 一致)。 */
export const MERMAID_FONT_FAMILY =
  '-apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Microsoft YaHei, sans-serif'

/**
 * 统一的 mermaid 初始化配置(纯函数,可单测)。
 *
 * 方块纵向偏窄的根因:离屏 `render()` 测量与面板展示不是同一字体上下文
 * (行高/字宽估算偏小,节点 rect 按矮高度绘制)。对策:
 * - fontFamily 与面板字体一致,消除测量/展示偏差;
 * - htmlLabels 开启(foreignObject 按真实 DOM 排版,不依赖估算);
 * - useMaxWidth: false(根 + flowchart/sequence 各一份,兼容读写位置不同的版本),
 *   宽度由容器 `.dshwe-mm-svg` 的横向滚动承载,不再把宽图压成小字。
 *
 * 时序图偏小的根因:sequence 默认 useMaxWidth:true,输出 svg 宽 100%,
 * 再被 CSS `.dshwe-mm-svg svg { max-width:100% }` 按窄弹窗二次压小,
 * 参与者越多字越小。对策:sequence 同样 useMaxWidth:false + 放大字号/间距,
 * 小图由 CSS `min-width:100%` 拉满窗口,大图横向滚动保字号。
 */
export function buildMermaidInitConfig(theme: string): Record<string, unknown> {
  return {
    startOnLoad: false,
    securityLevel: 'strict',
    theme,
    fontFamily: MERMAID_FONT_FAMILY,
    // 根级 useMaxWidth:新版 Mermaid 在根读取该标志(老版本读各图分支)
    useMaxWidth: false,
    htmlLabels: true,
    flowchart: {
      useMaxWidth: false,
      htmlLabels: true,
      nodeSpacing: 35,
      rankSpacing: 40,
      padding: 12,
    },
    sequence: {
      useMaxWidth: false,
      // 时序图在窄弹窗默认偏小:参与者字号/间距各放大一档(消息字号保持默认 16);
      // 小图由 CSS min-width 拉满,大图横向滚动保字号
      actorFontSize: 15,
      messageFontSize: 16,
      noteFontSize: 14,
      actorMargin: 60,
      messageMargin: 42,
      actorFontFamily: MERMAID_FONT_FAMILY,
      messageFontFamily: MERMAID_FONT_FAMILY,
      noteFontFamily: MERMAID_FONT_FAMILY,
    },
    themeVariables: {
      fontSize: '14px',
      fontFamily: MERMAID_FONT_FAMILY,
      lineHeight: '1.45',
    },
  }
}
export function loadMermaid(): Promise<MermaidApi> {
  const w = window as unknown as { mermaid?: MermaidApi }
  if (w.mermaid?.render) return Promise.resolve(w.mermaid)
  if (cached) return cached
  cached = (async () => {
    let lastErr: unknown = null
    for (const url of MERMAID_CDN_URLS) {
      try {
        await injectScript(url)
        const api = (window as unknown as { mermaid?: MermaidApi }).mermaid
        if (api?.render) {
          try {
            api.initialize(buildMermaidInitConfig(pickTheme()))
          } catch {
            // 旧版本 initialize 签名差异时忽略,不阻塞渲染
          }
          return api
        }
        lastErr = new Error(`no mermaid api at ${url}`)
      } catch (err) {
        lastErr = err
      }
    }
    cached = null // 允许重试(比如恢复网络后)
    throw lastErr instanceof Error ? lastErr : new Error('mermaid load failed')
  })()
  return cached
}

/** 测试/调试用:清空单例(生产代码勿调)。 */
export function __resetMermaidCacheForTest(): void {
  cached = null
}
