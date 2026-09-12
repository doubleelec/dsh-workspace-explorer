/**
 * 弹窗高度纯函数(无 DOM / 无副作用,可单元测试)。
 *
 * 背景:弹窗高度 = 输入框顶部 − 会话头部底部,输入框多行变高、手机键盘弹起、
 * 会话切换后旧监听没更新都会让它忽高忽矮;旧下限 200 被头部+搜索框吃完就只剩几行。
 * 对策:自动测量保底 320 + 底部拖拽条手动覆盖(存 localStorage,双击恢复自动)。
 */
/** 自动/手动高度下限:保底能看清 ~10 行文件。 */
export declare const POPUP_MIN_H = 320;
/** 手动高度 localStorage key。 */
export declare const POPUP_MANUAL_KEY = "dshwe.popupH.v1";
/** 手动宽度下限:再窄目录树没法看。 */
export declare const POPUP_MIN_W = 280;
/** 手动宽度 localStorage key。 */
export declare const POPUP_MANUAL_W_KEY = "dshwe.popupW.v1";
/**
 * 自动高度数学(measurePopup 的 DOM-free 部分)。
 * @param top - 弹窗顶部(会话 header 底部 + 8)。
 * @param bottomLimit - 底部上限(输入框顶部 − 8,无输入框时 vh − 48)。
 * @param vh - 视口高度(移动端取 min(innerHeight, visualViewport.height))。
 * @returns 钳制到 [minH, vh − top − 16] 的高度;空间不足保底 minH(允许轻微盖住输入框)。
 */
export declare function autoPopupHeight(top: number, bottomLimit: number, vh: number, minH?: number): number;
/**
 * 手动高度钳制(拖拽中 / 渲染时用,顺手取整)。
 */
export declare function clampPopupHeight(h: number, top: number, vh: number, minH?: number): number;
/**
 * 读手动高度:无存储 / 非法值 / 无 window(node 单测)一律返回 null(回落自动高度)。
 */
export declare function loadManualHeight(key?: string): number | null;
/**
 * 写手动高度:null 清除(恢复自动);存储不可用时静默忽略,自动高度兜底。
 */
export declare function saveManualHeight(h: number | null, key?: string): void;
/**
 * 手动宽度钳制(拖拽中 / 渲染时用,顺手取整)。
 * @param w - 拖拽目标宽度;左边缘左拉变宽(增量为负),右推变窄。
 * @param vw - 视口宽度;最大留 16px 边距,手机上自动收窄不挤出屏幕。
 */
export declare function clampPopupWidth(w: number, vw: number, minW?: number): number;
/**
 * 读手动宽度:无存储 / 非法值 / 无 window(node 单测)一律返回 null(回落设置页宽度)。
 */
export declare function loadManualWidth(key?: string): number | null;
/**
 * 写手动宽度:null 清除(恢复设置页宽度);存储不可用时静默忽略。
 */
export declare function saveManualWidth(w: number | null, key?: string): void;
