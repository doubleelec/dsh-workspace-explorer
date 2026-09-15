/**
 * 预览恢复状态(模块级内存,Panel 卸载后仍保留)。
 *
 * 只记 Tab + 预览文件(root/rel/name/size) + MD 渲染/源码视图;
 * mermaid 渲染态不记——MermaidBlock 每次挂载都从 idle 开始,
 * 重开预览即回到「渲染图表」按钮,不自动拉 CDN。
 */
export type PreviewTab = 'files' | 'preview' | 'settings';
export type MdView = 'rendered' | 'source';
export interface SavedPreviewRef {
    root: string;
    rel: string;
    name: string;
    size: number | null;
}
export declare function getSavedTab(): PreviewTab;
export declare function savePreviewTab(t: PreviewTab): void;
export declare function getSavedPreview(): SavedPreviewRef | null;
export declare function savePreviewRef(root: string, rel: string, name: string, size: number | null): void;
export declare function clearSavedPreview(): void;
export declare function getSavedMdView(): MdView;
export declare function saveMdView(v: MdView): void;
/** 同 root 才恢复预览(工作区切换后旧 rel 不再有效)。 */
export declare function shouldRestorePreview(saved: SavedPreviewRef | null, root: string | null): saved is SavedPreviewRef;
/** 测试用:清空记忆(生产代码勿调)。 */
export declare function __resetPreviewStateForTest(): void;
