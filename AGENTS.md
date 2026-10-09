# dsh-workspace-explorer

## Commit messages

Write every commit subject and body in English so the public Git history is accessible to international contributors. Use Conventional Commits: `type(scope): imperative summary` (scope is optional). Keep the subject concise, use an imperative verb, and omit the trailing period. Common types: `feat`, `fix`, `docs`, `refactor`, `test`, `build`, `ci`, and `chore`.

Examples: `fix(tree): preserve expanded folders` or `docs: clarify install steps`.

## Git remotes

Two remotes: `origin` (https://github.com/doubleelec/dsh-workspace-explorer.git, public) and `wechat` (git@git.weixin.qq.com:doubleelec/dsh-workspace-explorer.git, cold backup). Push feature work to `origin`; mirror `main` to `wechat` with `git push wechat main` when the cold backup needs updating. In the Windows sandbox, plain HTTPS push fails on schannel TLS state, so push via the `push-from-sandbox` skill.
