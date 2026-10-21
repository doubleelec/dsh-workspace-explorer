/**
 * Mermaid 图表懒加载(浏览器端)。
 *
 * 约束:client bundle 走 purity 门禁(非平台 @deepseek-ai/* 一律内联),
 * mermaid 体积 ~1MB+ 不能打进 lib/client.js(当前仅 119KB)。
 * 因此运行时从 CDN 懒加载,点「渲染图表」时才拉取;无网/CSP 拦截时
 * 回落显示源码,不阻塞 Markdown 预览主流程。
 */
export declare const MERMAID_CDN_URLS: string[];
/** 是否 mermaid 代码块(大小写/首尾空格不敏感)。 */
export declare function isMermaidLang(lang: string): boolean;
interface MermaidApi {
    initialize(cfg: Record<string, unknown>): void;
    render(id: string, text: string): Promise<{
        svg: string;
    }>;
    run(cfg: {
        nodes: Iterable<Element> | ArrayLike<Element>;
    }): Promise<void>;
}
/** 面板字体(与 panel.module.css .dshwe-popup 的 font 一致)。 */
export declare const MERMAID_FONT_FAMILY = "-apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Microsoft YaHei, sans-serif";
/**
 * 统一的 mermaid 初始化配置(纯函数,可单测)。
 *
 * 方块纵向偏窄的根因:离屏 `render()` 测量与面板展示不是同一字体上下文
 * (行高/字宽估算偏小,节点 rect 按矮高度绘制)。对策:
 * - flowchart.textHeight 加大行盒,给 CJK 两行字留余量;
 * - fontFamily 与面板字体一致,消除测量/展示偏差;
 * - htmlLabels 开启(foreignObject 按真实 DOM 排版,不依赖估算);
 * - useMaxWidth: false,宽度由容器 `.dshwe-mm-svg` 的 max-width 控制。
 */
export declare function buildMermaidInitConfig(theme: string): Record<string, unknown>;
export declare function loadMermaid(): Promise<MermaidApi>;
/** 测试/调试用:清空单例(生产代码勿调)。 */
export declare function __resetMermaidCacheForTest(): void;
export {};
