# DEV — dsh-workspace-explorer maintainer guide

For users: see [README.md](./README.md) (install from npm, usage, features).
This file is for maintainers: dev loop, local prod install, publishing, internals.

## Environments

Two isolated profiles — edit once, verify in dev, then ship to prod:

|  | Dev | Prod |
|---|---|---|
| Profile | `dev` | `web` |
| URL | http://127.0.0.1:3090 | http://127.0.0.1:3080 |
| Plugin source | symlink → this repo | real copy (decoupled from source) |

The dev profile works **because of the symlink, not because of any script**:
`$env:USERPROFILE\.dsh\profiles\dev\node_modules\@doubleelec\dsh-workspace-explorer`
points at this repo, so `npm run build` + refresh 3090 is the whole dev loop —
no install step, no elevation after the link exists.

## Daily loop

```powershell
# 1) edit src/, then build (lib/ is what DSH actually loads)
npm run build

# 2) refresh 3090 — changes appear instantly (symlink, no reinstall, no restart)

# 3) after testing, ship to prod (one elevation, no npm publish needed)
powershell -ExecutionPolicy Bypass -File scripts/setup.ps1

# 4) refresh 3080 — done (restart `dsh web` only if the panel is missing)
```

**Rule of thumb:** 3090 follows the source automatically; 3080 only eats what you
manually install into it — half-baked edits never leak into prod.

## One-elevation prod install

`scripts/setup.ps1` exists for exactly one job: put this repo into the prod
web profile (3080). Run it in an elevated PowerShell; everything needing
elevation happens inside that single session:

1. `npm run build` (skip with `-SkipBuild`)
2. `dsh plugin --profile web add -w "file://<repo>"` + `dsh plugin --profile web install`
   (a real copy, not a symlink — dev churn stays out of prod)

The script deliberately does **not** touch the dev profile: creating or
repairing the dev symlink is a one-time manual act (see below), not part of
every prod install. Mixing the two is what made the old script pointless —
it re-did dev setup on every prod ship, as if the dev profile's existence
depended on the install script rather than the other way round.

### One-time dev symlink (only when the link is missing/broken)

```powershell
$p = "$env:USERPROFILE\.dsh\profiles\dev\node_modules\@doubleelec\dsh-workspace-explorer"
Remove-Item -Recurse -Force $p   # link/copy only, never the source tree
cmd /c mklink /D "$p" "<repo>"   # needs one admin approval
```

Check it with `(Get-Item $p -Force).Target` — it should print the repo path.
Never run `dsh web --port 3090` for dev: `dsh web` is pinned to the web
profile; dev must use `dsh --profile dev --port 3090`.

### Troubleshooting

