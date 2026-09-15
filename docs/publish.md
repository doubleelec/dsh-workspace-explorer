# 发布到 npm / Publishing to npm

> 本仓库用国内镜像做日常依赖安装,但**发布必须走官方源**(镜像站只读,不接受 publish)。所有 npm 发布命令显式带 `--registry=https://registry.npmjs.org/`,不要写进 `.npmrc`,免得日常安装也被拖慢。

## 首次发布前准备

1. 注册 npm 账号:https://www.npmjs.com/signup(验邮箱)
2. 本包 scope 为个人用户名,无需建组织:`@doubleelec/dsh-workspace-explorer`
3. 开 2FA(发布强制要求):头像 → Account Settings → Two-Factor Authentication

## 发布流程

```powershell
cd <repo>   # 本仓库的本地检出目录

# 1) 登录(走官方源;2FA 要输 OTP)
npm login --registry=https://registry.npmjs.org/

# 2) 版本号三处同步(package.json / dsh.plugin.json / manifest.json),
#    CHANGELOG 定版,构建验证
npm run build
npm run typecheck

# 3) 发布 —— 正式版(无 semver 预发布后缀)直发 `latest`,无需 `--tag`
npm publish --registry=https://registry.npmjs.org/

# 4) 验证
npm view @doubleelec/dsh-workspace-explorer version --registry=https://registry.npmjs.org/
```

说明:

- 正式版直发 `latest`;历史预发布版(`0.7.1-fork.4` 及之前)曾用 `--tag fork`(semver 预发布后缀必须显式 tag,见 git 历史)。
- 用户安装:`dsh plugin add @doubleelec/dsh-workspace-explorer@latest`(或显式版本号)。
- `prepublishOnly` 会自动再构建一次,构建产物抖动(CSS 类名哈希顺序)属正常,提交即可。
- 发错 72 小时内可撤回:`npm unpublish @doubleelec/dsh-workspace-explorer@<version> --registry=https://registry.npmjs.org/`。
- 包内容清单:`lib/` + `dsh.plugin.json` + `manifest.json` + docs(见 `package.json` 的 `files` 字段)。

## 发布到 GitHub

源码推送正常走 `git push elec main`(见仓库既有流程);npm 发完后打 tag:

```powershell
git tag v0.8.0
# (用存量凭证推送,见既有发布流程)
git push elec v0.8.0
```
