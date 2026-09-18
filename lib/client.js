window.__ModuleLoader__.load({
	id: "@doubleelec/dsh-workspace-explorer",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react = require("react");
		let react_jsx_runtime = require("react/jsx-runtime");
		//#region \0dsh-css:panel.module.css.mjs
		const css = "._4fxDUa_dshwe-layer{z-index:100;pointer-events:none;position:fixed;inset:0}._4fxDUa_dshwe-popup{background:var(--dsw-alias-bg-layer-2,#262626);border:1px solid var(--dsw-alias-border-inverted,#80808047);width:384px;box-shadow:var(--dsw-shadow-lv3,0 12px 32px #00000059);color:var(--dsw-alias-label-primary,#e8e8e8);--dsh-scrollbar-thumb:var(--dsw-alias-scrollbar-bg-l2,#80808066);--dsh-scrollbar-thumb-hover:var(--dsw-alias-scrollbar-hover-l2,#80808099);pointer-events:auto;opacity:0;transform-origin:100% 0;border-radius:16px;flex-direction:column;font:13px/1.45 -apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Microsoft YaHei,sans-serif;transition:opacity .18s,transform .18s,width .22s;display:flex;position:fixed;right:16px;overflow:hidden;transform:translateY(-8px)scale(.98)}._4fxDUa_dshwe-popup-on{opacity:1;transform:translateY(0)scale(1)}._4fxDUa_dshwe-popup-full{transform-origin:0 0;right:auto!important}@media (prefers-reduced-motion:reduce){._4fxDUa_dshwe-popup{transition:none}}._4fxDUa_dshwe-popup ._4fxDUa_dshwe-panel{width:auto;height:auto;min-height:0;box-shadow:none;pointer-events:auto;border:0;border-radius:0;flex:1;position:static;top:auto;bottom:auto;right:auto}._4fxDUa_dshwe-hicon{border:1px solid var(--dsw-alias-border-l2,#80808059);height:32px;color:var(--dsw-alias-label-primary,#e8e8e8);cursor:pointer;background:0 0;border-radius:18px;flex:none;justify-content:center;align-items:center;gap:4px;padding:6px 12px;font-size:13px;font-weight:400;line-height:20px;display:inline-flex}._4fxDUa_dshwe-hicon span,._4fxDUa_dshwe-hicon svg{flex:none}._4fxDUa_dshwe-hicon span{white-space:nowrap}._4fxDUa_dshwe-hicon:hover{background:var(--dsw-alias-interactive-bg-hover,#8080801f)}._4fxDUa_dshwe-hicon-on{color:var(--dsw-alias-state-business-primary,#4176e6);border-color:#4176e680}._4fxDUa_dshwe-panel{pointer-events:auto;background:var(--dsw-alias-bg-layer-2,#262626);border:0;border-left:1px solid var(--dsw-alias-border-inverted,#80808047);width:384px;height:calc(100dvh - 96px);min-height:320px;box-shadow:var(--dsw-shadow-lv3,0 12px 32px #00000040);color:var(--dsw-alias-label-primary,#e8e8e8);--dsh-scrollbar-thumb:var(--dsw-alias-scrollbar-bg-l2,#80808066);--dsh-scrollbar-thumb-hover:var(--dsw-alias-scrollbar-hover-l2,#80808099);border-radius:0 0 0 20px;flex-direction:column;font:13px/1.45 -apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Microsoft YaHei,sans-serif;display:flex;position:fixed;top:0;bottom:auto;right:0;overflow:hidden}._4fxDUa_dshwe-head{border-bottom:1px solid var(--dsw-alias-border-l3,#80808033);flex:none;align-items:center;gap:8px;padding:8px 12px 8px 14px;display:flex}._4fxDUa_dshwe-head-ico{color:var(--dsw-alias-state-business-primary,#4176e6);flex:none;display:inline-flex}._4fxDUa_dshwe-title{white-space:nowrap;text-align:left;text-overflow:ellipsis;direction:rtl;flex:1;min-width:0;font-size:13px;font-weight:600;overflow:hidden}._4fxDUa_dshwe-icobtn{color:var(--dsw-alias-label-secondary,#9a9a9a);cursor:pointer;background:0 0;border:0;border-radius:8px;flex:none;justify-content:center;align-items:center;width:28px;height:28px;display:inline-flex}._4fxDUa_dshwe-icobtn:hover{background:var(--dsw-alias-interactive-bg-hover,#80808024);color:var(--dsw-alias-label-primary,#e8e8e8)}._4fxDUa_dshwe-filter{min-width:0;height:30px;color:var(--dsw-alias-label-primary,#e8e8e8);border:1px solid var(--dsw-alias-border-l2,#80808059);font:inherit;background:0 0;border-radius:8px;outline:none;flex:1;padding:0 8px;font-size:12.5px}._4fxDUa_dshwe-filter:focus-visible{border-color:var(--dsw-alias-state-business-primary,#4176e6)}._4fxDUa_dshwe-filter::placeholder{color:var(--dsw-alias-label-caption,#8a8a8a)}._4fxDUa_dshwe-filterrow{align-items:center;gap:6px;padding:0 16px 6px;display:flex}._4fxDUa_dshwe-filter-clear{color:var(--dsw-alias-label-secondary,#9a9a9a);cursor:pointer;background:0 0;border:0;border-radius:6px;flex:none;justify-content:center;align-items:center;width:26px;height:26px;display:inline-flex}._4fxDUa_dshwe-filter-clear:hover{color:var(--dsw-alias-label-primary,#e8e8e8);background:var(--dsw-alias-interactive-bg-hover,#8080801f)}._4fxDUa_dshwe-addbtn{border:1px solid var(--dsw-alias-border-l2,#80808059);height:30px;color:var(--dsw-alias-label-secondary,#9a9a9a);font:inherit;cursor:pointer;background:0 0;border-radius:8px;flex:none;align-items:center;gap:3px;padding:0 10px;font-size:12.5px;display:inline-flex}._4fxDUa_dshwe-addbtn:hover{color:var(--dsw-alias-label-primary,#e8e8e8);background:var(--dsw-alias-interactive-bg-hover,#8080801f)}._4fxDUa_dshwe-hintline{color:var(--dsw-alias-label-caption,#8a8a8a);align-items:center;gap:6px;padding:0 18px 8px;font-size:11px;display:flex}._4fxDUa_dshwe-tree{flex:1;padding:2px 6px 10px;scroll-padding-bottom:30px;overflow:auto}._4fxDUa_dshwe-tree:after{content:\"\";flex:none;height:30px;display:block}._4fxDUa_dshwe-row{cursor:pointer;user-select:none;white-space:nowrap;box-sizing:border-box;text-align:left;width:100%;max-width:100%;color:inherit;font:inherit;background:0 0;border:0;border-radius:10px;align-items:center;gap:5px;padding:4.5px 10px;display:flex;overflow:hidden}._4fxDUa_dshwe-row:hover{background:var(--dsw-alias-interactive-bg-hover,#8080801f)}._4fxDUa_dshwe-row-file{cursor:grab}._4fxDUa_dshwe-row-file:active{cursor:grabbing}._4fxDUa_dshwe-chev-slot{flex:none;justify-content:center;align-items:center;width:14px;display:inline-flex}._4fxDUa_dshwe-chev{color:var(--dsw-alias-label-dimmed,#777);transition:transform .16s;display:inline-flex}._4fxDUa_dshwe-chev-on{transform:rotate(90deg)}@media (prefers-reduced-motion:reduce){._4fxDUa_dshwe-chev{transition:none}}._4fxDUa_dshwe-ico{flex:none;justify-content:center;align-items:center;display:inline-flex}._4fxDUa_dshwe-folder-svg{color:#dcb67a}._4fxDUa_dshwe-name{text-overflow:ellipsis;flex:1;min-width:0;font-size:12.5px;overflow:hidden}._4fxDUa_dshwe-row-dir ._4fxDUa_dshwe-name{font-weight:600}._4fxDUa_dshwe-row-sel{box-shadow:inset 2px 0 0 var(--dsw-alias-state-business-primary,#4176e6);background:#4176e629}._4fxDUa_dshwe-row-sel:hover{background:#4176e63d}._4fxDUa_dshwe-selbar{border-top:1px solid var(--dsw-alias-border-l3,#80808033);background:var(--dsw-alias-bg-layer-1,#222);flex:none;align-items:center;gap:8px;padding:8px 14px;display:flex}._4fxDUa_dshwe-selbar-count{min-width:0;color:var(--dsw-alias-label-primary,#e8e8e8);font-variant-numeric:tabular-nums;flex:1;font-size:12px}._4fxDUa_dshwe-pager-btn{border:1px solid var(--dsw-alias-border-l2,#80808059);width:24px;height:24px;color:var(--dsw-alias-label-secondary,#9a9a9a);font:inherit;cursor:pointer;background:0 0;border-radius:8px;flex:none;justify-content:center;align-items:center;font-size:14px;line-height:1;display:inline-flex}._4fxDUa_dshwe-pager-btn:hover:not(:disabled){color:var(--dsw-alias-label-primary,#e8e8e8);background:var(--dsw-alias-interactive-bg-hover,#8080801f)}._4fxDUa_dshwe-pager-btn:disabled{opacity:.4;cursor:not-allowed}._4fxDUa_dshwe-size{color:var(--dsw-alias-label-caption,#8a8a8a);font-variant-numeric:tabular-nums;flex:none;padding-left:6px;font-size:11px}._4fxDUa_dshwe-file-ico-btn{cursor:pointer;color:inherit;background:0 0;border:0;border-radius:6px;flex:none;justify-content:center;align-items:center;padding:2px;transition:background .12s;display:inline-flex}._4fxDUa_dshwe-file-ico-btn:hover{background:var(--dsw-alias-interactive-bg-hover,#8080801f)}._4fxDUa_dshwe-file-ico-btn:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary,#4176e6);outline-offset:-2px}._4fxDUa_dshwe-share-btn{cursor:pointer;width:26px;height:26px;color:var(--dsw-alias-label-secondary,#9a9a9a);background:0 0;border:0;border-radius:6px;flex:none;justify-content:center;align-items:center;transition:background .12s,color .12s;display:inline-flex}._4fxDUa_dshwe-share-btn:hover{background:var(--dsw-alias-interactive-bg-hover,#8080801f);color:var(--dsw-alias-state-business-primary,#4176e6)}._4fxDUa_dshwe-share-btn-on{color:var(--dsw-alias-state-business-primary,#4176e6)}._4fxDUa_dshwe-share-btn:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary,#4176e6);outline-offset:-2px}._4fxDUa_dshwe-preview-btn{cursor:pointer;width:26px;height:26px;color:var(--dsw-alias-label-secondary,#9a9a9a);background:0 0;border:0;border-radius:6px;flex:none;justify-content:center;align-items:center;transition:background .12s,color .12s;display:inline-flex}._4fxDUa_dshwe-preview-btn:hover{background:var(--dsw-alias-interactive-bg-hover,#8080801f);color:var(--dsw-alias-state-business-primary,#4176e6)}._4fxDUa_dshwe-preview-btn-on{color:var(--dsw-alias-state-business-primary,#4176e6)}._4fxDUa_dshwe-preview-btn:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary,#4176e6);outline-offset:-2px}._4fxDUa_dshwe-row-active{background:#4176e614}._4fxDUa_dshwe-row-active:hover{background:#4176e624}._4fxDUa_dshwe-row-preview-dot{background:var(--dsw-alias-state-business-primary,#4176e6);border-radius:50%;flex:none;width:6px;height:6px;margin-left:4px}._4fxDUa_dshwe-note{color:var(--dsw-alias-label-caption,#8a8a8a);align-items:center;gap:8px;padding:6px 16px;font-size:12px;display:flex}._4fxDUa_dshwe-note-err{color:var(--dsw-alias-state-error-primary,#e5484d)}._4fxDUa_dshwe-spin{border:2px solid var(--dsw-alias-border-l2,#80808066);border-top-color:var(--dsw-alias-state-business-primary,#4176e6);border-radius:50%;flex:none;width:13px;height:13px;animation:.7s linear infinite _4fxDUa_dshwe-spin}@keyframes _4fxDUa_dshwe-spin{to{transform:rotate(360deg)}}@media (prefers-reduced-motion:reduce){._4fxDUa_dshwe-spin{animation-duration:1.6s}}._4fxDUa_dshwe-empty{color:var(--dsw-alias-label-secondary,#9a9a9a);flex-direction:column;align-items:flex-start;gap:12px;padding:20px 18px;font-size:12.5px;display:flex}._4fxDUa_dshwe-empty-ico{color:var(--dsw-alias-label-dimmed,#777);opacity:.8}._4fxDUa_dshwe-body{flex:1;min-height:0;display:flex;overflow:hidden}._4fxDUa_dshwe-tree-col{flex-direction:column;flex:1;min-width:0;display:flex;overflow:hidden}._4fxDUa_dshwe-preview-tab{flex-direction:column;flex:1;min-height:0;display:flex;overflow:hidden}._4fxDUa_dshwe-preview-slot{border-right:1px solid var(--dsw-alias-border-l3,#80808033);background:var(--dsw-alias-bg-layer-1,#222);flex-direction:column;flex:none;width:340px;animation:.2s _4fxDUa_dshwe-slide-in;display:flex}@keyframes _4fxDUa_dshwe-slide-in{0%{opacity:0;width:0}to{opacity:1;width:340px}}@media (prefers-reduced-motion:reduce){._4fxDUa_dshwe-preview-slot{animation:none}}._4fxDUa_dshwe-resize-corner{cursor:nesw-resize;touch-action:none;z-index:2;justify-content:flex-start;align-items:flex-end;width:30px;height:30px;padding:6px;display:flex;position:absolute;bottom:0;left:0}._4fxDUa_dshwe-resize-corner-bar{border-left:3px solid var(--dsw-alias-border-l2,#80808066);border-bottom:3px solid var(--dsw-alias-border-l2,#80808066);opacity:.7;border-bottom-left-radius:6px;width:16px;height:16px}._4fxDUa_dshwe-resize-corner:hover ._4fxDUa_dshwe-resize-corner-bar{border-color:var(--dsw-alias-state-business-primary,#4176e6);opacity:1}._4fxDUa_dshwe-preview-panel{flex-direction:column;flex:1;min-width:0;display:flex;overflow:hidden}._4fxDUa_dshwe-preview-head{flex-wrap:wrap;flex:none;align-items:center;gap:6px;padding:10px 12px 6px;display:flex}._4fxDUa_dshwe-preview-name{text-overflow:ellipsis;white-space:nowrap;min-width:0;font-size:12.5px;font-weight:600;overflow:hidden}._4fxDUa_dshwe-preview-meta{color:var(--dsw-alias-label-caption,#8a8a8a);flex:none;font-size:11px}._4fxDUa_dshwe-preview-pre{color:var(--dsw-alias-label-primary,#e8e8e8);white-space:pre;flex:1;margin:0;padding:4px 12px 10px;font:11.5px/1.6 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;overflow:auto}._4fxDUa_dshwe-md{color:var(--dsw-alias-label-primary,#e8e8e8);overflow-wrap:anywhere;flex:1;margin:0;padding:6px 14px 12px;font-size:12.5px;line-height:1.65;overflow:auto}._4fxDUa_dshwe-md>:first-child{margin-top:2px}._4fxDUa_dshwe-md-h{border-bottom:1px solid var(--dsw-alias-border-l3,#80808033);margin:12px 0 6px;padding-bottom:4px;font-weight:700;line-height:1.4}._4fxDUa_dshwe-md-h1{font-size:17px}._4fxDUa_dshwe-md-h2{font-size:15px}._4fxDUa_dshwe-md-h3{border-bottom:0;padding-bottom:0;font-size:13.5px}._4fxDUa_dshwe-md-h4,._4fxDUa_dshwe-md-h5,._4fxDUa_dshwe-md-h6{color:var(--dsw-alias-label-secondary,#9a9a9a);border-bottom:0;padding-bottom:0;font-size:12.5px}._4fxDUa_dshwe-md-p{margin:6px 0}._4fxDUa_dshwe-md-code{background:var(--dsw-alias-interactive-bg-hover,#80808024);border-radius:5px;padding:1px 5px;font:11.5px/1.6 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}._4fxDUa_dshwe-md-pre{background:var(--dsw-alias-bg-layer-1,#222);border:1px solid var(--dsw-alias-border-l3,#80808033);white-space:pre;border-radius:10px;margin:8px 0;padding:10px 12px;font:11.5px/1.6 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;position:relative;overflow:auto}._4fxDUa_dshwe-md-pre code{background:0 0;padding:0}._4fxDUa_dshwe-md-lang{color:var(--dsw-alias-label-caption,#8a8a8a);font:10px/1.4 -apple-system,Segoe UI,sans-serif;position:absolute;top:6px;right:10px}._4fxDUa_dshwe-md-quote{border-left:3px solid var(--dsw-alias-state-business-primary,#4176e6);color:var(--dsw-alias-label-secondary,#9a9a9a);margin:8px 0;padding:2px 0 2px 12px}._4fxDUa_dshwe-md-quote>:first-child{margin-top:0}._4fxDUa_dshwe-md-quote>:last-child{margin-bottom:0}._4fxDUa_dshwe-md-ul,._4fxDUa_dshwe-md-ol,._4fxDUa_dshwe-md-task{margin:6px 0;padding-left:22px}._4fxDUa_dshwe-md-ul li,._4fxDUa_dshwe-md-ol li,._4fxDUa_dshwe-md-task li{margin:3px 0}._4fxDUa_dshwe-md-ul li::marker,._4fxDUa_dshwe-md-ol li::marker{color:var(--dsw-alias-label-caption,#8a8a8a)}._4fxDUa_dshwe-md-task{padding-left:4px;list-style:none}._4fxDUa_dshwe-md-check{border:1px solid var(--dsw-alias-border-l2,#80808066);color:#fff;vertical-align:-1px;border-radius:4px;justify-content:center;align-items:center;width:14px;height:14px;margin-right:7px;font-size:10px;line-height:1;display:inline-flex}._4fxDUa_dshwe-md-check-on{background:var(--dsw-alias-state-business-primary,#4176e6);border-color:#0000}._4fxDUa_dshwe-md-hr{border:0;border-top:1px solid var(--dsw-alias-border-l3,#80808033);margin:12px 0}._4fxDUa_dshwe-md-link{color:var(--dsw-alias-state-business-primary,#4176e6)}._4fxDUa_dshwe-mm{border:1px solid var(--dsw-alias-border-l3,#80808033);background:var(--dsw-alias-bg-layer-1,#222);border-radius:10px;margin:8px 0;overflow:hidden}._4fxDUa_dshwe-mm-bar{justify-content:space-between;align-items:center;gap:8px;padding:6px 10px;display:flex}._4fxDUa_dshwe-mm-bar ._4fxDUa_dshwe-md-lang{position:static}._4fxDUa_dshwe-mm-svg{justify-content:center;padding:4px 10px 10px;display:flex;overflow:auto}._4fxDUa_dshwe-mm-svg svg{max-width:100%;height:auto}._4fxDUa_dshwe-mm ._4fxDUa_dshwe-md-pre{margin:0 10px 10px}._4fxDUa_dshwe-md-tablewrap{border:1px solid var(--dsw-alias-border-l3,#80808033);border-radius:10px;margin:8px 0;overflow:auto}._4fxDUa_dshwe-md-table{border-collapse:collapse;width:100%;font-size:12px}._4fxDUa_dshwe-md-table th,._4fxDUa_dshwe-md-table td{border-bottom:1px solid var(--dsw-alias-border-l3,#80808033);text-align:left;vertical-align:top;padding:6px 10px}._4fxDUa_dshwe-md-table thead th{background:var(--dsw-alias-bg-layer-1,#222);font-weight:600}._4fxDUa_dshwe-md-table tbody tr:last-child td{border-bottom:0}._4fxDUa_dshwe-prevbtn-on{color:var(--dsw-alias-state-business-primary,#4176e6);border-color:#4176e680}._4fxDUa_dshwe-preview-actions{flex:none;align-items:center;gap:8px;padding:0 12px 10px;display:flex}._4fxDUa_dshwe-editor{resize:none;color:var(--dsw-alias-label-primary,#e8e8e8);white-space:pre;tab-size:2;background:0 0;border:0;outline:none;flex:1;padding:4px 12px 10px;font:11.5px/1.6 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;overflow:auto}._4fxDUa_dshwe-editor:focus{outline:none}._4fxDUa_dshwe-edit-saving{color:var(--dsw-alias-label-caption,#8a8a8a);font-size:11px}._4fxDUa_dshwe-edit-saveerr{color:var(--dsw-alias-state-error-primary,#e5484d);text-overflow:ellipsis;white-space:nowrap;max-width:120px;font-size:11px;overflow:hidden}._4fxDUa_dshwe-prevbtn{border:1px solid var(--dsw-alias-border-l2,#80808059);height:28px;color:var(--dsw-alias-label-secondary,#9a9a9a);font:inherit;cursor:pointer;background:0 0;border-radius:8px;flex:none;justify-content:center;align-items:center;padding:0 10px;font-size:12px;display:inline-flex}._4fxDUa_dshwe-prevbtn:hover{color:var(--dsw-alias-label-primary,#e8e8e8);background:var(--dsw-alias-interactive-bg-hover,#8080801f)}._4fxDUa_dshwe-prevbtn:disabled{opacity:.45;cursor:not-allowed}._4fxDUa_dshwe-hint{border:1.5px dashed var(--dsw-alias-state-business-primary,#4176e6);pointer-events:none;border-radius:20px;justify-content:center;align-items:center;display:flex;position:absolute;inset:10px}._4fxDUa_dshwe-hint-chip{background:var(--dsw-alias-bg-layer-2,#262626);color:var(--dsw-alias-label-primary,#e8e8e8);box-shadow:var(--dsw-shadow-lv2,0 4px 12px #00000040);border-radius:999px;align-items:center;gap:7px;padding:9px 15px;font-size:13px;display:flex}._4fxDUa_dshwe-hint-chip svg{color:var(--dsw-alias-state-business-primary,#4176e6)}._4fxDUa_dshwe-act{color:var(--dsw-alias-label-secondary,#9a9a9a);cursor:pointer;font:inherit;background:0 0;border:0;border-radius:8px;align-items:center;gap:6px;padding:5px 8px;display:inline-flex}._4fxDUa_dshwe-act:hover{background:var(--dsw-alias-interactive-bg-hover,#8080801f);color:var(--dsw-alias-label-primary,#e8e8e8)}._4fxDUa_dshwe-act-on{color:var(--dsw-alias-state-business-primary,#4176e6)}._4fxDUa_dshwe-row:focus-visible,._4fxDUa_dshwe-hicon:focus-visible,._4fxDUa_dshwe-icobtn:focus-visible,._4fxDUa_dshwe-act:focus-visible,._4fxDUa_dshwe-addbtn:focus-visible,._4fxDUa_dshwe-prevbtn:focus-visible,._4fxDUa_dshwe-file-ico-btn:focus-visible,._4fxDUa_dshwe-share-btn:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary,#4176e6);outline-offset:-2px}._4fxDUa_dshwe-tabs{border-bottom:1px solid var(--dsw-alias-border-l3,#80808033);flex:none;gap:2px;padding:0 14px;display:flex}._4fxDUa_dshwe-tab{height:36px;color:var(--dsw-alias-label-secondary,#9a9a9a);font:inherit;cursor:pointer;background:0 0;border:0;border-radius:10px 10px 0 0;flex:1;justify-content:center;align-items:center;gap:6px;font-size:12.5px;font-weight:500;display:inline-flex;position:relative}._4fxDUa_dshwe-tab:hover{color:var(--dsw-alias-label-primary,#e8e8e8);background:var(--dsw-alias-interactive-bg-hover,#80808014)}._4fxDUa_dshwe-tab-on{color:var(--dsw-alias-label-primary,#e8e8e8)}._4fxDUa_dshwe-tab-ind{background:var(--dsw-alias-state-business-primary,#4176e6);opacity:0;border-radius:999px;height:2px;transition:opacity .16s,transform .16s;position:absolute;bottom:-1px;left:24%;right:24%;transform:scaleX(.4)}._4fxDUa_dshwe-tab-on ._4fxDUa_dshwe-tab-ind{opacity:1;transform:scaleX(1)}._4fxDUa_dshwe-tab:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary,#4176e6);outline-offset:-2px}@media (prefers-reduced-motion:reduce){._4fxDUa_dshwe-tab-ind{transition:none}}._4fxDUa_dshwe-tabbody{flex-direction:column;flex:1;min-height:0;display:flex}._4fxDUa_dshwe-set{flex-direction:column;flex:1;gap:2px;padding:8px 16px 14px;display:flex;overflow:auto}._4fxDUa_dshwe-setsec{letter-spacing:.05em;text-transform:uppercase;color:var(--dsw-alias-label-caption,#8a8a8a);padding:10px 4px 6px;font-size:11px;font-weight:600}._4fxDUa_dshwe-setrow{border-radius:12px;align-items:center;gap:12px;padding:9px 10px;display:flex}._4fxDUa_dshwe-setrow:hover{background:var(--dsw-alias-interactive-bg-hover,#8080800f)}._4fxDUa_dshwe-setinfo{flex-direction:column;flex:1;gap:2px;min-width:0;display:flex}._4fxDUa_dshwe-setlabel{color:var(--dsw-alias-label-primary,#e8e8e8);font-size:12.5px}._4fxDUa_dshwe-setcap{color:var(--dsw-alias-label-caption,#8a8a8a);font-size:11px}._4fxDUa_dshwe-switch{border:1px solid var(--dsw-alias-border-l2,#80808066);background:var(--dsw-alias-interactive-bg-hover,#8080802e);cursor:pointer;border-radius:999px;flex:none;width:34px;height:20px;padding:0;transition:background .15s,border-color .15s;position:relative}._4fxDUa_dshwe-switch:after{content:\"\";background:var(--dsw-alias-label-secondary,#9a9a9a);border-radius:50%;width:14px;height:14px;transition:transform .15s;position:absolute;top:2px;left:2px}._4fxDUa_dshwe-switch[aria-checked=true]{background:var(--dsw-alias-state-business-primary,#4176e6);border-color:#0000}._4fxDUa_dshwe-switch[aria-checked=true]:after{background:#fff;transform:translate(14px)}@media (prefers-reduced-motion:reduce){._4fxDUa_dshwe-switch,._4fxDUa_dshwe-switch:after{transition:none}}._4fxDUa_dshwe-setselect{min-width:118px;height:28px;color:var(--dsw-alias-label-primary,#e8e8e8);border:1px solid var(--dsw-alias-border-l2,#80808059);font:inherit;background:0 0;border-radius:8px;outline:none;flex:none;padding:0 8px;font-size:12px}._4fxDUa_dshwe-setselect:focus-visible{border-color:var(--dsw-alias-state-business-primary,#4176e6)}._4fxDUa_dshwe-setfoot{justify-content:flex-end;padding:8px 4px 2px;display:flex}._4fxDUa_dshwe-setnote{color:var(--dsw-alias-label-dimmed,#777);padding:2px 10px 8px;font-size:11px}._4fxDUa_dshwe-setpage{max-width:640px;padding:8px 8px 28px}._4fxDUa_dshwe-star-section{border-top:1px solid var(--dsw-alias-border-l3,#80808033);padding:12px 10px 0}._4fxDUa_dshwe-star-row{align-items:center;gap:12px;display:flex}._4fxDUa_dshwe-star-info{flex-direction:column;flex:1;gap:2px;min-width:0;display:flex}._4fxDUa_dshwe-star-label{color:var(--dsw-alias-label-primary,#e8e8e8);font-size:12.5px}._4fxDUa_dshwe-star-link{border:1px solid var(--dsw-alias-border-l2,#80808059);height:28px;color:var(--dsw-alias-state-business-primary,#4176e6);font:inherit;cursor:pointer;white-space:nowrap;background:0 0;border-radius:8px;flex:none;justify-content:center;align-items:center;padding:0 12px;font-size:12px;text-decoration:none;transition:background .12s,color .12s;display:inline-flex}._4fxDUa_dshwe-star-link:hover{background:var(--dsw-alias-interactive-bg-hover,#8080801f)}.dsw-text-ref,[data-text-ref]{background:#5a9e6f1f;border-radius:3px;padding:1px 3px;font-weight:500;transition:background .15s;color:#5a9e6f!important}.dsw-text-ref:hover,[data-text-ref]:hover{background:#5a9e6f38}";
		const tagId = "@doubleelec/dsh-workspace-explorer/panel.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@doubleelec/dsh-workspace-explorer";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		var _dsh_css_panel_module_css_default = {
			"dshwe-act": "_4fxDUa_dshwe-act",
			"dshwe-act-on": "_4fxDUa_dshwe-act-on",
			"dshwe-addbtn": "_4fxDUa_dshwe-addbtn",
			"dshwe-body": "_4fxDUa_dshwe-body",
			"dshwe-chev": "_4fxDUa_dshwe-chev",
			"dshwe-chev-on": "_4fxDUa_dshwe-chev-on",
			"dshwe-chev-slot": "_4fxDUa_dshwe-chev-slot",
			"dshwe-edit-saveerr": "_4fxDUa_dshwe-edit-saveerr",
			"dshwe-edit-saving": "_4fxDUa_dshwe-edit-saving",
			"dshwe-editor": "_4fxDUa_dshwe-editor",
			"dshwe-empty": "_4fxDUa_dshwe-empty",
			"dshwe-empty-ico": "_4fxDUa_dshwe-empty-ico",
			"dshwe-file-ico-btn": "_4fxDUa_dshwe-file-ico-btn",
			"dshwe-filter": "_4fxDUa_dshwe-filter",
			"dshwe-filter-clear": "_4fxDUa_dshwe-filter-clear",
			"dshwe-filterrow": "_4fxDUa_dshwe-filterrow",
			"dshwe-folder-svg": "_4fxDUa_dshwe-folder-svg",
			"dshwe-head": "_4fxDUa_dshwe-head",
			"dshwe-head-ico": "_4fxDUa_dshwe-head-ico",
			"dshwe-hicon": "_4fxDUa_dshwe-hicon",
			"dshwe-hicon-on": "_4fxDUa_dshwe-hicon-on",
			"dshwe-hint": "_4fxDUa_dshwe-hint",
			"dshwe-hint-chip": "_4fxDUa_dshwe-hint-chip",
			"dshwe-hintline": "_4fxDUa_dshwe-hintline",
			"dshwe-ico": "_4fxDUa_dshwe-ico",
			"dshwe-icobtn": "_4fxDUa_dshwe-icobtn",
			"dshwe-layer": "_4fxDUa_dshwe-layer",
			"dshwe-md": "_4fxDUa_dshwe-md",
			"dshwe-md-check": "_4fxDUa_dshwe-md-check",
			"dshwe-md-check-on": "_4fxDUa_dshwe-md-check-on",
			"dshwe-md-code": "_4fxDUa_dshwe-md-code",
			"dshwe-md-h": "_4fxDUa_dshwe-md-h",
			"dshwe-md-h1": "_4fxDUa_dshwe-md-h1",
			"dshwe-md-h2": "_4fxDUa_dshwe-md-h2",
			"dshwe-md-h3": "_4fxDUa_dshwe-md-h3",
			"dshwe-md-h4": "_4fxDUa_dshwe-md-h4",
			"dshwe-md-h5": "_4fxDUa_dshwe-md-h5",
			"dshwe-md-h6": "_4fxDUa_dshwe-md-h6",
			"dshwe-md-hr": "_4fxDUa_dshwe-md-hr",
			"dshwe-md-lang": "_4fxDUa_dshwe-md-lang",
			"dshwe-md-link": "_4fxDUa_dshwe-md-link",
			"dshwe-md-ol": "_4fxDUa_dshwe-md-ol",
			"dshwe-md-p": "_4fxDUa_dshwe-md-p",
			"dshwe-md-pre": "_4fxDUa_dshwe-md-pre",
			"dshwe-md-quote": "_4fxDUa_dshwe-md-quote",
			"dshwe-md-table": "_4fxDUa_dshwe-md-table",
			"dshwe-md-tablewrap": "_4fxDUa_dshwe-md-tablewrap",
			"dshwe-md-task": "_4fxDUa_dshwe-md-task",
			"dshwe-md-ul": "_4fxDUa_dshwe-md-ul",
			"dshwe-mm": "_4fxDUa_dshwe-mm",
			"dshwe-mm-bar": "_4fxDUa_dshwe-mm-bar",
			"dshwe-mm-svg": "_4fxDUa_dshwe-mm-svg",
			"dshwe-name": "_4fxDUa_dshwe-name",
			"dshwe-note": "_4fxDUa_dshwe-note",
			"dshwe-note-err": "_4fxDUa_dshwe-note-err",
			"dshwe-pager-btn": "_4fxDUa_dshwe-pager-btn",
			"dshwe-panel": "_4fxDUa_dshwe-panel",
			"dshwe-popup": "_4fxDUa_dshwe-popup",
			"dshwe-popup-full": "_4fxDUa_dshwe-popup-full",
			"dshwe-popup-on": "_4fxDUa_dshwe-popup-on",
			"dshwe-prevbtn": "_4fxDUa_dshwe-prevbtn",
			"dshwe-prevbtn-on": "_4fxDUa_dshwe-prevbtn-on",
			"dshwe-preview-actions": "_4fxDUa_dshwe-preview-actions",
			"dshwe-preview-btn": "_4fxDUa_dshwe-preview-btn",
			"dshwe-preview-btn-on": "_4fxDUa_dshwe-preview-btn-on",
			"dshwe-preview-head": "_4fxDUa_dshwe-preview-head",
			"dshwe-preview-meta": "_4fxDUa_dshwe-preview-meta",
			"dshwe-preview-name": "_4fxDUa_dshwe-preview-name",
			"dshwe-preview-panel": "_4fxDUa_dshwe-preview-panel",
			"dshwe-preview-pre": "_4fxDUa_dshwe-preview-pre",
			"dshwe-preview-slot": "_4fxDUa_dshwe-preview-slot",
			"dshwe-preview-tab": "_4fxDUa_dshwe-preview-tab",
			"dshwe-resize-corner": "_4fxDUa_dshwe-resize-corner",
			"dshwe-resize-corner-bar": "_4fxDUa_dshwe-resize-corner-bar",
			"dshwe-row": "_4fxDUa_dshwe-row",
			"dshwe-row-active": "_4fxDUa_dshwe-row-active",
			"dshwe-row-dir": "_4fxDUa_dshwe-row-dir",
			"dshwe-row-file": "_4fxDUa_dshwe-row-file",
			"dshwe-row-preview-dot": "_4fxDUa_dshwe-row-preview-dot",
			"dshwe-row-sel": "_4fxDUa_dshwe-row-sel",
			"dshwe-selbar": "_4fxDUa_dshwe-selbar",
			"dshwe-selbar-count": "_4fxDUa_dshwe-selbar-count",
			"dshwe-set": "_4fxDUa_dshwe-set",
			"dshwe-setcap": "_4fxDUa_dshwe-setcap",
			"dshwe-setfoot": "_4fxDUa_dshwe-setfoot",
			"dshwe-setinfo": "_4fxDUa_dshwe-setinfo",
			"dshwe-setlabel": "_4fxDUa_dshwe-setlabel",
			"dshwe-setnote": "_4fxDUa_dshwe-setnote",
			"dshwe-setpage": "_4fxDUa_dshwe-setpage",
			"dshwe-setrow": "_4fxDUa_dshwe-setrow",
			"dshwe-setsec": "_4fxDUa_dshwe-setsec",
			"dshwe-setselect": "_4fxDUa_dshwe-setselect",
			"dshwe-share-btn": "_4fxDUa_dshwe-share-btn",
			"dshwe-share-btn-on": "_4fxDUa_dshwe-share-btn-on",
			"dshwe-size": "_4fxDUa_dshwe-size",
			"dshwe-slide-in": "_4fxDUa_dshwe-slide-in",
			"dshwe-spin": "_4fxDUa_dshwe-spin",
			"dshwe-star-info": "_4fxDUa_dshwe-star-info",
			"dshwe-star-label": "_4fxDUa_dshwe-star-label",
			"dshwe-star-link": "_4fxDUa_dshwe-star-link",
			"dshwe-star-row": "_4fxDUa_dshwe-star-row",
			"dshwe-star-section": "_4fxDUa_dshwe-star-section",
			"dshwe-switch": "_4fxDUa_dshwe-switch",
			"dshwe-tab": "_4fxDUa_dshwe-tab",
			"dshwe-tab-ind": "_4fxDUa_dshwe-tab-ind",
			"dshwe-tab-on": "_4fxDUa_dshwe-tab-on",
			"dshwe-tabbody": "_4fxDUa_dshwe-tabbody",
			"dshwe-tabs": "_4fxDUa_dshwe-tabs",
			"dshwe-title": "_4fxDUa_dshwe-title",
			"dshwe-tree": "_4fxDUa_dshwe-tree",
			"dshwe-tree-col": "_4fxDUa_dshwe-tree-col"
		};
		//#endregion
		//#region src/client/format.ts
		/**
		* 纯格式化工具(浏览器端,无 DOM / 无副作用),供面板与单元测试复用。
		*/
		/** 人类可读文件大小(空值返回空串)。 */
		const fmtSize = (n) => {
			if (n == null) return "";
			if (n < 1024) return `${n} B`;
			if (n < 1048576) return `${(n / 1024).toFixed(1)} KB`;
			return `${(n / 1048576).toFixed(1)} MB`;
		};
		/** 浏览器安全的 basename(兼容正斜杠结尾;DSH 内不依赖 node:path)。 */
		const basename = (p) => {
			const s = p.replace(/\/+$/, "");
			const i = s.lastIndexOf("/");
			return i >= 0 ? s.slice(i + 1) : s;
		};
		/** 取小写扩展名;点开头(隐藏文件)或无扩展名返回空串。 */
		const extOf = (name) => {
			const i = name.lastIndexOf(".");
			return i <= 0 ? "" : name.slice(i + 1).toLowerCase();
		};
		/** 展示层噪声目录名单(与 host 名单一致,前端展示过滤用,host 不动)。 */
		const NOISE_DIRS = [
			".git",
			"node_modules",
			"__pycache__",
			".venv",
			"venv",
			".pytest_cache",
			".ruff_cache",
			".mypy_cache",
			"dist",
			"build",
			".next",
			".nuxt",
			"coverage",
			".idea",
			"target"
		];
		/** 展示层噪声判断(纯前端,host 不动):名单命中的目录必藏;hideNoise 开时外加所有 `.` 开头目录。点开头文件永远保留。 */
		function isNoiseDir(name, hideNoise) {
			return NOISE_DIRS.includes(name) || hideNoise && name.startsWith(".");
		}
		/** 展示层过滤:文件树渲染前调用;host 返回全量,@ 搜索走原数据不受影响。 */
		function visibleEntries(entries, hideNoise) {
			if (!hideNoise) return entries.filter((e) => !(e.type === "directory" && NOISE_DIRS.includes(e.name)));
			return entries.filter((e) => e.type !== "directory" || !isNoiseDir(e.name, true));
		}
		//#endregion
		//#region src/client/markdown.ts
		const INLINE_RULES = [
			{
				re: /(`[^`\n]+`)/,
				kind: "code"
			},
			{
				re: /(\*\*[^*\n]+\*\*|__[^_\n]+__)/,
				kind: "b"
			},
			{
				re: /(\*[^*\n]+\*|_[^_\n]+_)/,
				kind: "i"
			},
			{
				re: /(~~[^~\n]+~~)/,
				kind: "s"
			},
			{
				re: /(\[[^\]\n]+\]\([^)\n]+\))/,
				kind: "link"
			}
		];
		/** 解析行内格式,返回 inline 节点数组。 */
		function parseInline(src) {
			const out = [];
			let rest = src;
			while (rest !== "") {
				let earliest = null;
				for (const rule of INLINE_RULES) {
					const m = rule.re.exec(rest);
					if (!m || m.index == null) continue;
					if (earliest === null || m.index < earliest.idx) earliest = {
						idx: m.index,
						len: m[0].length,
						kind: rule.kind,
						inner: m[0]
					};
				}
				if (earliest === null) {
					out.push({
						t: "text",
						text: rest
					});
					break;
				}
				if (earliest.idx > 0) out.push({
					t: "text",
					text: rest.slice(0, earliest.idx)
				});
				const inner = earliest.inner;
				if (earliest.kind === "code") out.push({
					t: "code",
					text: inner.slice(1, -1)
				});
				else if (earliest.kind === "link") {
					const m = /^\[([^\]\n]+)\]\(([^)\n]+)\)$/.exec(inner);
					out.push(m ? {
						t: "link",
						text: `${m[1]} (${m[2]})`
					} : {
						t: "text",
						text: inner
					});
				} else {
					const strip = earliest.kind === "s" ? 2 : earliest.kind === "b" && inner.startsWith("**") ? 2 : earliest.kind === "b" ? 2 : 1;
					const kids = parseInline(inner.slice(strip, inner.length - strip));
					out.push(earliest.kind === "b" ? {
						t: "b",
						children: kids
					} : earliest.kind === "i" ? {
						t: "i",
						children: kids
					} : {
						t: "s",
						children: kids
					});
				}
				rest = rest.slice(earliest.idx + earliest.len);
			}
			return out;
		}
		function isTableDelim(line) {
			const cells = line.trim().replace(/^\||\|$/g, "").split("|");
			return cells.length > 0 && cells.every((c) => /^:?-{1,}:?$/.test(c.trim()));
		}
		function splitRow(line) {
			return line.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
		}
		/** 解析整篇 Markdown 为块节点数组。 */
		function parseMarkdown(src) {
			const lines = src.replace(/\r\n?/g, "\n").split("\n");
			const blocks = [];
			let i = 0;
			const pushPara = (buf) => {
				if (buf.join("\n").trim() !== "") blocks.push({
					t: "p",
					inline: parseInline(buf.join("\n"))
				});
			};
			let para = [];
			while (i < lines.length) {
				const line = lines[i];
				const fence = /^(`{3,}|~{3,})\s*([\w+-]*)\s*$/.exec(line);
				if (fence) {
					pushPara(para);
					para = [];
					const tick = fence[1][0];
					const lang = fence[2] ?? "";
					const buf = [];
					i++;
					while (i < lines.length && !new RegExp(`^${tick}{3,}\\s*$`).test(lines[i])) {
						buf.push(lines[i]);
						i++;
					}
					i++;
					blocks.push({
						t: "code",
						lang,
						text: buf.join("\n")
					});
					continue;
				}
				if (/^( {4}|\t)\S/.test(line)) {
					pushPara(para);
					para = [];
					const buf = [];
					while (i < lines.length && (/^( {4}|\t)/.test(lines[i]) || lines[i].trim() === "")) {
						buf.push(lines[i].replace(/^( {4}|\t)/, ""));
						i++;
					}
					while (buf.length > 0 && buf[buf.length - 1].trim() === "") buf.pop();
					blocks.push({
						t: "code",
						lang: "",
						text: buf.join("\n")
					});
					continue;
				}
				const h = /^(#{1,6})\s+(.+?)\s*#*\s*$/.exec(line);
				if (h) {
					pushPara(para);
					para = [];
					blocks.push({
						t: "h",
						level: Math.min(6, h[1].length),
						inline: parseInline(h[2])
					});
					i++;
					continue;
				}
				if (/^\s*([-*_])(\s*\1){2,}\s*$/.test(line)) {
					pushPara(para);
					para = [];
					blocks.push({ t: "hr" });
					i++;
					continue;
				}
				if (/^\s*>/.test(line)) {
					pushPara(para);
					para = [];
					const buf = [];
					while (i < lines.length && /^\s*>/.test(lines[i])) {
						buf.push(lines[i].replace(/^\s*> ?/, ""));
						i++;
					}
					blocks.push({
						t: "quote",
						children: parseMarkdown(buf.join("\n"))
					});
					continue;
				}
				if (line.includes("|") && i + 1 < lines.length && isTableDelim(lines[i + 1])) {
					pushPara(para);
					para = [];
					const head = splitRow(line).map((c) => parseInline(c));
					i += 2;
					const rows = [];
					while (i < lines.length && lines[i].includes("|") && lines[i].trim() !== "") {
						rows.push(splitRow(lines[i]).map((c) => parseInline(c)));
						i++;
					}
					blocks.push({
						t: "table",
						head,
						rows
					});
					continue;
				}
				const ulm = /^\s*([*+-])\s+(.*)$/.exec(line);
				const olm = /^\s*(\d+)[.)]\s+(.*)$/.exec(line);
				const taskm = /^\s*[*+-]\s+\[([ xX])\]\s+(.*)$/.exec(line);
				if (taskm || ulm || olm) {
					pushPara(para);
					para = [];
					if (taskm || ulm && /^\s*[*+-]\s+\[[ xX]\]\s+/.test(line)) {
						const checked = [];
						const items = [];
						while (i < lines.length) {
							const tm = /^\s*[*+-]\s+\[([ xX])\]\s+(.*)$/.exec(lines[i]);
							if (!tm) break;
							checked.push(tm[1].toLowerCase() === "x");
							items.push(parseInline(tm[2]));
							i++;
						}
						blocks.push({
							t: "task",
							checked,
							items
						});
					} else if (olm && !ulm) {
						const start = parseInt(olm[1], 10);
						const items = [];
						while (i < lines.length) {
							const om = /^\s*\d+[.)]\s+(.*)$/.exec(lines[i]);
							if (!om) break;
							items.push(parseInline(om[1]));
							i++;
						}
						blocks.push({
							t: "ol",
							start: Number.isNaN(start) ? 1 : start,
							items
						});
					} else {
						const items = [];
						while (i < lines.length) {
							const um = /^\s*[*+-]\s+(.*)$/.exec(lines[i]);
							if (!um || /^\s*[*+-]\s+\[[ xX]\]\s+/.test(lines[i])) break;
							items.push(parseInline(um[1]));
							i++;
						}
						blocks.push({
							t: "ul",
							items
						});
					}
					continue;
				}
				if (line.trim() === "") {
					pushPara(para);
					para = [];
					i++;
					continue;
				}
				para.push(line);
				i++;
			}
			pushPara(para);
			return blocks;
		}
		/** 是否 Markdown 文件(按扩展名)。 */
		function isMarkdownFile(name) {
			const i = name.lastIndexOf(".");
			if (i <= 0) return false;
			const ext = name.slice(i + 1).toLowerCase();
			return ext === "md" || ext === "mdx" || ext === "markdown" || ext === "mkd";
		}
		//#endregion
		//#region src/client/mermaid.ts
		/**
		* Mermaid 图表懒加载(浏览器端)。
		*
		* 约束:client bundle 走 purity 门禁(非平台 @deepseek-ai/* 一律内联),
		* mermaid 体积 ~1MB+ 不能打进 lib/client.js(当前仅 119KB)。
		* 因此运行时从 CDN 懒加载,点「渲染图表」时才拉取;无网/CSP 拦截时
		* 回落显示源码,不阻塞 Markdown 预览主流程。
		*/
		const MERMAID_CDN_URLS = ["https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js", "https://unpkg.com/mermaid@10/dist/mermaid.min.js"];
		/** 是否 mermaid 代码块(大小写/首尾空格不敏感)。 */
		function isMermaidLang(lang) {
			return lang.trim().toLowerCase() === "mermaid";
		}
		let cached = null;
		function injectScript(src) {
			return new Promise((resolve, reject) => {
				const el = document.createElement("script");
				el.src = src;
				el.async = true;
				el.crossOrigin = "anonymous";
				el.onload = () => resolve();
				el.onerror = () => {
					el.remove();
					reject(/* @__PURE__ */ new Error(`load failed: ${src}`));
				};
				document.head.appendChild(el);
			});
		}
		function pickTheme() {
			try {
				return window.matchMedia("(prefers-color-scheme: light)").matches ? "default" : "dark";
			} catch {
				return "dark";
			}
		}
		/** 懒加载 mermaid(首选 jsdelivr,失败回落 unpkg),并完成一次性 initialize。 */
		function loadMermaid() {
			const w = window;
			if (w.mermaid?.render) return Promise.resolve(w.mermaid);
			if (cached) return cached;
			cached = (async () => {
				let lastErr = null;
				for (const url of MERMAID_CDN_URLS) try {
					await injectScript(url);
					const api = window.mermaid;
					if (api?.render) {
						try {
							api.initialize({
								startOnLoad: false,
								securityLevel: "strict",
								theme: pickTheme()
							});
						} catch {}
						return api;
					}
					lastErr = /* @__PURE__ */ new Error(`no mermaid api at ${url}`);
				} catch (err) {
					lastErr = err;
				}
				cached = null;
				throw lastErr instanceof Error ? lastErr : /* @__PURE__ */ new Error("mermaid load failed");
			})();
			return cached;
		}
		/** 手动高度 localStorage key。 */
		const POPUP_MANUAL_KEY = "dshwe.popupH.v1";
		/** 手动宽度 localStorage key。 */
		const POPUP_MANUAL_W_KEY = "dshwe.popupW.v1";
		/**
		* 自动高度数学(measurePopup 的 DOM-free 部分)。
		* @param top - 弹窗顶部(会话 header 底部 + 8)。
		* @param bottomLimit - 底部上限(输入框顶部 − 8,无输入框时 vh − 48)。
		* @param vh - 视口高度(移动端取 min(innerHeight, visualViewport.height))。
		* @returns 钳制到 [minH, vh − top − 16] 的高度;空间不足保底 minH(允许轻微盖住输入框)。
		*/
		function autoPopupHeight(top, bottomLimit, vh, minH = 320) {
			const maxH = Math.max(minH, vh - top - 16);
			return Math.min(Math.max(minH, bottomLimit - top), maxH);
		}
		/**
		* 手动高度钳制(拖拽中 / 渲染时用,顺手取整)。
		*/
		function clampPopupHeight(h, top, vh, minH = 320) {
			const maxH = Math.max(minH, vh - top - 16);
			return Math.min(Math.max(minH, Math.round(h)), maxH);
		}
		/**
		* 读手动高度:无存储 / 非法值 / 无 window(node 单测)一律返回 null(回落自动高度)。
		*/
		function loadManualHeight(key = POPUP_MANUAL_KEY) {
			try {
				if (typeof window === "undefined" || !window.localStorage) return null;
				const raw = window.localStorage.getItem(key);
				if (raw == null || raw === "") return null;
				const n = Number(raw);
				return Number.isFinite(n) && n > 0 ? n : null;
			} catch {
				return null;
			}
		}
		/**
		* 写手动高度:null 清除(恢复自动);存储不可用时静默忽略,自动高度兜底。
		*/
		function saveManualHeight(h, key = POPUP_MANUAL_KEY) {
			try {
				if (typeof window === "undefined" || !window.localStorage) return;
				if (h == null) window.localStorage.removeItem(key);
				else window.localStorage.setItem(key, String(Math.round(h)));
			} catch {}
		}
		/**
		* 手动宽度钳制(拖拽中 / 渲染时用,顺手取整)。
		* @param w - 拖拽目标宽度;左边缘左拉变宽(增量为负),右推变窄。
		* @param vw - 视口宽度;最大留 16px 边距,手机上自动收窄不挤出屏幕。
		*/
		function clampPopupWidth(w, vw, minW = 280) {
			const maxW = Math.max(minW, vw - 32);
			return Math.min(Math.max(minW, Math.round(w)), maxW);
		}
		/**
		* 读手动宽度:无存储 / 非法值 / 无 window(node 单测)一律返回 null(回落设置页宽度)。
		*/
		function loadManualWidth(key = POPUP_MANUAL_W_KEY) {
			try {
				if (typeof window === "undefined" || !window.localStorage) return null;
				const raw = window.localStorage.getItem(key);
				if (raw == null || raw === "") return null;
				const n = Number(raw);
				return Number.isFinite(n) && n > 0 ? n : null;
			} catch {
				return null;
			}
		}
		/**
		* 写手动宽度:null 清除(恢复设置页宽度);存储不可用时静默忽略。
		*/
		function saveManualWidth(w, key = POPUP_MANUAL_W_KEY) {
			try {
				if (typeof window === "undefined" || !window.localStorage) return;
				if (w == null) window.localStorage.removeItem(key);
				else window.localStorage.setItem(key, String(Math.round(w)));
			} catch {}
		}
		//#endregion
		//#region package.json
		var version = "0.9.0";
		//#endregion
		//#region src/client/previewState.ts
		let savedTab = "files";
		let savedPreview = null;
		let savedMdView = "rendered";
		function getSavedTab() {
			return savedTab;
		}
		function savePreviewTab(t) {
			savedTab = t;
		}
		function getSavedPreview() {
			return savedPreview;
		}
		function savePreviewRef(root, rel, name, size) {
			savedPreview = {
				root,
				rel,
				name,
				size
			};
		}
		function clearSavedPreview() {
			savedPreview = null;
		}
		function getSavedMdView() {
			return savedMdView;
		}
		function saveMdView(v) {
			savedMdView = v;
		}
		/** 同 root 才恢复预览(工作区切换后旧 rel 不再有效)。 */
		function shouldRestorePreview(saved, root) {
			return saved !== null && root !== null && saved.root === root;
		}
		//#endregion
		//#region src/client/index.tsx
		/**
		* dsh-workspace-explorer — Client 半区(原生包 v0.3)
		*
		* 交互对标 dsh-better-sidebar:面板顶部 Tab 栏(文件 / 设置)切换页面;
		* 设置页逐项开关/下拉实时生效;并注册 DSH 设置壳的 settings.section 页。
		* 通过 /dsh-we/api/* JSON 路由调用 Host(list / peek / config)。
		* 浏览器 bundle(src/client/index.tsx → lib/client.js,__ModuleLoader__ 格式)。
		*/
		const MARKER = "application/x-dsh-ws-file";
		const C = (k) => _dsh_css_panel_module_css_default[k] ?? k;
		async function api(method, payload) {
			return (await fetch(`/dsh-we/api/${method}`, {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify(payload)
			})).json();
		}
		const NS = "dsh-workspace-explorer";
		const DICTS = {
			zh: {
				"panel.title": "工作区文件",
				"ws.current": "当前目录",
				"search.ph": "搜索文件(仅已加载目录)…",
				hint: "点击文件:预览 | 点击 ↙ 或拖拽:插入到对话 | Shift/Ctrl + 点击:多选",
				"empty.title": "还没有可浏览的工作区。选择一个项目文件夹,即可在这里查看目录文件。",
				"empty.add": "+ 选择文件夹作为工作区",
				"loading.ws": "正在加载工作区…",
				hit: "匹配 {n} 项",
				"hit.none": "没有匹配「{q}」的文件(搜索范围:已加载目录)",
				truncated: "已截断,仅显示前 {n} 项",
				loading: "加载中…",
				"load.fail": "加载失败: ",
				read: "读取中…",
				"read.fail": "读取失败: ",
				"too.large": "文件过大({s}),仅支持插入引用",
				binary: "二进制文件,仅支持插入引用",
				"btn.ref": "插入引用",
				"btn.content": "插入内容",
				"btn.content.tip": "把文件内容插入输入框",
				"btn.content.no": "文件过大或二进制,无法内联",
				"sidebar.tooltip": "工作区文件",
				"sidebar.label": "文件",
				refresh: "刷新",
				close: "关闭",
				"fullscreen.on": "全屏",
				"fullscreen.off": "退出全屏",
				"close.preview": "关闭预览",
				"row.tip": "点击预览,拖拽到输入框插入",
				"insert.tip": "插入引用",
				"drop.hint": "松开以插入文件引用到输入框",
				"drop.hint.dir": "松开以插入目录树",
				"add.ws": "添加工作区",
				"dir.tree.fail": "目录树生成失败: ",
				"sel.count": "已选 {n} 项",
				"sel.insert": "插入所选",
				"sel.clear": "清除",
				"preview.page": "第 {n} 页",
				"preview.lines": "{n} 行",
				"preview.prev": "上一页",
				"preview.next": "下一页",
				"font.dec": "缩小字体",
				"font.inc": "放大字体",
				"font.reset": "重置字体大小",
				"edit": "编辑",
				"edit.save": "保存",
				"edit.discard": "放弃",
				"edit.cancel": "取消",
				"edit.dirty": "已修改",
				"edit.saving": "保存中…",
				"edit.save.fail": "保存失败: ",
				"edit.save.ok": "已保存",
				"edit.confirm.discard": "放弃修改？",
				"edit.readonly": "只读文件",
				"share.tip": "插入到对话 (@引用)",
				"tab.files": "文件",
				"tab.preview": "预览",
				"tab.settings": "设置",
				"md.source": "源码",
				"md.rendered": "渲染",
				"md.source.tip": "查看 Markdown 源码",
				"md.rendered.tip": "查看渲染效果",
				"mermaid.render": "渲染图表",
				"mermaid.loading": "图表加载中…",
				"mermaid.source": "看源码",
				"mermaid.diagram": "看图表",
				"mermaid.retry": "重试",
				"mermaid.fail": "图表渲染失败: ",
				"preview.empty": "还没有预览。点击任意文件行，即可在这里查看。",
				"resize.tip": "左下角拖拽调整大小，双击恢复自动",
				"settings.title": "面板设置",
				"settings.general": "通用",
				"settings.hideNoise": "隐藏噪声目录",
				"settings.hideNoise.desc": ". 开头目录 · node_modules · dist 等",
				"settings.showSize": "显示文件大小",
				"settings.refStyle": "文件引用格式",
				"settings.refStyle.rel": "相对路径",
				"settings.refStyle.abs": "绝对路径",
				"settings.restore": "恢复默认",
				"settings.note": "配置在本次会话内生效,重启插件后恢复默认。",
				"settings.nav": "工作区文件",
				"settings.version": "版本 v{ver}",
				"star.ask": "⭐ 授人 Star，手留余香",
				"star.cta": "★ 给一颗 Star",
				"drawer.tip": "文件目录",
				"drawer.open": "打开文件抽屉",
				"drawer.label": "工作区文件"
			},
			en: {
				"panel.title": "Workspace Files",
				"ws.current": "Current dir",
				"search.ph": "Search files (loaded dirs only)…",
				hint: "Click file: preview | ↙ or drag: insert into chat | Shift/Ctrl + click: multi-select",
				"empty.title": "No browsable workspace yet. Pick a project folder to view its files.",
				"empty.add": "+ Choose a folder as workspace",
				"loading.ws": "Loading workspaces…",
				hit: "{n} match(es)",
				"hit.none": "No files match \"{q}\" (search covers loaded dirs)",
				truncated: "Truncated: showing the first {n}",
				loading: "Loading…",
				"load.fail": "Load failed: ",
				read: "Reading…",
				"read.fail": "Read failed: ",
				"too.large": "File too large ({s}); reference only",
				binary: "Binary file; reference only",
				"btn.ref": "Insert reference",
				"btn.content": "Insert content",
				"btn.content.tip": "Insert the file content into the composer",
				"btn.content.no": "Too large or binary — cannot inline",
				"sidebar.tooltip": "Workspace Files",
				"sidebar.label": "Files",
				refresh: "Refresh",
				close: "Close",
				"fullscreen.on": "Fullscreen",
				"fullscreen.off": "Exit fullscreen",
				"close.preview": "Close preview",
				"row.tip": "click to preview; drag to the composer to insert",
				"insert.tip": "Insert reference",
				"drop.hint": "Release to insert the file reference into the composer",
				"drop.hint.dir": "Release to insert the folder tree",
				"add.ws": "Add workspace",
				"dir.tree.fail": "Folder tree failed: ",
				"sel.count": "{n} selected",
				"sel.insert": "Insert",
				"sel.clear": "Clear",
				"preview.page": "Page {n}",
				"preview.lines": "{n} lines",
				"preview.prev": "Previous page",
				"preview.next": "Next page",
				"font.dec": "Decrease font size",
				"font.inc": "Increase font size",
				"font.reset": "Reset font size",
				"edit": "Edit",
				"edit.save": "Save",
				"edit.discard": "Discard",
				"edit.cancel": "Cancel",
				"edit.dirty": "Modified",
				"edit.saving": "Saving…",
				"edit.save.fail": "Save failed: ",
				"edit.save.ok": "Saved",
				"edit.confirm.discard": "Discard changes?",
				"edit.readonly": "Read-only",
				"share.tip": "Insert into chat (@reference)",
				"tab.files": "Files",
				"tab.preview": "Preview",
				"tab.settings": "Settings",
				"md.source": "Source",
				"md.rendered": "Rendered",
				"md.source.tip": "View Markdown source",
				"md.rendered.tip": "View rendered output",
				"mermaid.render": "Render diagram",
				"mermaid.loading": "Loading diagram…",
				"mermaid.source": "Source",
				"mermaid.diagram": "Diagram",
				"mermaid.retry": "Retry",
				"mermaid.fail": "Diagram render failed: ",
				"preview.empty": "No preview yet. Click any file row to view it here.",
				"resize.tip": "Drag from the corner to resize, double-click to reset",
				"settings.title": "Panel settings",
				"settings.general": "General",
				"settings.hideNoise": "Hide noise dirs",
				"settings.hideNoise.desc": "dot-dirs · node_modules · dist …",
				"settings.showSize": "Show file sizes",
				"settings.refStyle": "File reference format",
				"settings.refStyle.rel": "Relative path",
				"settings.refStyle.abs": "Absolute path",
				"settings.restore": "Reset to defaults",
				"settings.note": "Settings apply for this run; they reset when the plugin restarts.",
				"settings.nav": "Workspace Explorer",
				"settings.version": "Version v{ver}",
				"star.ask": "⭐ Give Stars, keep the fragrance",
				"star.cta": "★ Give a Star",
				"drawer.tip": "Files",
				"drawer.open": "Open files drawer",
				"drawer.label": "Workspace Files"
			}
		};
		let workspacesSvc = null;
		const FOLDER_D = "M1.5 2.5A1.5 1.5 0 0 1 3 1h3.2l1.6 2H13a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 13 13H3a1.5 1.5 0 0 1-1.5-1.5v-9z";
		const DOC_BODY = "M4.3 1.7h5.3l2.7 2.7v8.9a1 1 0 0 1-1 1H4.3a1 1 0 0 1-1-1V2.7a1 1 0 0 1 1-1z";
		const DOC_FOLD = "M9.6 1.7L12.3 4.4H9.6z";
		const GEAR_D = "M8 9.9a1.9 1.9 0 1 1 0-3.8 1.9 1.9 0 0 1 0 3.8zM8 4.3V2.9M8 13.1v-1.4M4.3 8H2.9M13.1 8h-1.4M5.2 5.2L4.1 4.1M11.9 11.9l-1.1-1.1M5.2 10.8L4.1 11.9M11.9 4.1l-1.1 1.1";
		const GLYPHS = {
			code: "M6.4 6.1L4.9 8l1.5 1.9M9.6 6.1l1.5 1.9L9.6 9.9",
			image: "M3.6 12.4l2.7-2.7 1.8 1.8 1.5-1.5 2.8 2.4M5.4 6.4a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2z",
			markdown: "M5.1 11.2l1.9-2.9 1.9 2.9M5.1 8.4h3.8",
			config: "M3.2 5.6h3.6M9 5.6h3.8M3.2 10.4h3.6M9 10.4h3.8M7.4 3.8v3.6M7.4 8.6v3.6",
			css: "M6.2 4.4v7.2M9.8 4.4v7.2M4.9 6.9h6.2M4.9 9.1h6.2",
			shell: "M3.6 5.4l2.4 2.6L3.6 10.6M8.1 10.6h4.3",
			plain: ""
		};
		const FILE_META = {
			ts: ["#3178c6", "code"],
			tsx: ["#3178c6", "code"],
			mts: ["#3178c6", "code"],
			cts: ["#3178c6", "code"],
			js: ["#d4a72c", "code"],
			jsx: ["#d4a72c", "code"],
			mjs: ["#d4a72c", "code"],
			cjs: ["#d4a72c", "code"],
			py: ["#3572a5", "code"],
			pyi: ["#3572a5", "code"],
			rs: ["#e0a15e", "code"],
			go: ["#00add8", "code"],
			java: ["#b07219", "code"],
			rb: ["#cc342d", "code"],
			php: ["#777bb4", "code"],
			swift: ["#f05138", "code"],
			kt: ["#7f52ff", "code"],
			sh: ["#4c9a4a", "shell"],
			bash: ["#4c9a4a", "shell"],
			zsh: ["#4c9a4a", "shell"],
			json: ["#c9a227", "config"],
			yml: ["#5b7c99", "config"],
			yaml: ["#5b7c99", "config"],
			toml: ["#5b7c99", "config"],
			ini: ["#5b7c99", "config"],
			env: ["#5b7c99", "config"],
			cfg: ["#5b7c99", "config"],
			conf: ["#5b7c99", "config"],
			md: ["#4f8ac9", "markdown"],
			mdx: ["#4f8ac9", "markdown"],
			txt: ["#8a919c", "plain"],
			rst: ["#4f8ac9", "markdown"],
			css: ["#2965f1", "css"],
			scss: ["#c6538c", "css"],
			less: ["#1d70b8", "css"],
			html: ["#e34c26", "code"],
			htm: ["#e34c26", "code"],
			xml: ["#e34c26", "code"],
			svg: ["#5a67d8", "image"],
			png: ["#5a67d8", "image"],
			jpg: ["#5a67d8", "image"],
			jpeg: ["#5a67d8", "image"],
			gif: ["#5a67d8", "image"],
			webp: ["#5a67d8", "image"],
			ico: ["#5a67d8", "image"],
			avif: ["#5a67d8", "image"],
			sql: ["#c98a1b", "config"]
		};
		const DEFAULT_META = ["#8a919c", "plain"];
		const NOISE = [
			".git",
			"node_modules",
			"__pycache__",
			".venv",
			"venv",
			".pytest_cache",
			".ruff_cache",
			".mypy_cache",
			"dist",
			"build",
			".next",
			".nuxt",
			"coverage",
			".idea",
			"target"
		];
		const CFG_DEFAULTS = {
			hideNoise: true,
			showSize: true,
			refStyle: "relative",
			width: 384
		};
		let cfg = { ...CFG_DEFAULTS };
		const cfgListeners = /* @__PURE__ */ new Set();
		const getCfg = () => cfg;
		const notifyCfg = () => {
			cfgListeners.forEach((fn) => fn(cfg));
		};
		const syncHostCfg = () => {
			api("config", { ignore: cfg.hideNoise ? NOISE.slice() : [] }).catch(() => {});
		};
		const setCfg = (patch) => {
			cfg = {
				...cfg,
				...patch
			};
			notifyCfg();
			syncHostCfg();
		};
		const resetCfg = () => {
			cfg = { ...CFG_DEFAULTS };
			notifyCfg();
			syncHostCfg();
		};
		const subscribeCfg = (fn) => {
			cfgListeners.add(fn);
			return () => {
				cfgListeners.delete(fn);
			};
		};
		syncHostCfg();
		function FolderSvg({ open }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 16 16",
				width: 16,
				height: 16,
				className: C("dshwe-ico dshwe-folder-svg"),
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					d: FOLDER_D,
					fill: open ? "#e8c47c" : "#dcb67a"
				})
			});
		}
		function FileSvg({ color, glyph }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 16 16",
				width: 16,
				height: 16,
				className: C("dshwe-ico"),
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						d: DOC_BODY,
						fill: color
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						d: DOC_FOLD,
						fill: "rgba(255,255,255,.92)"
					}),
					glyph !== "" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						d: glyph,
						fill: "none",
						stroke: "#fff",
						strokeWidth: 1.5,
						strokeLinecap: "round",
						strokeLinejoin: "round"
					}) : null
				]
			});
		}
		function ChevronSvg({ open }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 16 16",
				width: 14,
				height: 14,
				className: C("dshwe-chev") + (open ? ` ${C("dshwe-chev-on")}` : ""),
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					d: "M6 4l4 4-4 4",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: 1.5,
					strokeLinecap: "round",
					strokeLinejoin: "round"
				})
			});
		}
		function TabFolderSvg() {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 16 16",
				width: 13,
				height: 13,
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					d: FOLDER_D,
					fill: "currentColor"
				})
			});
		}
		function GearSvg() {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 16 16",
				width: 13,
				height: 13,
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					d: GEAR_D,
					fill: "none",
					stroke: "currentColor",
					strokeWidth: 1.3,
					strokeLinecap: "round",
					strokeLinejoin: "round"
				})
			});
		}
		function iconFor(entry, open) {
			if (entry.type === "directory") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(FolderSvg, { open });
			const meta = FILE_META[extOf(entry.name)] ?? DEFAULT_META;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(FileSvg, {
				color: meta[0],
				glyph: GLYPHS[meta[1]] ?? ""
			});
		}
		function renderMdInline(nodes, keyPrefix) {
			return nodes.map((n, i) => {
				const key = `${keyPrefix}-${i}`;
				if (n.t === "text") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react.Fragment, { children: n.text }, key);
				if (n.t === "code") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", {
					className: C("dshwe-md-code"),
					children: n.text
				}, key);
				if (n.t === "link") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: C("dshwe-md-link"),
					children: n.text
				}, key);
				if (n.t === "b") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: renderMdInline(n.children, key) }, key);
				if (n.t === "i") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("em", { children: renderMdInline(n.children, key) }, key);
				return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("s", { children: renderMdInline(n.children, key) }, key);
			});
		}
		function MermaidBlock(props) {
			const [state, setState] = (0, react.useState)("idle");
			const [svg, setSvg] = (0, react.useState)("");
			const [errMsg, setErrMsg] = (0, react.useState)("");
			const [showSource, setShowSource] = (0, react.useState)(false);
			const hostRef = (0, react.useRef)(null);
			const idRef = (0, react.useRef)(`dshwe-mm-${props.idKey.replace(/[^a-zA-Z0-9_-]/g, "")}-${Math.random().toString(36).slice(2)}`);
			const renderNow = () => {
				setState("loading");
				setErrMsg("");
				loadMermaid().then((api) => api.render(idRef.current, props.code)).then(({ svg }) => {
					setSvg(svg);
					setShowSource(false);
					setState("ok");
				}).catch((err) => {
					setErrMsg(String(err?.message ?? err));
					setState("error");
				});
			};
			(0, react.useEffect)(() => {
				if (state === "ok" && hostRef.current) hostRef.current.innerHTML = svg;
			}, [state, svg]);
			(0, react.useEffect)(() => {
				setState("idle");
				setSvg("");
				setErrMsg("");
				setShowSource(false);
			}, [props.code]);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: C("dshwe-mm"),
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: C("dshwe-mm-bar"),
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: C("dshwe-md-lang"),
							children: "mermaid"
						}), state === "idle" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: C("dshwe-prevbtn"),
							onClick: renderNow,
							children: tr("mermaid.render")
						}) : state === "loading" ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: C("dshwe-note"),
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: C("dshwe-spin") }), tr("mermaid.loading")]
						}) : state === "ok" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: C("dshwe-prevbtn"),
							onClick: () => setShowSource((v) => !v),
							children: showSource ? tr("mermaid.diagram") : tr("mermaid.source")
						}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: C("dshwe-prevbtn"),
							onClick: renderNow,
							children: tr("mermaid.retry")
						})]
					}),
					state === "error" ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: C("dshwe-note dshwe-note-err"),
						children: [tr("mermaid.fail"), errMsg]
					}) : null,
					state === "ok" && !showSource ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						ref: hostRef,
						className: C("dshwe-mm-svg")
					}) : null,
					state === "idle" || state === "loading" || state === "error" || showSource ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("pre", {
						className: C("dshwe-md-pre"),
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: props.code })
					}) : null
				]
			});
		}
		function renderMdBlocks(nodes, keyPrefix) {
			return nodes.map((n, i) => {
				const key = `${keyPrefix}-${i}`;
				if (n.t === "h") {
					const Tag = `h${n.level}`;
					return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Tag, {
						className: C("dshwe-md-h") + ` ${C("dshwe-md-h" + n.level)}`,
						children: renderMdInline(n.inline, key)
					}, key);
				}
				if (n.t === "p") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
					className: C("dshwe-md-p"),
					children: renderMdInline(n.inline, key)
				}, key);
				if (n.t === "code") {
					if (isMermaidLang(n.lang)) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MermaidBlock, {
						code: n.text,
						idKey: key
					}, key);
					return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("pre", {
						className: C("dshwe-md-pre"),
						children: [n.lang !== "" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: C("dshwe-md-lang"),
							children: n.lang
						}) : null, /* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: n.text })]
					}, key);
				}
				if (n.t === "quote") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("blockquote", {
					className: C("dshwe-md-quote"),
					children: renderMdBlocks(n.children, key)
				}, key);
				if (n.t === "hr") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("hr", { className: C("dshwe-md-hr") }, key);
				if (n.t === "ul") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
					className: C("dshwe-md-ul"),
					children: n.items.map((it, j) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("li", { children: renderMdInline(it, `${key}-${j}`) }, `${key}-${j}`))
				}, key);
				if (n.t === "ol") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ol", {
					className: C("dshwe-md-ol"),
					start: n.start,
					children: n.items.map((it, j) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("li", { children: renderMdInline(it, `${key}-${j}`) }, `${key}-${j}`))
				}, key);
				if (n.t === "task") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
					className: C("dshwe-md-task"),
					children: n.items.map((it, j) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: C("dshwe-md-check") + (n.checked[j] ? ` ${C("dshwe-md-check-on")}` : ""),
						"aria-hidden": "true",
						children: n.checked[j] ? "✓" : ""
					}), renderMdInline(it, `${key}-${j}`)] }, `${key}-${j}`))
				}, key);
				return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: C("dshwe-md-tablewrap"),
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("table", {
						className: C("dshwe-md-table"),
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("tr", { children: n.head.map((c, j) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", { children: renderMdInline(c, `${key}-h${j}`) }, `${key}-h${j}`)) }) }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("tbody", { children: n.rows.map((r, j) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("tr", { children: r.map((c, k) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", { children: renderMdInline(c, `${key}-r${j}c${k}`) }, `${key}-r${j}c${k}`)) }, `${key}-r${j}`)) })]
					})
				}, key);
			});
		}
		const openListeners = /* @__PURE__ */ new Set();
		let open = false;
		const getOpen = () => open;
		const setOpen = (v) => {
			open = v;
			openListeners.forEach((fn) => fn(open));
		};
		const subscribeOpen = (fn) => {
			openListeners.add(fn);
			return () => {
				openListeners.delete(fn);
			};
		};
		const toggleDrawer = () => {
			setOpen(!getOpen());
		};
		const closeDrawer = () => {
			setOpen(false);
		};
		const measurePopup = () => {
			const vh = Math.min(window.innerHeight, window.visualViewport?.height ?? window.innerHeight);
			const header = queryHeader();
			const composer = queryComposer();
			const hr = rectOf(header);
			const top = isVisibleRect(hr) ? Math.round(hr.bottom) + 8 : 48;
			const cr = rectOf(composer);
			return {
				top,
				height: autoPopupHeight(top, isVisibleRect(cr) ? Math.round(cr.top) - 8 : vh - 48, vh)
			};
		};
		const measureFullscreen = () => {
			const vh = Math.min(window.innerHeight, window.visualViewport?.height ?? window.innerHeight);
			const vw = window.innerWidth;
			const header = queryHeader();
			const composer = queryComposer();
			const details = pickVisible("[data-slot=\"details\"]");
			rectOf(header);
			const composerRect = rectOf(composer);
			const dtRect = rectOf(details);
			let colRect = null;
			let colLeft = null;
			if (composer instanceof HTMLElement && isVisibleRect(composerRect)) {
				let p = composer.parentElement;
				while (p && p !== document.body) {
					const r = rectOf(p);
					if (isVisibleRect(r) && r.width >= composerRect.width + 40) {
						if (colLeft === null) colLeft = r.left;
						if (r.top <= composerRect.top - 100) {
							colRect = r;
							break;
						}
					}
					p = p.parentElement;
				}
			}
			if (!colRect) {
				const col = queryConvCol(header);
				const r = rectOf(col);
				if (isVisibleRect(r)) colRect = r;
			}
			const left = colRect ? Math.round(colRect.left) + 8 : colLeft !== null ? Math.round(colLeft) + 8 : 16;
			const right = isVisibleRect(dtRect) && dtRect.left > left ? Math.round(dtRect.left) - 8 : vw - 16;
			const top = 0;
			let bottomLimit = vh - 132;
			if (isVisibleRect(composerRect)) {
				const measured = Math.round(composerRect.top) - 8;
				if (measured < bottomLimit) bottomLimit = measured;
			}
			return {
				top,
				left,
				width: Math.max(320, right - left),
				height: Math.max(320, bottomLimit - top)
			};
		};
		const rectOf = (el) => el instanceof HTMLElement ? el.getBoundingClientRect() : null;
		const isVisibleRect = (r) => !!r && r.width > 0 && r.height > 0;
		function pickVisible(sel) {
			const all = Array.from(document.querySelectorAll(sel));
			let best = null;
			let bestArea = 0;
			for (const el of all) {
				const r = rectOf(el);
				if (!isVisibleRect(r)) continue;
				const area = r.width * r.height;
				if (area > bestArea) {
					bestArea = area;
					best = el;
				}
			}
			return best;
		}
		const queryComposer = () => pickVisible("[data-slot=\"conversation.composer.bar\"], [data-slot=\"conversation.composer\"], [data-composer-card]");
		const queryConvCol = (header) => {
			const viaHeader = header instanceof HTMLElement ? header.closest("[data-slot=\"conversation\"]") : null;
			if (viaHeader instanceof HTMLElement && isVisibleRect(rectOf(viaHeader))) return viaHeader;
			return pickVisible("[data-slot=\"conversation\"]");
		};
		const queryHeader = () => pickVisible("[data-slot=\"conversation.session.header\"]");
		let bridge = null;
		const setBridge = (b) => {
			bridge = b;
		};
		const getBridge = () => bridge;
		/** 当前工作区根目录(Panel 打开/切换时同步;也可由 apply() 通过 sessions 服务自动推导) */
		let activeWorkspaceRoot = null;
		const rootListeners = /* @__PURE__ */ new Set();
		const setActiveRoot = (r) => {
			if (r !== activeWorkspaceRoot) {
				activeWorkspaceRoot = r;
				rootListeners.forEach((fn) => fn(r));
				if (r !== null) invalidateFileCache();
			}
		};
		/** 从 sessions 服务自动推导工作区根目录(面板未打开时的 fallback) */
		let sessionsCwdRoot = null;
		/** 当前会话的 cwd(用于 @ 引用格式化:判断是否可用相对路径) */
		let activeCwd = null;
		function getEffectiveRoot() {
			return activeWorkspaceRoot ?? sessionsCwdRoot;
		}
		/** 文件列表缓存:root → files */
		let fileCacheRoot = null;
		let fileCache = [];
		let fileCachePromise = null;
		async function fetchAllFiles(root) {
			if (fileCacheRoot === root && fileCache.length > 0) return fileCache;
			if (fileCachePromise) return fileCachePromise;
			fileCachePromise = (async () => {
				try {
					const res = await api("tree", {
						root,
						rel: "",
						depth: 10,
						maxEntries: 5e3
					});
					if (!res.ok || !res.entries) return [];
					const files = res.entries.map((e) => ({
						rel: e.rel,
						name: e.name,
						type: e.type,
						path: root.replace(/\/+$/, "") + "/" + e.rel
					}));
					fileCacheRoot = root;
					fileCache = files;
					return files;
				} catch {
					return [];
				} finally {
					fileCachePromise = null;
				}
			})();
			return fileCachePromise;
		}
		function invalidateFileCache() {
			fileCacheRoot = null;
			fileCache = [];
		}
		function HeaderAction() {
			const [on, setOn] = (0, react.useState)(getOpen());
			(0, react.useEffect)(() => subscribeOpen(setOn), []);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
				type: "button",
				"data-dshwe-toggle": "",
				className: C("dshwe-hicon") + (on ? ` ${C("dshwe-hicon-on")}` : ""),
				onClick: toggleDrawer,
				title: tr("drawer.tip"),
				"aria-label": tr("drawer.open"),
				"aria-expanded": on,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: tr("drawer.label") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
					viewBox: "0 0 16 16",
					width: 13,
					height: 13,
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						d: FOLDER_D,
						fill: "currentColor"
					})
				})]
			});
		}
		function DockBridge(props) {
			const input = props.useInput ? props.useInput((s) => s) : void 0;
			const actions = props.inputActions;
			const draftRef = (0, react.useRef)(input?.draft ?? "");
			draftRef.current = input?.draft ?? "";
			(0, react.useEffect)(() => {
				if (!actions) return;
				setBridge({ insert(text) {
					const draft = draftRef.current;
					const sep = draft === "" || draft.endsWith("\n") ? "" : "\n";
					actions.setDraft(draft + sep + text);
				} });
			}, [actions]);
			return null;
		}
		function SwitchRow(props) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: C("dshwe-setrow"),
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: C("dshwe-setinfo"),
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: C("dshwe-setlabel"),
						children: props.label
					}), props.caption ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: C("dshwe-setcap"),
						children: props.caption
					}) : null]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
					type: "button",
					role: "switch",
					"aria-checked": props.checked,
					className: C("dshwe-switch"),
					onClick: () => props.onChange(!props.checked),
					"aria-label": props.label
				})]
			});
		}
		function SelectRow(props) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: C("dshwe-setrow"),
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: C("dshwe-setinfo"),
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: C("dshwe-setlabel"),
						children: props.label
					}), props.caption ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: C("dshwe-setcap"),
						children: props.caption
					}) : null]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("select", {
					className: C("dshwe-setselect"),
					value: props.value,
					onChange: (e) => props.onChange(e.target.value),
					children: props.options.map((o) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
						value: o.value,
						children: o.label
					}, o.value))
				})]
			});
		}
		function SettingsView() {
			const [c, setC] = (0, react.useState)(getCfg());
			(0, react.useEffect)(() => subscribeCfg(setC), []);
			const refOpts = [{
				value: "relative",
				label: tr("settings.refStyle.rel")
			}, {
				value: "absolute",
				label: tr("settings.refStyle.abs")
			}];
			const version$1 = version ?? "?";
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: C("dshwe-set"),
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: C("dshwe-star-section"),
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: C("dshwe-star-row"),
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: C("dshwe-star-info"),
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: C("dshwe-star-label"),
									children: tr("star.ask")
								})
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
								className: C("dshwe-star-link"),
								href: "https://github.com/doubleelec/dsh-workspace-explorer",
								target: "_blank",
								rel: "noreferrer",
								children: tr("star.cta")
							})]
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: C("dshwe-setsec"),
						children: tr("settings.general")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SwitchRow, {
						label: tr("settings.hideNoise"),
						caption: tr("settings.hideNoise.desc"),
						checked: c.hideNoise,
						onChange: (v) => setCfg({ hideNoise: v })
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SwitchRow, {
						label: tr("settings.showSize"),
						checked: c.showSize,
						onChange: (v) => setCfg({ showSize: v })
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SelectRow, {
						label: tr("settings.refStyle"),
						value: c.refStyle,
						options: refOpts,
						onChange: (v) => setCfg({ refStyle: v })
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: C("dshwe-setfoot"),
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: C("dshwe-prevbtn"),
							onClick: resetCfg,
							children: tr("settings.restore")
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: C("dshwe-setnote"),
						children: tr("settings.note")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: C("dshwe-setnote"),
						children: tr("settings.version", { ver: version$1 })
					})
				]
			});
		}
		function Panel(props) {
			const sessions = props.useSessions((s) => s);
			const cwd = (sessions.current && sessions.byId ? sessions.byId[sessions.current] : void 0)?.cwd;
			const [root, setRoot] = (0, react.useState)(null);
			const [dirs, setDirs] = (0, react.useState)({});
			const [expanded, setExpanded] = (0, react.useState)({});
			const [filter, setFilter] = (0, react.useState)("");
			const [preview, setPreview] = (0, react.useState)(null);
			const [selected, setSelected] = (0, react.useState)(/* @__PURE__ */ new Set());
			const [selAnchor, setSelAnchor] = (0, react.useState)(null);
			const [tab, setTab] = (0, react.useState)(() => getSavedTab());
			const [mdView, setMdView] = (0, react.useState)(() => getSavedMdView());
			const [fontStep, setFontStep] = (0, react.useState)(0);
			const fontScale = [
				.85,
				1,
				1.18,
				1.36,
				1.56
			][Math.min(Math.max(fontStep + 1, 0), 4)] ?? 1;
			const fontDec = () => setFontStep((s) => Math.max(-1, s - 1));
			const fontInc = () => setFontStep((s) => Math.min(3, s + 1));
			const [c, setC] = (0, react.useState)(getCfg());
			(0, react.useEffect)(() => subscribeCfg(setC), []);
			(0, react.useEffect)(() => {
				const cand = cwd ?? null;
				if (cand !== root) setRoot(cand);
			}, [cwd]);
			const loadDir = (0, react.useCallback)(async (r, rel) => {
				setDirs((d) => ({
					...d,
					[rel]: {
						loading: true,
						error: null,
						entries: d[rel]?.entries ?? [],
						truncated: false
					}
				}));
				try {
					const res = await api("list", {
						path: r,
						rel
					});
					if (!res.ok) throw new Error(res.error ?? "unknown");
					setDirs((d) => ({
						...d,
						[rel]: {
							loading: false,
							error: null,
							entries: res.entries ?? [],
							truncated: res.truncated === true
						}
					}));
				} catch (err) {
					setDirs((d) => ({
						...d,
						[rel]: {
							loading: false,
							error: String(err?.message ?? err),
							entries: [],
							truncated: false
						}
					}));
				}
			}, []);
			(0, react.useEffect)(() => {
				if (root === null) return;
				setDirs({});
				setExpanded({});
				setSelected(/* @__PURE__ */ new Set());
				setSelAnchor(null);
				loadDir(root, "");
				const saved = getSavedPreview();
				if (shouldRestorePreview(saved, root)) {
					setMdView(getSavedMdView());
					loadPreviewPage({
						name: saved.name,
						type: "file",
						path: `${root.replace(/\/+$/, "")}/${saved.rel}`,
						rel: saved.rel,
						size: saved.size
					}, 0);
				} else setPreview(null);
				setActiveRoot(root);
				return () => setActiveRoot(null);
			}, [root, loadDir]);
			(0, react.useEffect)(() => {
				if (root === null) return;
				loadDir(root, "");
				Object.keys(expanded).forEach((rel) => {
					if (rel !== "") loadDir(root, rel);
				});
				invalidateFileCache();
			}, [c.hideNoise]);
			const toggle = (rel) => {
				const willExpand = !expanded[rel];
				setExpanded((e) => {
					const n = { ...e };
					if (willExpand) n[rel] = true;
					else delete n[rel];
					return n;
				});
				if (willExpand && root) loadDir(root, rel);
			};
			const refresh = () => {
				if (root === null) return;
				loadDir(root, "");
				Object.keys(expanded).forEach((rel) => {
					if (rel !== "") loadDir(root, rel);
				});
			};
			const refPath = (entry) => c.refStyle === "relative" && root === cwd ? entry.rel : entry.path;
			/** 生成 @引用 文本:目录带 / 后缀,文件带扩展名 */
			const refAt = (entry) => entry.type === "directory" ? `@${refPath(entry)}/` : `@${refPath(entry)}`;
			const insertMarker = (entry) => {
				getBridge()?.insert(refAt(entry));
			};
			const WHOLE_MAX = 524288;
			const loadPreviewPage = (0, react.useCallback)(async (entry, page, keepMode = false) => {
				setPreview((prev) => ({
					entry,
					loading: true,
					data: null,
					error: null,
					page,
					mode: keepMode && prev?.entry.rel === entry.rel ? prev.mode : "preview",
					editContent: keepMode && prev?.entry.rel === entry.rel ? prev.editContent : "",
					dirty: keepMode && prev?.entry.rel === entry.rel ? prev.dirty : false,
					saving: false,
					saveError: null
				}));
				try {
					const res = (entry.size ?? 0) > WHOLE_MAX ? await api("peek", {
						root: root ?? "",
						rel: entry.rel,
						offset: page * 200,
						limit: 200
					}) : await api("peek", {
						root: root ?? "",
						rel: entry.rel,
						whole: true
					});
					if (!res.ok) throw new Error(res.error ?? "unknown");
					setPreview((prev) => ({
						entry,
						loading: false,
						data: res,
						error: null,
						page,
						mode: prev?.entry.rel === entry.rel ? prev.mode : "preview",
						editContent: prev?.entry.rel === entry.rel ? prev.editContent : "",
						dirty: prev?.entry.rel === entry.rel ? prev.dirty : false,
						saving: false,
						saveError: null
					}));
				} catch (err) {
					setPreview((prev) => ({
						entry,
						loading: false,
						data: null,
						error: String(err?.message ?? err),
						page,
						mode: prev?.entry.rel === entry.rel ? prev.mode : "preview",
						editContent: prev?.entry.rel === entry.rel ? prev.editContent : "",
						dirty: prev?.entry.rel === entry.rel ? prev.dirty : false,
						saving: false,
						saveError: null
					}));
				}
			}, [root]);
			const openPreview = (entry) => {
				setMdView("rendered");
				saveMdView("rendered");
				if (root !== null) savePreviewRef(root, entry.rel, entry.name, entry.size);
				setTab("preview");
				savePreviewTab("preview");
				loadPreviewPage(entry, 0);
			};
			const previewPrev = () => {
				if (preview && preview.page > 0 && !preview.loading) loadPreviewPage(preview.entry, preview.page - 1);
			};
			const previewNext = () => {
				if (preview && preview.data?.hasMore && !preview.loading) loadPreviewPage(preview.entry, preview.page + 1);
			};
			const insertContent = async () => {
				if (!preview || preview.loading || preview.error || !preview.data || root === null) return;
				const d = preview.data;
				if (d.binary || (d.size ?? 0) > 32768) return;
				const res = await api("peek", {
					root,
					rel: preview.entry.rel,
					whole: true
				});
				if (!res.ok || res.content == null) return;
				const b = getBridge();
				if (b) b.insert(res.content);
			};
			const enterEditMode = async () => {
				if (!preview || preview.loading || preview.error || !preview.data || root === null) return;
				const d = preview.data;
				let fullContent = d.content ?? "";
				if (d.binary || (d.size ?? 0) > WHOLE_MAX) return;
				if (d.hasMore) {
					const res = await api("peek", {
						root,
						rel: preview.entry.rel,
						whole: true
					});
					if (!res.ok || res.content == null) return;
					fullContent = res.content;
				}
				setPreview((prev) => prev ? {
					...prev,
					mode: "edit",
					editContent: fullContent,
					dirty: false,
					saveError: null
				} : prev);
			};
			const updateEditContent = (content) => {
				setPreview((prev) => prev ? {
					...prev,
					editContent: content,
					dirty: true
				} : prev);
			};
			const saveFile = async () => {
				if (!preview || !root || preview.mode !== "edit") return;
				setPreview((prev) => prev ? {
					...prev,
					saving: true,
					saveError: null
				} : prev);
				try {
					const res = await api("write", {
						root,
						rel: preview.entry.rel,
						content: preview.editContent,
						expectedSize: preview.entry.size
					});
					if (!res.ok) {
						if (res.error === "file-changed") setPreview((prev) => prev ? {
							...prev,
							saving: false,
							saveError: tr("edit.save.fail") + "文件已被外部修改"
						} : prev);
						else setPreview((prev) => prev ? {
							...prev,
							saving: false,
							saveError: tr("edit.save.fail") + (res.error ?? "unknown")
						} : prev);
						return;
					}
					setPreview((prev) => prev ? {
						...prev,
						saving: false,
						saveError: null,
						dirty: false,
						mode: "preview",
						entry: {
							...prev.entry,
							size: res.size ?? prev.entry.size
						}
					} : prev);
					if (root) loadDir(root, "");
				} catch (err) {
					setPreview((prev) => prev ? {
						...prev,
						saving: false,
						saveError: tr("edit.save.fail") + String(err?.message ?? err)
					} : prev);
				}
			};
			const discardEdit = () => {
				if (preview?.dirty && !window.confirm(tr("edit.confirm.discard"))) return;
				setPreview((prev) => prev ? {
					...prev,
					mode: "preview",
					editContent: "",
					dirty: false,
					saveError: null
				} : prev);
			};
			const cancelEdit = () => {
				setPreview((prev) => prev ? {
					...prev,
					mode: "preview",
					editContent: "",
					dirty: false,
					saveError: null
				} : prev);
			};
			const onDragStart = (ev, entry) => {
				ev.dataTransfer.setData("text/plain", entry.type === "directory" ? entry.name : refAt(entry));
				ev.dataTransfer.setData(MARKER, JSON.stringify({
					root,
					rel: entry.rel,
					name: entry.name,
					type: entry.type
				}));
				ev.dataTransfer.effectAllowed = "copy";
				props.onDraggingChange(entry.type === "directory" ? "dir" : "file");
			};
			const addWorkspace = async () => {
				if (!workspacesSvc) return;
				try {
					const p = await workspacesSvc.pickDirectory();
					if (!p) return;
					await workspacesSvc.create({ path: p });
				} catch (err) {
					console.warn("addWorkspace failed", String(err?.message ?? err));
				}
			};
			const q = filter.trim().toLowerCase();
			const [searchFiles, setSearchFiles] = (0, react.useState)([]);
			const [searchLoading, setSearchLoading] = (0, react.useState)(false);
			(0, react.useEffect)(() => {
				if (q === "" || !root) {
					setSearchFiles([]);
					return;
				}
				let cancelled = false;
				setSearchLoading(true);
				fetchAllFiles(root).then((files) => {
					if (!cancelled) {
						setSearchFiles(files);
						setSearchLoading(false);
					}
				});
				return () => {
					cancelled = true;
				};
			}, [q, root]);
			const collectAllMatches = (out) => {
				for (const f of visibleEntries(searchFiles, c.hideNoise)) if (f.name.toLowerCase().includes(q) || f.rel.toLowerCase().includes(q)) out.push({
					name: f.name,
					type: f.type,
					path: f.path,
					rel: f.rel,
					size: null
				});
			};
			const flatVisible = () => {
				if (q !== "") {
					const hits = [];
					collectAllMatches(hits);
					return hits;
				}
				const out = [];
				const walk = (rel) => {
					const data = dirs[rel];
					if (!data) return;
					for (const entry of visibleEntries(data.entries, c.hideNoise)) {
						out.push(entry);
						if (entry.type === "directory" && expanded[entry.rel]) walk(entry.rel);
					}
				};
				walk("");
				return out;
			};
			const onRowClick = (ev, entry) => {
				const isDir = entry.type === "directory";
				if (ev.shiftKey || ev.metaKey || ev.ctrlKey) {
					ev.preventDefault();
					if (ev.shiftKey && selAnchor !== null) {
						const list = flatVisible();
						const a = list.findIndex((e) => e.rel === selAnchor);
						const b = list.findIndex((e) => e.rel === entry.rel);
						if (a >= 0 && b >= 0) {
							const [lo, hi] = a < b ? [a, b] : [b, a];
							const range = list.slice(lo, hi + 1).map((e) => e.rel);
							setSelected((prev) => /* @__PURE__ */ new Set([...prev, ...range]));
						}
					} else setSelected((prev) => {
						const n = new Set(prev);
						if (n.has(entry.rel)) n.delete(entry.rel);
						else n.add(entry.rel);
						return n;
					});
					setSelAnchor(entry.rel);
				} else if (isDir) toggle(entry.rel);
				else openPreview(entry);
			};
			const insertSelected = async () => {
				const b = getBridge();
				if (!b) return;
				const rels = new Set(selected);
				const list = flatVisible().filter((e) => rels.has(e.rel));
				const parts = [];
				for (const e of list) parts.push(refAt(e));
				if (parts.length > 0) b.insert(parts.join("\n"));
				setSelected(/* @__PURE__ */ new Set());
				setSelAnchor(null);
			};
			const rowFor = (entry, depth, isExp) => {
				const isDir = entry.type === "directory";
				const isSel = selected.has(entry.rel);
				const isPreviewActive = preview?.entry.rel === entry.rel;
				return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					role: "button",
					tabIndex: 0,
					className: C("dshwe-row") + (isDir ? ` ${C("dshwe-row-dir")}` : ` ${C("dshwe-row-file")}`) + (isSel ? ` ${C("dshwe-row-sel")}` : "") + (isPreviewActive ? ` ${C("dshwe-row-active")}` : ""),
					style: { paddingLeft: 10 + depth * 16 },
					title: entry.path + (isDir ? "" : ` · ${tr("row.tip")}`),
					draggable: true,
					onDragStart: (ev) => onDragStart(ev, entry),
					onClick: (ev) => onRowClick(ev, entry),
					onKeyDown: (ev) => {
						if (ev.key === "Enter" || ev.key === " ") {
							ev.preventDefault();
							if (isDir) toggle(entry.rel);
							else openPreview(entry);
						} else if (ev.key === "@" || ev.key === "i") {
							ev.preventDefault();
							insertMarker(entry);
						}
					},
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: C("dshwe-chev-slot"),
							children: isDir ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ChevronSvg, { open: isExp }) : null
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: C("dshwe-share-btn") + (isPreviewActive ? ` ${C("dshwe-share-btn-on")}` : ""),
							title: tr("share.tip"),
							"aria-label": tr("share.tip"),
							onMouseDown: (e) => {
								e.preventDefault();
								e.stopPropagation();
							},
							onClick: (e) => {
								e.stopPropagation();
								insertMarker(entry);
							},
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
								viewBox: "0 0 24 24",
								width: 14,
								height: 14,
								"aria-hidden": "true",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
									d: "M17 7 7 17",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: 2,
									strokeLinecap: "round",
									strokeLinejoin: "round"
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
									d: "M17 17H7V7",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: 2,
									strokeLinecap: "round",
									strokeLinejoin: "round"
								})]
							})
						}),
						iconFor(entry, isExp),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: C("dshwe-name"),
							children: entry.name
						}),
						!isDir && c.showSize && entry.size != null ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: C("dshwe-size"),
							children: fmtSize(entry.size)
						}) : null,
						!isDir && isPreviewActive ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: C("dshwe-row-preview-dot") }) : null
					]
				}, entry.rel);
			};
			const renderTree = (rel, depth) => {
				const data = dirs[rel];
				if (!data) return [];
				const rows = [];
				for (const entry of visibleEntries(data.entries, c.hideNoise)) {
					const isExp = entry.type === "directory" && !!expanded[entry.rel];
					rows.push(rowFor(entry, depth, isExp));
					if (isExp) rows.push(...renderTree(entry.rel, depth + 1));
				}
				const noteKey = (tag) => `${rel}::${tag}`;
				if (data.truncated) rows.push(/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: C("dshwe-note"),
					children: tr("truncated", { n: data.entries.length })
				}, noteKey("trunc")));
				if (data.loading) rows.push(/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: C("dshwe-note"),
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: C("dshwe-spin") }), tr("loading")]
				}, noteKey("load")));
				if (data.error) rows.push(/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: C("dshwe-note dshwe-note-err"),
					children: [tr("load.fail"), data.error]
				}, noteKey("err")));
				return rows;
			};
			let body;
			if (q !== "") {
				const hits = [];
				collectAllMatches(hits);
				body = /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: C("dshwe-note"),
					children: tr("hit", { n: hits.length })
				}), hits.length ? hits.map((h) => rowFor(h, 0, false)) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: C("dshwe-empty"),
					children: tr("hit.none", { q: filter })
				})] });
			} else if (root === null) body = /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: C("dshwe-empty"),
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: C("dshwe-empty-ico"),
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
							viewBox: "0 0 16 16",
							width: 17,
							height: 17,
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
								d: FOLDER_D,
								fill: "currentColor"
							})
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children: tr("empty.title") }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						className: C("dshwe-addbtn"),
						onClick: () => void addWorkspace(),
						children: tr("empty.add")
					})
				]
			});
			else body = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: renderTree("", 0) });
			const rootLabel = root ? basename(root) : "";
			let pv = null;
			if (preview) {
				const d = preview.data;
				const isEdit = preview.mode === "edit";
				const canInline = !preview.loading && !preview.error && !!d && !d.binary && (d.size ?? 0) <= 32768;
				const canEdit = !preview.loading && !preview.error && !!d && !d.binary && (d.size ?? 0) <= WHOLE_MAX;
				const metaBits = [];
				if (preview.entry.size != null) metaBits.push(fmtSize(preview.entry.size));
				if (d?.lineCount != null && d.lineCount > 0) metaBits.push(tr("preview.lines", { n: d.lineCount }));
				if (!isEdit && (preview.page > 0 || d?.hasMore === true)) metaBits.push(tr("preview.page", { n: preview.page + 1 }));
				if (isEdit && preview.dirty) metaBits.push(tr("edit.dirty"));
				let contentArea;
				const mdRendered = isMarkdownFile(preview.entry.name) && !isEdit && !preview.loading && preview.error === null && !!d && !d.binary && d.hasMore !== true && preview.page === 0;
				if (preview.loading) contentArea = /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: C("dshwe-note"),
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: C("dshwe-spin") }), tr("read")]
				});
				else if (preview.error) contentArea = /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: C("dshwe-note dshwe-note-err"),
					children: [tr("read.fail"), preview.error]
				});
				else if (d?.binary) contentArea = /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: C("dshwe-note"),
					children: tr("binary")
				});
				else if (isEdit) contentArea = /* @__PURE__ */ (0, react_jsx_runtime.jsx)("textarea", {
					className: C("dshwe-editor"),
					value: preview.editContent,
					onChange: (e) => updateEditContent(e.target.value),
					spellCheck: false
				});
				else if (mdRendered && mdView === "rendered") contentArea = /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: C("dshwe-md"),
					style: { fontSize: `${fontScale}em` },
					children: renderMdBlocks(parseMarkdown(d?.content ?? ""), preview.entry.rel)
				});
				else contentArea = /* @__PURE__ */ (0, react_jsx_runtime.jsx)("pre", {
					className: C("dshwe-preview-pre"),
					style: { fontSize: `${fontScale}em` },
					children: d?.content ?? ""
				});
				pv = /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: C("dshwe-preview-tab"),
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: C("dshwe-preview-head"),
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: C("dshwe-preview-name"),
									children: preview.entry.name
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: C("dshwe-preview-meta"),
									children: metaBits.join(" · ")
								}),
								isEdit ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
									preview.saving ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: C("dshwe-edit-saving"),
										children: tr("edit.saving")
									}) : null,
									preview.saveError ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: C("dshwe-edit-saveerr"),
										children: preview.saveError
									}) : null,
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										className: C("dshwe-prevbtn"),
										onClick: () => void saveFile(),
										disabled: preview.saving || !preview.dirty,
										children: tr("edit.save")
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										className: C("dshwe-prevbtn"),
										onClick: discardEdit,
										children: tr("edit.discard")
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										className: C("dshwe-prevbtn"),
										style: {
											width: 28,
											padding: 0
										},
										onClick: cancelEdit,
										title: tr("edit.cancel"),
										"aria-label": tr("edit.cancel"),
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
											viewBox: "0 0 16 16",
											width: 13,
											height: 13,
											"aria-hidden": "true",
											children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
												d: "M4 4l8 8M12 4l-8 8",
												fill: "none",
												stroke: "currentColor",
												strokeWidth: 1.5,
												strokeLinecap: "round"
											})
										})
									})
								] }) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
									(preview.page > 0 || d?.hasMore === true) && !preview.loading ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										className: C("dshwe-pager-btn"),
										disabled: preview.page === 0 || preview.loading,
										onClick: previewPrev,
										title: tr("preview.prev"),
										"aria-label": tr("preview.prev"),
										children: "‹"
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										className: C("dshwe-pager-btn"),
										disabled: d?.hasMore !== true || preview.loading,
										onClick: previewNext,
										title: tr("preview.next"),
										"aria-label": tr("preview.next"),
										children: "›"
									})] }) : null,
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										className: C("dshwe-pager-btn"),
										disabled: fontStep <= -1 || preview.loading,
										onClick: fontDec,
										title: tr("font.dec"),
										"aria-label": tr("font.dec"),
										children: "A-"
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										className: C("dshwe-pager-btn"),
										disabled: fontStep >= 3 || preview.loading,
										onClick: fontInc,
										title: tr("font.inc"),
										"aria-label": tr("font.inc"),
										children: "A+"
									}),
									mdRendered ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										className: C("dshwe-prevbtn") + (mdView === "source" ? ` ${C("dshwe-prevbtn-on")}` : ""),
										onClick: () => {
											const v = mdView === "rendered" ? "source" : "rendered";
											setMdView(v);
											saveMdView(v);
										},
										title: mdView === "rendered" ? tr("md.source.tip") : tr("md.rendered.tip"),
										children: mdView === "rendered" ? tr("md.source") : tr("md.rendered")
									}) : null,
									canEdit ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										className: C("dshwe-prevbtn"),
										onClick: () => void enterEditMode(),
										children: tr("edit")
									}) : null,
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										className: C("dshwe-icobtn"),
										onClick: () => {
											setPreview(null);
											clearSavedPreview();
											setTab("files");
											savePreviewTab("files");
										},
										title: tr("close.preview"),
										"aria-label": tr("close.preview"),
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
											viewBox: "0 0 16 16",
											width: 13,
											height: 13,
											"aria-hidden": "true",
											children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
												d: "M4 4l8 8M12 4l-8 8",
												fill: "none",
												stroke: "currentColor",
												strokeWidth: 1.5,
												strokeLinecap: "round"
											})
										})
									})
								] })
							]
						}),
						contentArea,
						!isEdit ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: C("dshwe-preview-actions"),
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								className: C("dshwe-prevbtn"),
								onClick: () => insertMarker(preview.entry),
								children: tr("btn.ref")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								className: C("dshwe-prevbtn"),
								disabled: !canInline,
								title: canInline ? tr("btn.content.tip") : tr("btn.content.no"),
								onClick: () => void insertContent(),
								children: tr("btn.content")
							})]
						}) : null
					]
				});
			}
			const filesBody = /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: C("dshwe-filterrow"),
					style: { paddingTop: 12 },
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
						className: C("dshwe-filter"),
						type: "text",
						value: filter,
						placeholder: tr("search.ph"),
						onChange: (e) => setFilter(e.target.value)
					}), filter !== "" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						className: C("dshwe-filter-clear"),
						onClick: () => setFilter(""),
						title: tr("close"),
						"aria-label": tr("close"),
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
							viewBox: "0 0 16 16",
							width: 12,
							height: 12,
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
								d: "M4 4l8 8M12 4l-8 8",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: 1.5,
								strokeLinecap: "round"
							})
						})
					}) : null]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: C("dshwe-hintline"),
					children: tr("hint")
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: C("dshwe-tree"),
					children: body
				}),
				selected.size > 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: C("dshwe-selbar"),
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: C("dshwe-selbar-count"),
							children: tr("sel.count", { n: selected.size })
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: C("dshwe-prevbtn"),
							onClick: () => void insertSelected(),
							children: tr("sel.insert")
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: C("dshwe-prevbtn"),
							onClick: () => {
								setSelected(/* @__PURE__ */ new Set());
								setSelAnchor(null);
							},
							children: tr("sel.clear")
						})
					]
				}) : null
			] });
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: C("dshwe-panel"),
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: C("dshwe-head"),
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: C("dshwe-head-ico"),
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
									viewBox: "0 0 16 16",
									width: 17,
									height: 17,
									"aria-hidden": "true",
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
										d: FOLDER_D,
										fill: "currentColor"
									})
								})
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: C("dshwe-title"),
								title: root ?? tr("panel.title"),
								children: rootLabel !== "" ? rootLabel : tr("panel.title")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								className: C("dshwe-icobtn"),
								onClick: refresh,
								title: tr("refresh"),
								"aria-label": tr("refresh"),
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
									viewBox: "0 0 16 16",
									width: 14,
									height: 14,
									"aria-hidden": "true",
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
										d: "M13.5 8a5.5 5.5 0 1 1-1.61-3.89M13.5 1.5v3h-3",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: 1.5,
										strokeLinecap: "round"
									})
								})
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								className: C("dshwe-icobtn"),
								onClick: props.onToggleFullscreen,
								title: props.fullscreen ? tr("fullscreen.off") : tr("fullscreen.on"),
								"aria-label": props.fullscreen ? tr("fullscreen.off") : tr("fullscreen.on"),
								children: props.fullscreen ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
									viewBox: "0 0 24 24",
									width: 14,
									height: 14,
									"aria-hidden": "true",
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
										d: "M8 3v3a2 2 0 0 1-2 2H3M21 8h-3a2 2 0 0 1-2-2V3M3 16h3a2 2 0 0 1 2 2v3M16 21v-3a2 2 0 0 1 2-2h3",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: 2,
										strokeLinecap: "round",
										strokeLinejoin: "round"
									})
								}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
									viewBox: "0 0 24 24",
									width: 14,
									height: 14,
									"aria-hidden": "true",
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
										d: "M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: 2,
										strokeLinecap: "round",
										strokeLinejoin: "round"
									})
								})
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								className: C("dshwe-icobtn"),
								onClick: closeDrawer,
								title: tr("close"),
								"aria-label": tr("close"),
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
									viewBox: "0 0 16 16",
									width: 14,
									height: 14,
									"aria-hidden": "true",
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
										d: "M4 4l8 8M12 4l-8 8",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: 1.5,
										strokeLinecap: "round"
									})
								})
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: C("dshwe-tabs"),
						role: "tablist",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
								type: "button",
								role: "tab",
								"aria-selected": tab === "files",
								className: C("dshwe-tab") + (tab === "files" ? ` ${C("dshwe-tab-on")}` : ""),
								onClick: () => {
									setTab("files");
									savePreviewTab("files");
								},
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(TabFolderSvg, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: tr("tab.files") }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: C("dshwe-tab-ind") })
								]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
								type: "button",
								role: "tab",
								"aria-selected": tab === "preview",
								className: C("dshwe-tab") + (tab === "preview" ? ` ${C("dshwe-tab-on")}` : ""),
								onClick: () => {
									setTab("preview");
									savePreviewTab("preview");
								},
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
										viewBox: "0 0 16 16",
										width: 13,
										height: 13,
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
											d: "M1.5 8s2.6-4.5 6.5-4.5S14.5 8 14.5 8 11.9 12.5 8 12.5 1.5 8 1.5 8zM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: 1.3,
											strokeLinejoin: "round"
										})
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: tr("tab.preview") }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: C("dshwe-tab-ind") })
								]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
								type: "button",
								role: "tab",
								"aria-selected": tab === "settings",
								className: C("dshwe-tab") + (tab === "settings" ? ` ${C("dshwe-tab-on")}` : ""),
								onClick: () => {
									setTab("settings");
									savePreviewTab("settings");
								},
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(GearSvg, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: tr("tab.settings") }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: C("dshwe-tab-ind") })
								]
							})
						]
					}),
					tab === "files" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: C("dshwe-body"),
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: C("dshwe-tree-col"),
							children: filesBody
						})
					}) : tab === "preview" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: C("dshwe-tabbody"),
						children: pv ?? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: C("dshwe-empty"),
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: C("dshwe-empty-ico"),
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
									viewBox: "0 0 16 16",
									width: 17,
									height: 17,
									"aria-hidden": "true",
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
										d: "M1.5 8s2.6-4.5 6.5-4.5S14.5 8 14.5 8 11.9 12.5 8 12.5 1.5 8 1.5 8zM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: 1.3,
										strokeLinejoin: "round"
									})
								})
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children: tr("preview.empty") })]
						})
					}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: C("dshwe-tabbody"),
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SettingsView, {})
					})
				]
			});
		}
		function DrawerRoot(props) {
			const [on, setOn] = (0, react.useState)(getOpen());
			const [shown, setShown] = (0, react.useState)(getOpen());
			const [closing, setClosing] = (0, react.useState)(false);
			const [rect, setRect] = (0, react.useState)({
				top: 48,
				height: 480
			});
			const [manualH, setManualH] = (0, react.useState)(() => loadManualHeight());
			const [manualW, setManualW] = (0, react.useState)(() => loadManualWidth());
			const [dragKind, setDragKind] = (0, react.useState)(null);
			const [fullscreen, setFullscreen] = (0, react.useState)(false);
			const [fullRect, setFullRect] = (0, react.useState)({
				top: 16,
				left: 16,
				width: 640,
				height: 480
			});
			const toggleFullscreen = () => {
				if (!fullscreen) setFullRect(measureFullscreen());
				setFullscreen((v) => !v);
			};
			const [c, setC] = (0, react.useState)(getCfg());
			(0, react.useEffect)(() => subscribeOpen(setOn), []);
			(0, react.useEffect)(() => subscribeCfg(setC), []);
			(0, react.useEffect)(() => {
				if (on) {
					setClosing(false);
					setShown(false);
					const raf = requestAnimationFrame(() => setShown(true));
					return () => cancelAnimationFrame(raf);
				}
				setShown(false);
				setClosing(true);
				const t = setTimeout(() => setClosing(false), 200);
				return () => clearTimeout(t);
			}, [on]);
			(0, react.useEffect)(() => {
				const onKey = (e) => {
					if (e.key !== "Escape") return;
					let handled = false;
					setFullscreen((v) => {
						if (v) {
							handled = true;
							return false;
						}
						return v;
					});
					if (!handled) closeDrawer();
				};
				document.addEventListener("keydown", onKey);
				return () => document.removeEventListener("keydown", onKey);
			}, []);
			const closeAtRef = (0, react.useRef)(0);
			(0, react.useEffect)(() => {
				if (!on) closeAtRef.current = Date.now();
			}, [on]);
			(0, react.useEffect)(() => {
				if (!on || fullscreen) return;
				const onDown = (e) => {
					const t = e.target instanceof HTMLElement ? e.target : null;
					if (!t) return;
					if (t.closest("[data-dshwe-popup], [data-composer-card], [data-dshwe-toggle]")) return;
					closeDrawer();
				};
				const onDownGuarded = (e) => {
					if ((e.target instanceof HTMLElement ? e.target : null)?.closest("[data-dshwe-toggle]") && Date.now() - closeAtRef.current < 300) return;
					onDown(e);
				};
				document.addEventListener("pointerdown", onDownGuarded, true);
				return () => document.removeEventListener("pointerdown", onDownGuarded, true);
			}, [on, fullscreen]);
			const rectRef = (0, react.useRef)(rect);
			rectRef.current = rect;
			(0, react.useEffect)(() => {
				const update = () => setRect(measurePopup());
				update();
				const observed = /* @__PURE__ */ new Set();
				const ro = new ResizeObserver(update);
				const bind = () => {
					for (const el of Array.from(document.querySelectorAll("[data-slot=\"conversation.session.header\"], [data-slot=\"conversation.composer.bar\"], [data-slot=\"conversation.composer\"], [data-composer-card]"))) if (!observed.has(el)) {
						observed.add(el);
						ro.observe(el);
					}
				};
				bind();
				const mo = new MutationObserver(() => {
					bind();
					update();
				});
				mo.observe(document.body, {
					childList: true,
					subtree: true
				});
				window.addEventListener("resize", update);
				window.visualViewport?.addEventListener("resize", update);
				window.addEventListener("scroll", update, true);
				return () => {
					ro.disconnect();
					mo.disconnect();
					window.removeEventListener("resize", update);
					window.visualViewport?.removeEventListener("resize", update);
					window.removeEventListener("scroll", update, true);
				};
			}, []);
			(0, react.useEffect)(() => {
				if (on) setRect(measurePopup());
			}, [on]);
			const resizeRef = (0, react.useRef)(null);
			const applyResizeDelta = (clientX, clientY) => {
				if (!resizeRef.current) return;
				const vh = Math.min(window.innerHeight, window.visualViewport?.height ?? window.innerHeight);
				const w = clampPopupWidth(resizeRef.current.startW - (clientX - resizeRef.current.startX), window.innerWidth);
				const h = clampPopupHeight(resizeRef.current.startH + (clientY - resizeRef.current.startY), rectRef.current.top, vh);
				resizeRef.current.curW = w;
				resizeRef.current.curH = h;
				setManualW(w);
				setManualH(h);
				setRect((r) => ({
					...r,
					height: h
				}));
			};
			const endResize = () => {
				if (resizeRef.current) {
					saveManualWidth(resizeRef.current.curW);
					saveManualHeight(resizeRef.current.curH);
				}
				resizeRef.current = null;
				document.removeEventListener("mousemove", onResizeMove);
				document.removeEventListener("mouseup", endResize);
				document.removeEventListener("touchmove", onResizeTouchMove);
				document.removeEventListener("touchend", endResize);
			};
			const onResizeMove = (ev) => applyResizeDelta(ev.clientX, ev.clientY);
			const onResizeTouchMove = (ev) => {
				if (ev.touches.length > 0) applyResizeDelta(ev.touches[0].clientX, ev.touches[0].clientY);
			};
			const onResizeDown = (e) => {
				e.preventDefault();
				const startW = manualW ?? c.width;
				const startH = manualH ?? rectRef.current.height;
				resizeRef.current = {
					startX: e.clientX,
					startY: e.clientY,
					startW,
					startH,
					curW: startW,
					curH: startH
				};
				document.addEventListener("mousemove", onResizeMove);
				document.addEventListener("mouseup", endResize);
			};
			const onResizeTouchStart = (e) => {
				if (e.touches.length === 0) return;
				const startW = manualW ?? c.width;
				const startH = manualH ?? rectRef.current.height;
				resizeRef.current = {
					startX: e.touches[0].clientX,
					startY: e.touches[0].clientY,
					startW,
					startH,
					curW: startW,
					curH: startH
				};
				document.addEventListener("touchmove", onResizeTouchMove, { passive: false });
				document.addEventListener("touchend", endResize);
			};
			const onResizeReset = () => {
				setManualH(null);
				saveManualHeight(null);
				setManualW(null);
				saveManualWidth(null);
				setRect(measurePopup());
			};
			const popupH = manualH ?? rect.height;
			const popupW = manualW ?? c.width;
			(0, react.useEffect)(() => {
				const hasMarker = (e) => !!e.dataTransfer && Array.from(e.dataTransfer.types ?? []).includes(MARKER);
				const readPayload = (e) => {
					const raw = e.dataTransfer?.getData(MARKER) ?? "";
					try {
						return raw ? JSON.parse(raw) : null;
					} catch {
						return null;
					}
				};
				const onDragOver = (e) => {
					if (!hasMarker(e)) return;
					e.preventDefault();
					if (e.dataTransfer) e.dataTransfer.dropEffect = "copy";
				};
				const onDrop = (e) => {
					if (!hasMarker(e)) return;
					const payload = readPayload(e);
					const inComposer = !!(e.target instanceof HTMLElement ? e.target : null)?.closest("[data-composer-card] textarea");
					if (payload?.type === "directory") {
						e.preventDefault();
						e.stopPropagation();
						setDragKind(null);
						const b = getBridge();
						if (b && payload.rel) {
							const root = payload.root ?? getEffectiveRoot();
							const useRel = cfg.refStyle === "relative" && root !== null && root === activeCwd;
							const absPath = root ? `${root.replace(/\/+$/, "")}/${payload.rel}` : payload.rel;
							const p = useRel ? payload.rel : absPath;
							b.insert(`@${p}/`);
						} else if (!b) console.warn("[dsh-workspace-explorer] drop: bridge not set, cannot insert directory reference");
						return;
					}
					if (inComposer) {
						setDragKind(null);
						return;
					}
					e.preventDefault();
					e.stopPropagation();
					setDragKind(null);
					const b = getBridge();
					if (b && payload?.rel) {
						const isDir = payload.type === "directory";
						const root = payload.root ?? getEffectiveRoot();
						const useRel = cfg.refStyle === "relative" && root !== null && root === activeCwd;
						const absPath = root ? `${root.replace(/\/+$/, "")}/${payload.rel}` : payload.rel;
						const p = useRel ? payload.rel : absPath;
						b.insert(isDir ? `@${p}/` : `@${p}`);
					} else if (!b) console.warn("[dsh-workspace-explorer] drop: bridge not set, cannot insert file reference");
				};
				const onDragEnd = () => setDragKind(null);
				document.addEventListener("dragover", onDragOver, true);
				document.addEventListener("drop", onDrop, true);
				document.addEventListener("dragend", onDragEnd);
				return () => {
					document.removeEventListener("dragover", onDragOver, true);
					document.removeEventListener("drop", onDrop, true);
					document.removeEventListener("dragend", onDragEnd);
				};
			}, []);
			(0, react.useEffect)(() => {
				if (!fullscreen) return;
				const update = () => setFullRect(measureFullscreen());
				update();
				const observed = /* @__PURE__ */ new Set();
				const ro = new ResizeObserver(update);
				const bind = () => {
					for (const el of Array.from(document.querySelectorAll("[data-slot=\"conversation\"], [data-slot=\"conversation.session.header\"], [data-slot=\"conversation.composer.bar\"], [data-slot=\"conversation.composer\"]"))) if (!observed.has(el)) {
						observed.add(el);
						ro.observe(el);
					}
				};
				bind();
				const mo = new MutationObserver(() => {
					bind();
					update();
				});
				mo.observe(document.body, {
					childList: true,
					subtree: true
				});
				window.addEventListener("resize", update);
				window.visualViewport?.addEventListener("resize", update);
				return () => {
					ro.disconnect();
					mo.disconnect();
					window.removeEventListener("resize", update);
					window.visualViewport?.removeEventListener("resize", update);
				};
			}, [fullscreen, on]);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: C("dshwe-layer"),
				children: [dragKind !== null ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: C("dshwe-hint"),
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: C("dshwe-hint-chip"),
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
							viewBox: "0 0 16 16",
							width: 16,
							height: 16,
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
								d: "M8 3.5v6M5.7 7.2L8 9.5l2.3-2.3M3.5 12.5h9",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: 1.5,
								strokeLinecap: "round",
								strokeLinejoin: "round"
							})
						}), dragKind === "dir" ? tr("drop.hint.dir") : tr("drop.hint")]
					})
				}) : null, on || closing ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					"data-dshwe-popup": "",
					className: C("dshwe-popup") + (shown ? ` ${C("dshwe-popup-on")}` : "") + (fullscreen ? ` ${C("dshwe-popup-full")}` : ""),
					style: fullscreen ? {
						top: fullRect.top,
						left: fullRect.left,
						width: fullRect.width,
						height: fullRect.height
					} : {
						top: rect.top,
						height: popupH,
						width: popupW,
						"--dshwe-base-w": `${popupW}px`
					},
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Panel, {
						...props,
						onDraggingChange: setDragKind,
						fullscreen,
						onToggleFullscreen: toggleFullscreen
					}), fullscreen ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: C("dshwe-resize-corner"),
						onMouseDown: onResizeDown,
						onTouchStart: onResizeTouchStart,
						onDoubleClick: onResizeReset,
						title: tr("resize.tip"),
						role: "separator",
						"aria-orientation": "horizontal",
						"aria-label": tr("resize.tip"),
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: C("dshwe-resize-corner-bar") })
					})]
				}) : null]
			});
		}
		let tr = (k, vars) => {
			let s = DICTS.zh[k] ?? k;
			if (vars) for (const key in vars) s = s.split(`{${key}}`).join(String(vars[key]));
			return s;
		};
		const inject = ["slots", "locale"];
		function apply(ctx) {
			const slots = ctx.get("slots");
			if (slots === void 0) return;
			workspacesSvc = ctx.get("workspaces") ?? null;
			const locale = ctx.get("locale");
			if (locale !== void 0) try {
				ctx.effect(() => {
					const d1 = locale.register(NS, "zh", DICTS.zh);
					const d2 = locale.register(NS, "en", DICTS.en);
					return () => {
						d1();
						d2();
					};
				});
				const t = locale.bind(NS);
				tr = (k, vars) => {
					let s = t(k);
					if (typeof s !== "string" || s === k) s = DICTS.zh[k] ?? k;
					if (vars) for (const key in vars) s = s.split(`{${key}}`).join(String(vars[key]));
					return s;
				};
			} catch (err) {
				console.warn("locale init failed, fallback zh", String(err));
			}
			try {
				ctx.inject(["sessions"], (scope) => {
					const sessions = scope.sessions;
					if (sessions === void 0) return;
					const update = () => {
						const snap = sessions.list.getSnapshot();
						const currentId = snap.current;
						const cwd = (currentId && snap.byId ? snap.byId[currentId] : void 0)?.cwd ?? null;
						activeCwd = cwd;
						if (activeWorkspaceRoot === null) {
							sessionsCwdRoot = cwd;
							if (cwd !== null) console.info("[dsh-workspace-explorer] auto-discovered workspace root from session:", cwd);
						}
					};
					update();
					return sessions.list.subscribe(update);
				});
			} catch {}
			try {
				ctx.inject(["sessions", "conversation"], (scope) => {
					const sessions = scope.sessions;
					const conversation = scope.conversation;
					if (sessions === void 0 || conversation === void 0) return;
					const update = () => {
						const currentId = sessions.list.getSnapshot().current;
						if (!currentId) return;
						try {
							const actx = sessions.scope(currentId);
							if (actx === void 0) return;
							const inputActions = conversation.input.for(actx)?.actions;
							if (inputActions && typeof inputActions.setDraft === "function") {
								if (bridge === null) {
									setBridge({ insert(text) {
										const draft = document.querySelector("[data-composer-card] textarea")?.value ?? "";
										const sep = draft === "" || draft.endsWith("\n") ? "" : "\n";
										inputActions.setDraft(draft + sep + text);
									} });
									console.info("[dsh-workspace-explorer] bridge set via conversation.input fallback");
								}
							}
						} catch {}
					};
					update();
					return sessions.list.subscribe(update);
				});
			} catch {}
			ctx.inject(["inputTriggers"], (scope) => {
				const triggers = scope.inputTriggers;
				if (triggers === void 0) return;
				console.info("[dsh-workspace-explorer] registering @ trigger source");
				return triggers.registerSource({
					trigger: "@",
					name: "workspace-files",
					order: 10,
					async candidates(_session, req) {
						const root = getEffectiveRoot();
						if (!root) {
							console.debug("[dsh-workspace-explorer] @ candidates: no workspace root available");
							return [];
						}
						const files = await fetchAllFiles(root);
						const q = req.query.toLowerCase();
						const list = q !== "" ? files.filter((f) => f.name.toLowerCase().includes(q) || f.rel.toLowerCase().includes(q)) : files;
						console.debug(`[dsh-workspace-explorer] @ candidates: ${list.length} files from ${root}`);
						return list.slice(0, 50).map((f) => ({
							name: f.name,
							description: f.type === "directory" ? `${f.rel}/` : f.rel
						}));
					},
					onPick(pick) {
						const desc = pick.candidate.description ?? pick.candidate.name;
						const isDir = desc.endsWith("/");
						const rel = isDir ? desc.slice(0, -1) : desc;
						const absPath = fileCache.find((f) => f.rel === rel)?.path ?? rel;
						const root = getEffectiveRoot();
						const p = cfg.refStyle === "relative" && root !== null && root === activeCwd ? rel : absPath;
						console.debug("[dsh-workspace-explorer] @ onPick:", isDir ? `@${p}/` : `@${p}`);
						return { text: isDir ? `@${p}/` : `@${p}` };
					},
					lexicon(_session) {
						const root = getEffectiveRoot();
						if (!root || fileCache.length === 0 || fileCacheRoot !== root) return void 0;
						const paths = [];
						for (const f of fileCache) {
							paths.push(f.type === "directory" ? `${f.rel}/` : f.rel);
							if (paths.length >= 500) break;
						}
						return paths;
					}
				});
			});
			slots.inject("conversation.session.header.utilities", () => slots.register({
				name: "conversation.session.header.utilities",
				id: "workspace-explorer-drawer",
				order: 20,
				label: () => tr("drawer.tip")
			}, () => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(HeaderAction, {})));
			slots.inject("sidebar.footer.action", () => slots.register({
				name: "sidebar.footer.action",
				id: "workspace-explorer"
			}, () => null));
			slots.inject("shell.overlay", () => slots.register({
				name: "shell.overlay",
				id: "workspace-explorer-panel"
			}, (props) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DrawerRoot, { ...props })));
			slots.inject("conversation.input.dock", () => slots.register({
				name: "conversation.input.dock",
				id: "workspace-explorer-bridge"
			}, (props) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DockBridge, { ...props })));
			slots.inject("settings.section", () => slots.register({
				name: "settings.section",
				id: "workspace-explorer",
				order: 30,
				label: () => tr("settings.nav")
			}, () => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: C("dshwe-setpage"),
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SettingsView, {})
			})));
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});
