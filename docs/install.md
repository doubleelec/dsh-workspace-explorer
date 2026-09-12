# 安装指南

唯一安装方式:原生安装(`dsh plugin add` / 商店)。

```bash
dsh plugin --profile web add -w @elec/dsh-workspace-explorer@latest
```

npm 包同时提供原生 Host 半区(`lib/index.js`,webServer JSON 路由 `/dsh-we/api/list|peek|tree|config|write`)和浏览器 bundle(`lib/client.js` 经 `dsh.plugin.json`),一条命令装好后会话头部即出现「工作区文件」胶囊按钮,无需任何构建或配置。

安装完成后重启或硬刷新 `dsh web`。若 profile 的 `node_modules` 尚未初始化,先 `pnpm install`。

> ⚠️ **常见误解**:插件市场收录 ≠ 插件自动出现在用户浏览器。收录 = 用户能浏览条目 + 执行安装命令。**原生安装(v0.4.0+)已验证 `dsh plugin add` 干净安装、无启动报错**;注意现代 pnpm 需在命令加 `-w`(或在 profile 的 `.npmrc` 写 `ignore-workspace-root-check=true`)。

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
