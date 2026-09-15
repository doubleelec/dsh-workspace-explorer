/**
 * 预览恢复状态(模块级内存,Panel 卸载后仍保留)。
 *
 * 只记 Tab + 预览文件(root/rel/name/size) + MD 渲染/源码视图;
 * mermaid 渲染态不记——MermaidBlock 每次挂载都从 idle 开始,
 * 重开预览即回到「渲染图表」按钮,不自动拉 CDN。
 */

export type PreviewTab = 'files' | 'preview' | 'settings'
export type MdView = 'rendered' | 'source'

export interface SavedPreviewRef {
  root: string
  rel: string
  name: string
  size: number | null
}

let savedTab: PreviewTab = 'files'
let savedPreview: SavedPreviewRef | null = null
let savedMdView: MdView = 'rendered'

export function getSavedTab(): PreviewTab {
  return savedTab
}

export function savePreviewTab(t: PreviewTab): void {
  savedTab = t
}

export function getSavedPreview(): SavedPreviewRef | null {
  return savedPreview
}

export function savePreviewRef(root: string, rel: string, name: string, size: number | null): void {
  savedPreview = { root, rel, name, size }
}

export function clearSavedPreview(): void {
  savedPreview = null
}

export function getSavedMdView(): MdView {
  return savedMdView
}

export function saveMdView(v: MdView): void {
  savedMdView = v
}

/** 同 root 才恢复预览(工作区切换后旧 rel 不再有效)。 */
export function shouldRestorePreview(saved: SavedPreviewRef | null, root: string | null): saved is SavedPreviewRef {
  return saved !== null && root !== null && saved.root === root
}

/** 测试用:清空记忆(生产代码勿调)。 */
export function __resetPreviewStateForTest(): void {
  savedTab = 'files'
  savedPreview = null
  savedMdView = 'rendered'
}