- No panel after refresh → check the symlink target (dev) or re-run the setup script (prod).
- Edits not showing → you forgot `npm run build` (the symlink links the directory, it doesn't build).
- Port 3090 busy → `netstat -ano | Select-String ':3090 '` then `taskkill /PID <PID> /F`.

## Publishing to npm

Daily installs use a local mirror, but **publishing must go to the official
registry** (mirrors are read-only). Never write the official registry into `.npmrc`.

```powershell
cd <repo>

# 1) login (official registry; 2FA needs an OTP)
npm login --registry=https://registry.npmjs.org/

# 2) sync versions (package.json / dsh.plugin.json / manifest.json),
#    finalize CHANGELOG, verify
npm run build
npm run typecheck

# 3) publish — stable releases go straight to `latest`, no --tag
npm publish --registry=https://registry.npmjs.org/

# 4) verify + tag the source
npm view @doubleelec/dsh-workspace-explorer version --registry=https://registry.npmjs.org/
git tag v0.9.0
git push elec v0.9.0
```

Notes: version numbers stay in sync across `package.json` / `dsh.plugin.json` /
`manifest.json` (+ CHANGELOG). Package contents: `lib/` + `dsh.plugin.json` +
`manifest.json` + scripts/docs (see `files` in `package.json`). A bad publish
can be undone within 72h:
`npm unpublish @doubleelec/dsh-workspace-explorer@<version> --registry=https://registry.npmjs.org/`.

## Project structure

```
dsh-workspace-explorer/
├── README.md             # User docs (install from npm, usage, features)
├── DEV.md                # This file — maintainer guide
├── LICENSE               # MIT
├── CHANGELOG.md          # Release notes
├── manifest.json         # Plugin metadata
├── package.json          # npm package (@doubleelec/dsh-workspace-explorer)
├── scripts/
│   └── setup.ps1         # One-elevation prod install (3080 only)
├── demo/
│   ├── index.html        # Interactive mock preview (GitHub Pages)
│   └── preview.gif       # Demo animation (README)
├── .github/
│   └── workflows/
│       └── pages.yml     # Deploy demo/ to GitHub Pages (manual; preview hidden)
├── src/
│   ├── index.ts          # Native host half: webServer JSON routes (/dsh-we/api/*)
│   └── client/
│       ├── index.tsx     # Native client half: popup + tree + preview + drag & drop
│       ├── markdown.ts   # Zero-dep Markdown parser/renderer (XSS-safe)
│       ├── html.ts       # HTML file detection (sandboxed iframe render)
│       ├── mermaid.ts    # Mermaid CDN lazy-loader
│       ├── previewState.ts # Preview restore state (tab + file + MD/HTML view)
│       ├── format.ts     # Pure formatting helpers
│       └── popupLayout.ts# Popup geometry math (unit-tested)
├── test/                 # vitest suites (format / host / popupLayout / markdown / mermaid / previewState)
└── lib/                  # Built artifacts (lib/index.js + lib/client.js)
```

## Implementation notes

| Capability | Mechanism |
|---|---|
| Directory listing | Host `fs` via `resolveRel`-guarded root+rel (`/dsh-we/api/list`), directories first, 400-entry cap |
| File peek | Whole read ≤ 512 KB, paged scan with line-offset cache beyond (`/dsh-we/api/peek`); binary sniffed, ≤ 32 KB inlinable |
| Tree / search index | Depth/budget-limited recursion (`/dsh-we/api/tree`, up to 10 levels / 5000 entries) |
| File write | `/dsh-we/api/write` with size-based external-change detection |
| Host→Client RPC | Same-origin `fetch POST /dsh-we/api/*` (path-confined, no arbitrary-path reads) |
| Popup | `shell.overlay` slot (`useWorkspaces` / `useSessions`), position measured between session header & composer; corner resize with localStorage memory (stays visible in fullscreen — first real drag exits fullscreen); double-click resets |
| Toggle button | `conversation.session.header.utilities` slot (“Workspace Files” pill: name + icon) |
| Composer write | `conversation.input.dock` → `inputActions.setDraft`, with `conversation.input` service fallback |
| `@` mention | `inputTriggers.registerSource` (fuzzy candidates + lexicon highlight), root auto-discovered from sessions cwd |
| Drag & drop | HTML5 DnD; native caret insert in the textarea, append elsewhere |
| Markdown | Hand-written parser → React elements (no `innerHTML`); source toggle; paged fallback |
| HTML | `isHtmlFile` (ext check) → `<iframe sandbox="" srcDoc>` static render, no sanitizer dep; source toggle with module-level view memory; paged fallback |
| Mermaid | CDN lazy-load (jsDelivr + unpkg fallback), `securityLevel: strict`, click-to-render per block |
| Preview restore | Module-level memory (tab + file ref + MD/HTML view), same-root only; mermaid stays unrendered |
| Theming / i18n | `--dsw-alias-*` CSS variables (light/dark); zh/en via the DSH locale service |

### Hard-won lessons (native packaging)

- **Quoted scoped names in YAML** — `cordis.patch.yml` must quote `'@doubleelec/dsh-workspace-explorer'`; a bare `@` crashes `dsh web` boot (`bad indentation of a mapping entry`).
- **One route per `register()` call** — passing an array silently registers nothing (routes end up under key `undefined`); call `webServer.register` once per route.
- **Supersede stale entries** — when an entry point moves (e.g. sidebar button → header pill), register an empty placeholder on the old slot so the legacy button disappears.
- **Bundle id = npm name** — the client bundle `id` must equal the package name including scope, or the panel never mounts (platform keys modules by name).
- **Toolchain: tsdown ^0.22 + lightningcss** — tsdown 0.6.x is incompatible with rolldown (`transformPlugin` FATAL). Platform modules (`react`, `react-dom`, `@deepseek-ai/cordis`, `dsh-client-*`) stay external; CSS Modules inline via lightningcss.
- **rc version families matter** — `dsh-client-*` / `dsh-host-webserver` / `dsh-invariants` must be a mutually compatible rc family; mixing rc.1 with rc.6 breaks installs (`dsh-paths` E404).
