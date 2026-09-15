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
}
/** 懒加载 mermaid(首选 jsdelivr,失败回落 unpkg),并完成一次性 initialize。 */
export declare function loadMermaid(): Promise<MermaidApi>;
/** 测试/调试用:清空单例(生产代码勿调)。 */
export declare function __resetMermaidCacheForTest(): void;
export {};
