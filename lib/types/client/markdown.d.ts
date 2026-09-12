/**
 * 轻量 Markdown 渲染器(浏览器端,无 DOM / 无副作用)。
 *
 * 只覆盖预览场景的常用子集:标题 / 加粗 / 斜体 / 删除线 / 行内码 /
 * 代码块(围栏```/缩进4空格) / 引用 / 有序+无序列表(含任务列表) /
 * 分隔线 / 链接(纯文本展示,不生成 <a> 以免 file:// 外跳) / 表格(简单行)。
 * 输出 React 元素描述(不直接依赖 react,调用方用 h 函数还原),
 * 因此天然免疫 XSS——不做任何 innerHTML 拼接。
 */
export type MdNode = {
    t: 'h';
    level: 1 | 2 | 3 | 4 | 5 | 6;
    inline: MdInline[];
} | {
    t: 'p';
    inline: MdInline[];
} | {
    t: 'code';
    lang: string;
    text: string;
} | {
    t: 'quote';
    children: MdNode[];
} | {
    t: 'ul';
    items: MdInline[][];
} | {
    t: 'ol';
    start: number;
    items: MdInline[][];
} | {
    t: 'task';
    checked: boolean[];
    items: MdInline[][];
} | {
    t: 'hr';
} | {
    t: 'table';
    head: MdInline[][];
    rows: MdInline[][][];
};
export type MdInline = {
    t: 'text';
    text: string;
} | {
    t: 'b';
    children: MdInline[];
} | {
    t: 'i';
    children: MdInline[];
} | {
    t: 's';
    children: MdInline[];
} | {
    t: 'code';
    text: string;
} | {
    t: 'link';
    text: string;
};
/** 解析行内格式,返回 inline 节点数组。 */
export declare function parseInline(src: string): MdInline[];
/** 解析整篇 Markdown 为块节点数组。 */
export declare function parseMarkdown(src: string): MdNode[];
/** 是否 Markdown 文件(按扩展名)。 */
export declare function isMarkdownFile(name: string): boolean;
