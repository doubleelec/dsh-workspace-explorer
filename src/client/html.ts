/**
 * 简单 HTML 预览判定(浏览器端,无 DOM / 无副作用)。
 *
 * 渲染走 `<iframe sandbox="" srcDoc>`:
 * sandbox 为空即禁用脚本/同源/表单/顶层跳转,原样 HTML 只做静态展示,
 * 因此无需清洗器、无需额外依赖;无网/CSP 拦截时顶多空白,不影响源码视图。
 */

const HTML_EXTS = new Set(['html', 'htm', 'xhtml'])

/** 是否 HTML 文件(按扩展名,大小写不敏感)。 */
export function isHtmlFile(name: string): boolean {
  const i = name.lastIndexOf('.')
  if (i <= 0) return false
  return HTML_EXTS.has(name.slice(i + 1).toLowerCase())
}
