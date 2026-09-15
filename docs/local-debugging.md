# DSH 插件本地调试指南(Windows)

> 2026-09-15 重写:macOS 旧路径(`@jiyr0119` scope、`~/workspaceforme`)已失效。
> 本机现状:插件仓库 `D:\Users\Elec\Documents\dsh-plugins-workspace\dsh-workspace-explorer`,
> 包名 `@doubleelec/dsh-workspace-explorer`。

## 环境一览

| 环境 | profile | 端口 | 插件来源 | 用途 |
|---|---|---|---|---|
| 正式 | `web` | 3080 | 实体副本(`node_modules` 内真实文件) | 日常使用,不碰源码 |
| 开发 | `dev` | 3090 | symlink → 插件仓库 | 改代码→build→刷新即生效 |

> **注意:** 3080 与 3090 完全隔离,互不影响。正式版 web 的插件是**实体副本**,
> 不是 symlink —— 源码目录改名/移动不影响正在运行的 3080。

## 启动开发环境(端口 3090)

```powershell
dsh --profile dev --port 3090
```

启动后访问 http://127.0.0.1:3090(首次启动会打印带 token 的 URL)。

> **注意:** 不要用 `dsh web --port 3090` —— `dsh web` 写死了 web profile,
> 会去动 3080 正式环境。开发环境必须用 `dsh --profile dev`。

## dev profile 结构

`$env:USERPROFILE\.dsh\profiles\dev\`:

```
dev/
├── package.json              # file:..\..\..\Documents\dsh-plugins-workspace\dsh-workspace-explorer
├── pnpm-workspace.yaml       # nodeLinker: hoisted
├── cordis.patch.yml          # [] (空,插件行由 dsh.plugin add 机制或包内 cordis.patch.yml 提供)
└── node_modules/
    └── @doubleelec/
        └── dsh-workspace-explorer → D:\Users\Elec\Documents\dsh-plugins-workspace\dsh-workspace-explorer (symlink)
```

`package.json` 全文:

```json
{
  "name": "dsh-profile-dev",
  "private": true,
  "dsh": {
    "profile": {
      "bundles": [
        "@deepseek-ai/dsh-base",
        "@deepseek-ai/dsh-web-app",
        "@doubleelec/dsh-workspace-explorer"
      ],
      "patchReload": "live"
    }
  },
  "dependencies": {
    "@doubleelec/dsh-workspace-explorer": "file:..\\..\\..\\Documents\\dsh-plugins-workspace\\dsh-workspace-explorer"
  }
}
```

### 重建 dev symlink(搬迁/重装后)

```powershell
$p = "$env:USERPROFILE\.dsh\profiles\dev\node_modules\@doubleelec\dsh-workspace-explorer"
Remove-Item -Recurse -Force $p   # 只删链接/副本,不碰源码
cmd /c mklink /D "$p" "D:\Users\Elec\Documents\dsh-plugins-workspace\dsh-workspace-explorer"
```

> 创建 symlink 需要提权(管理员审批一次)。

## 开发工作流

```
修改代码 → npm run build → 刷新浏览器(不需要重启 DSH)
```

1. 在 `D:\Users\Elec\Documents\dsh-plugins-workspace\dsh-workspace-explorer` 改代码
2. 执行 `npm run build` 构建(`lib/` 是 DSH 实际加载的)
3. 刷新 http://127.0.0.1:3090 即可看到变化

---

## 正式环境 web 说明

- web profile 的插件是**实体副本**(2026-09-15 由 symlink 换成实体,不停服操作),
  路径 `~/.dsh/profiles/web/node_modules/@doubleelec/dsh-workspace-explorer/`。
- 源码更新后,正式环境**不会**自动跟进 —— 这是故意的(开发抖动不进正式版)。
- 测试通过后的发布流程见 `docs/publish.md`:先发 npm,再
  `dsh plugin --profile web add @doubleelec/dsh-workspace-explorer@latest`。

### ⚠️ 不要在 web 下跑 pnpm install

web 的 `package.json` 仍保留 `file:..\..\..\Documents\dsh-plugins-workspace`
旧引用(指向已不存在的旧路径),跑 `pnpm install` 会重建 symlink/报错。
正式发布前先清理该引用,或直接等 npm 发布后走标准安装流程。

---

## 常见问题

### Q: 刷新后插件没有加载?

检查 symlink 是否存在:

```powershell
(Get-Item "$env:USERPROFILE\.dsh\profiles\dev\node_modules\@doubleelec\dsh-workspace-explorer" -Force).Target
# 应该显示 → D:\Users\Elec\Documents\dsh-plugins-workspace\dsh-workspace-explorer
```

如果不存在,按上文"重建 dev symlink"重建。

### Q: 修改代码后刷新没有变化?

确保已执行 `npm run build`。symlink 只是链接目录,不会自动构建。

### Q: 3090 端口被占用?

```powershell
netstat -ano | Select-String ':3090 ' | Select-String 'LISTENING'
taskkill /PID <PID> /F
```

### Q: 想用 npm 注册的正式版本测试?

```powershell
$p = "$env:USERPROFILE\.dsh\profiles\dev\node_modules\@doubleelec\dsh-workspace-explorer"
Remove-Item -Force $p   # 只删 symlink 本体,不加 -Recurse
cd "$env:USERPROFILE\.dsh\profiles\dev"
pnpm install
```
