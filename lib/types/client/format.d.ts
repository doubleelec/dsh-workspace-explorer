/**
 * 纯格式化工具(浏览器端,无 DOM / 无副作用),供面板与单元测试复用。
 */
/** 人类可读文件大小(空值返回空串)。 */
export declare const fmtSize: (n: number | null | undefined) => string;
/** 浏览器安全的 basename(兼容正斜杠结尾;DSH 内不依赖 node:path)。 */
export declare const basename: (p: string) => string;
/** 路径归一化(比较用):反斜杠转正斜杠、去尾斜杠、小写——Windows 下会话 cwd 与工作区 path 常在三处不一致。 */
export declare const normPath: (p: string) => string;
/** 取小写扩展名;点开头(隐藏文件)或无扩展名返回空串。 */
export declare const extOf: (name: string) => string;
/** 展示层噪声目录名单(与 host 名单一致,前端展示过滤用,host 不动)。 */
export declare const NOISE_DIRS: string[];
/** 展示层噪声判断(纯前端,host 不动):名单命中的目录必藏;hideNoise 开时外加所有 `.` 开头目录。点开头文件永远保留。 */
export declare function isNoiseDir(name: string, hideNoise: boolean): boolean;
export interface VisibleEntry {
    name: string;
    type: 'directory' | 'file';
}
/** 展示层过滤:文件树渲染前调用;host 返回全量,@ 搜索走原数据不受影响。 */
export declare function visibleEntries<T extends VisibleEntry>(entries: T[], hideNoise: boolean): T[];
/** 把 /dsh-we/api/tree 的平铺条目渲染成带缩进与树形连线的文本块(目录拖拽 / 多选批量插入共用)。 */
export declare function formatTreeBlock(name: string, entries: Array<{
    rel: string;
    type: string;
    name: string;
}>, truncated: boolean): string;
