# dsh-workspace-explorer

## Commit messages

Write every commit subject and body in English so the public Git history is accessible to international contributors. Use Conventional Commits: `type(scope): imperative summary` (scope is optional). Keep the subject concise, use an imperative verb, and omit the trailing period. Common types: `feat`, `fix`, `docs`, `refactor`, `test`, `build`, `ci`, and `chore`.

Examples: `fix(tree): preserve expanded folders` or `docs: clarify install steps`.

## Git remotes

Two remotes: `origin` (git@github.com:doubleelec/dsh-workspace-explorer.git, public) and `wechat` (git@git.weixin.qq.com:doubleelec/dsh-workspace-explorer.git, cold backup). Push to both remotes every time: `origin` first, then `git push wechat main`.

## Python / pytest

治理测试统一用 workspace 根的公共 venv 跑:`..\.venv\Scripts\python.exe -m pytest tests/governance -q`(本仓功能测试主力是 Vitest,pytest 只跑 `tests/governance/`)。解释器由调用方选,仓内不写死路径、不建 in-repo venv。原因:机器级 `mkdir-0o700-shim` 只在会话创建时给 workspace 内已存在的 venv 打补丁——裸系统解释器跑 pytest 每次都会留一个删不掉的 `pytest-cache-files-*`(0o700 毒化,沙箱零权限删不动)。本仓需要 pin 第三方包版本时再分家(自建 in-repo venv,插件自动盖住)。
