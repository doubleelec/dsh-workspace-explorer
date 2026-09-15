# 安装指南

## 方式一:npm 安装(推荐,用户路径)

唯一面向用户的安装方式:原生安装(`dsh plugin add` / 商店)。

```bash
dsh plugin --profile web add -w @doubleelec/dsh-workspace-explorer@latest
```

npm 包同时提供原生 Host 半区(`lib/index.js`,webServer JSON 路由 `/dsh-we/api/list|peek|tree|config|write`)和浏览器 bundle(`lib/client.js` 经 `dsh.plugin.json`),一条命令装好后会话头部即出现「工作区文件」胶囊按钮,无需任何构建或配置。

安装完成后重启或硬刷新 `dsh web`。若 profile 的 `node_modules` 尚未初始化,先 `pnpm install`。

> ⚠️ **常见误解**:插件市场收录 ≠ 插件自动出现在用户浏览器。收录 = 用户能浏览条目 + 执行安装命令。**原生安装(v0.4.0+)已验证 `dsh plugin add` 干净安装、无启动报错**;注意现代 pnpm 需在命令加 `-w`(或在 profile 的 `.npmrc` 写 `ignore-workspace-root-check=true`)。

## 方式二:本地目录安装(无需发布,维护者路径)

改完代码、dev(3090)测好后,不走 npm 发布,直接把本地仓库装进正式版 web(3080)。装进去的是**实体副本**,与源码脱钩,开发抖动漏不进正式版。

```powershell
# 1) 构建(lib/ 才是 DSH 真正加载的)
cd <repo>
npm run build

# 2) 从本地路径装进 web profile(Windows 用 file:// + 正斜杠)
dsh plugin --profile web add -w "file://D:/path/to/dsh-workspace-explorer"

# 3) 验证装进去的是新版本
dsh plugin --profile web list
dsh --profile web --dump-config   # 应含 elec-workspace-explorer

# 4) 刷新 3080 页面验证(面板未出现再重启 dsh web)
```

说明:

- `file:` 依赖装的是**实体副本**(`~/.dsh/profiles/web/node_modules/@doubleelec/dsh-workspace-explorer/`),不是 symlink —— 重装瞬间换文件,已加载的请求不受影响,刷新页面即吃到新代码,一般无需重启 DSH。
- 之后源码再改,正式版**不会**自动跟进(故意的);测好后重跑一次 `dsh plugin --profile web install` 即同步。
- 日常开发循环(dev 3090 symlink,改→构建→刷新即生效)见 [`docs/local-debugging.md`](./local-debugging.md);npm 发布流程见 [`docs/publish.md`](./publish.md)。

## 发布到 GitHub

```bash
cd dsh-workspace-explorer
git init
git add .
git commit -m "init: dsh-workspace-explorer"
git remote add origin https://github.com/<your-org>/dsh-workspace-explorer.git
git push -u origin main
```

建议在仓库描述里带上 `deepseek-harness`、`cordis`、`plugin` 等关键词,方便检索。
