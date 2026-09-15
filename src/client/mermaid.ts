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

/** 懒加载 mermaid(首选 jsdelivr,失败回落 unpkg),并完成一次性 initialize。 */
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
            api.initialize({ startOnLoad: false, securityLevel: 'strict', theme: pickTheme() })
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
