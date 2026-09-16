# dsh-workspace-explorer

> Self-maintained by [doubleelec](https://github.com/doubleelec) — based on
> [Jiyr0119/dsh-workspace-explorer](https://github.com/Jiyr0119/dsh-workspace-explorer) v0.7.1 (MIT).
> npm package: `@doubleelec/dsh-workspace-explorer`.

[![License](https://img.shields.io/github/license/doubleelec/dsh-workspace-explorer)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/doubleelec/dsh-workspace-explorer)](https://github.com/doubleelec/dsh-workspace-explorer/stargazers)
[![Last commit](https://img.shields.io/github/last-commit/doubleelec/dsh-workspace-explorer)](https://github.com/doubleelec/dsh-workspace-explorer)

<p align="center">
  ⭐ If you find this useful, give it a Star — it makes the maintainer's day &nbsp;·&nbsp; <a href="https://github.com/doubleelec/dsh-workspace-explorer">★ Give a Star</a>
</p>

> A workspace file explorer for the DeepSeek Harness Web UI: a **“Workspace Files” capsule button in the session header** (feature name + folder icon, beside the Session log button) opens an animated popup showing the current workspace's directory tree — click a file to preview it, share it into the chat with one click, or drag it into the composer.

Inspired by the VS Code / Cursor project tree, filling the gap of a missing directory view in DSH after workspaces are added.

## Why this plugin

- **Preview first, never misfire** — clicking a file row opens it in a dedicated Preview tab instead of unexpectedly injecting text into your draft. Sharing is an explicit act: the arrow button at the row's head, `⏎`, points toward the composer at the bottom-left — the icon says where the file is going. Closing and reopening the panel restores the tab, the previewed file and the Markdown view.
- **Markdown that reads like Markdown** — `.md` / `.mdx` files render formatted (headings, lists, code blocks, quotes, tables, task lists) with a one-click source toggle. `mermaid` blocks render on demand via CDN lazy-load. Zero-dependency renderer built on React elements — XSS-safe by construction, no sanitizer needed.
- **Reference anything in one motion** — single click to share, drag & drop to the caret, Shift / ⌘ multi-select batch insert, or type `@` in the composer to fuzzy-find any file (up to 5000 entries, 10 levels deep) even with the panel closed.
- **Edit without leaving** — preview panel turns into an editor (Save / Discard / Cancel) with external-change detection on save; writes go straight to disk.
- **Fullscreen when it matters** — one click in the header expands the popup over the whole session area for big files and long Markdown; click again (or `Esc`) to go back.
- **Stays out of the way** — the popup measures itself live between the session header and the composer, never covers the input box; size is corner-draggable with localStorage memory (double-click resets). Noise dirs hidden, sizes shown, relative/absolute reference format — all live-tunable.

## 🖥 Demo

![dsh-workspace-explorer demo](demo/preview.gif)

*Demo GIF (recorded at v0.5.1): the **“Workspace Files” pill entry**, multi-select batch insert, folder drag → compact tree text, paged preview, and the settings tab. The newer Preview tab, file editing and Markdown rendering are shown in the screenshots below.*

<details>
<summary><b>Screenshots</b></summary>

![Panel](assets/screenshots/panel.png)

![File tree](assets/screenshots/tree.png)

![Split-view preview](assets/screenshots/preview.png)

![Edit mode](assets/screenshots/edit.png)

![Insert & send](assets/screenshots/insert.png)

</details>

## Features

- 📂 **Animated popup** — a **“Workspace Files” capsule button** (feature name + folder icon, same style as the native **Session log** download button) sits in the session header and opens a floating panel with a spring-like fade/scale-in animation; the popup is measured live to sit **between the session header and the composer** (the chat area's right side), so it never covers the input box. **Corner-drag to resize** (width + height, persisted to localStorage, double-click resets)
- 🗂 **Top tab bar** — Files / Preview / Settings; the Settings page tunes behavior live (hide noise dirs, show sizes, reference format) and mirrors into DSH Settings → Workspace Explorer
- 🗂 **Lazy-loading tree** — directories load on demand; noise dirs (`node_modules`, `.git`, `dist`, `__pycache__`, …) are hidden automatically
- 🎨 **File-type icons** — filled, color-coded document badges per extension (TS / JS / Python / JSON / Markdown / image / config / shell, …); amber folders that brighten when expanded; the actively previewed file gets a blue dot
- 🖱 **Click to preview** — click a file row (or `Enter` / `Space`) to open it in the Preview tab; the **⏎ button** at the row's head inserts the `@path` reference into the composer (`@` / `i` shortcut works too). The tab, the file and the rendered/source view survive panel close/reopen.
- ⛶ **Fullscreen mode** — the header toggle (next to close) expands the popup over the whole session area for big files / long Markdown; click again to restore, `Esc` exits fullscreen first
- 🖱 **Drag & drop** — drop a file into the composer to insert at the caret (fullscreen dashed hint); dropping elsewhere appends to the end. **Folders are draggable too** — dropping a directory inserts a depth-limited compact tree listing
- 🖱 **Multi-select & batch insert** — Shift / ⌘ click to select multiple rows, then insert all of them at once (files → references, folders → tree listings)
- ⌨️ **`@` mention anywhere** — type `@` in the composer to fuzzy-find workspace files (name or path, 50 suggestions, 500-path lexicon highlight) — works even with the panel closed, via sessions-cwd auto-discovery
- 🌓 **Theme-aware** — built entirely on DSH's `--dsw-alias-*` design tokens; adapts to light/dark with a native dialog look (16px radius, lv3 shadow)
- 🔍 **Search & filter** — filter files by name across the whole tree (up to 5000 entries / 10 levels, match count shown)
- 📝 **Markdown rendering** — `.md` / `.mdx` preview rendered by default (headings, bold/italic/strike, code blocks with language tag, quotes, ordered/unordered/task lists, tables, horizontal rules); one-click toggle back to source; oversized paged files fall back to source automatically
- 📊 **Mermaid diagrams** — `mermaid` code blocks show a Render button; the library (mermaid@10, jsDelivr primary + unpkg fallback) loads on first click only, so the bundle stays +6 KB; `securityLevel: strict`, source fallback on offline/CSP/syntax errors
- ✏️ **Preview tab** — whole-file view (≤ 512 KB in one read, paged beyond that with total lines & current page); insert the reference, or paste the full content for small files (≤ 32 KB)
- 📝 **File editing** — click "Edit" in the preview panel to enter textarea mode; save writes directly to disk with change detection (warns if the file was modified externally)
- 🌐 **i18n** — zh/en dictionaries registered through DSH's locale service; the panel follows the DSH UI language

## Quick Start

### Install from npm

One command installs the full plugin — no build step, no config changes. The npm package ships a native host half (`lib/index.js`, webServer JSON routes `/dsh-we/api/list|peek|tree|config|write`) **and** a browser bundle (`lib/client.js` via `dsh.plugin.json`).

```bash
dsh plugin --profile web add -w @doubleelec/dsh-workspace-explorer@latest
```

(or click the install button in the DSH market). After install, a **“Workspace Files” pill (name + icon)** appears in the session header; restart or hard-refresh the web UI if needed. This is the zero-config, no-build path.

> ℹ️ **pnpm note**: modern pnpm (9/10) refuses to add a dependency at the workspace root (`ERR_PNPM_ADDING_TO_ROOT`), hence the `-w` flag above. Alternative: create `~/.dsh/profiles/web/.npmrc` containing `ignore-workspace-root-check=true`.

> ⚠️ **Common misconception**: a listing alone never auto-installs anything — users still click install. The full UI now appears after install (native bundle — no boot errors).

### Install from local source (no publish)

After testing in dev (3090), install straight from this repo into prod (3080) as a decoupled copy — no npm publish needed:

```powershell
# one elevation, everything inside: symlink + build + web install
powershell -ExecutionPolicy Bypass -File scripts/setup.ps1

# refresh 3080 — done (restart `dsh web` only if the panel is missing)
```

What the script does: rebuilds `lib/` (what DSH actually loads), links the dev profile to this repo (instant refresh on 3090), and installs a **real copy** (not a symlink) into the web profile so dev churn never leaks into prod. Later edits: rebuild + refresh 3090; when tested, re-run the script (or `dsh plugin --profile web install`) + refresh 3080.

### Usage

1. Click the **“Workspace Files” pill** (feature name + folder icon) at the top right of the session header, beside the Session log button, to open the popup.
2. Expand directories to browse files; **click a file to preview it**.
3. Click the **⏎ button** at a row's head (or drag the file into the composer, or type `@` + filename) to reference it, then send.
4. Use the **Settings** tab at the top of the popup (or DSH Settings → Workspace Explorer) to adjust panel behavior.

## Local development

Two isolated environments — edit once, verify in dev, then ship to prod:

|  | Dev | Prod |
|---|---|---|
| Profile | `dev` | `web` |
| URL | http://127.0.0.1:3090 | http://127.0.0.1:3080 |
| Plugin source | symlink → this repo | real copy (decoupled from source) |

```powershell
# first time only: one elevated shell sets up both profiles
powershell -ExecutionPolicy Bypass -File scripts/setup.ps1

# daily loop
# 1) edit src/, then build (lib/ is what DSH actually loads)
npm run build
# 2) refresh 3090 — changes appear instantly (symlink, no reinstall, no restart)
# 3) after testing, sync to prod (no npm publish needed)
dsh plugin --profile web install
# 4) refresh 3080 — done, no restart needed
```

**Rule of thumb:** 3090 follows the source automatically; 3080 only eats what you manually `install` into it — half-baked edits never leak into prod.

Dev profile layout (`$env:USERPROFILE\.dsh\profiles\dev\`): `package.json` with a `file:` dep on this repo → `node_modules/@doubleelec/dsh-workspace-explorer` symlink. If the link breaks after moving the repo, just re-run `scripts/setup.ps1`. Never run `dsh web --port 3090` for dev — `dsh web` is pinned to the web profile; dev must use `dsh --profile dev --port 3090`.

Troubleshooting: no panel after refresh → check the symlink target; edits not showing → you forgot `npm run build`; port 3090 busy → `netstat -ano | Select-String ':3090 '` then `taskkill /PID <PID> /F`.

## Publishing

Daily installs use a local mirror, but **publishing must go to the official registry** (mirrors are read-only). Never write the official registry into `.npmrc`.

```powershell
cd <repo>   # this repo's checkout

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

Notes: version numbers stay in sync across `package.json` / `dsh.plugin.json` / `manifest.json` (+ CHANGELOG). Package contents: `lib/` + `dsh.plugin.json` + `manifest.json` + docs (see `files` in `package.json`). A bad publish can be undone within 72h: `npm unpublish @doubleelec/dsh-workspace-explorer@<version> --registry=https://registry.npmjs.org/`.

## Project Structure

```
dsh-workspace-explorer/
├── README.md             # Docs — English, single file (this one)
├── LICENSE               # MIT
├── CHANGELOG.md          # Release notes
├── manifest.json         # Plugin metadata
├── package.json          # npm package (@doubleelec/dsh-workspace-explorer)
├── scripts/
│   └── setup.ps1         # One-elevation setup: dev symlink + build + web install
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
│       ├── mermaid.ts    # Mermaid CDN lazy-loader
│       ├── previewState.ts # Preview restore state (tab + file + MD view)
│       ├── format.ts     # Pure formatting helpers
│       └── popupLayout.ts# Popup geometry math (unit-tested)
├── test/                 # vitest suites (format / host / popupLayout / markdown / mermaid / previewState)
└── lib/                  # Built artifacts (lib/index.js + lib/client.js)
```

## Implementation Notes

| Capability | Mechanism |
|---|---|
| Directory listing | Host `fs` via `resolveRel`-guarded root+rel (`/dsh-we/api/list`), directories first, 400-entry cap |
| File peek | Whole read ≤ 512 KB, paged scan with line-offset cache beyond (`/dsh-we/api/peek`); binary sniffed, ≤ 32 KB inlinable |
| Tree / search index | Depth/budget-limited recursion (`/dsh-we/api/tree`, up to 10 levels / 5000 entries) |
| File write | `/dsh-we/api/write` with size-based external-change detection |
| Host→Client RPC | Same-origin `fetch POST /dsh-we/api/*` (path-confined, no arbitrary-path reads) |
| Popup | `shell.overlay` slot (`useWorkspaces` / `useSessions`), position measured between session header & composer; corner resize with localStorage memory |
| Toggle button | `conversation.session.header.utilities` slot (“Workspace Files” pill: name + icon) |
| Composer write | `conversation.input.dock` → `inputActions.setDraft`, with `conversation.input` service fallback |
| `@` mention | `inputTriggers.registerSource` (fuzzy candidates + lexicon highlight), root auto-discovered from sessions cwd |
| Drag & drop | HTML5 DnD; native caret insert in the textarea, append elsewhere |
| Markdown | Hand-written parser → React elements (no `innerHTML`); source toggle; paged fallback |
| Mermaid | CDN lazy-load (jsDelivr + unpkg fallback), `securityLevel: strict`, click-to-render per block |
| Preview restore | Module-level memory (tab + file ref + MD view), same-root only; mermaid stays unrendered |
| Theming / i18n | `--dsw-alias-*` CSS variables (light/dark); zh/en via the DSH locale service |

### Hard-won lessons (native packaging)

- **Quoted scoped names in YAML** — `cordis.patch.yml` must quote `'@doubleelec/dsh-workspace-explorer'`; a bare `@` crashes `dsh web` boot (`bad indentation of a mapping entry`).
- **One route per `register()` call** — passing an array silently registers nothing (routes end up under key `undefined`); call `webServer.register` once per route.
- **Supersede stale entries** — when an entry point moves (e.g. sidebar button → header pill), register an empty placeholder on the old slot so the legacy button disappears.
- **Bundle id = npm name** — the client bundle `id` must equal the package name including scope, or the panel never mounts (platform keys modules by name).
- **Toolchain: tsdown ^0.22 + lightningcss** — tsdown 0.6.x is incompatible with rolldown (`transformPlugin` FATAL). Platform modules (`react`, `react-dom`, `@deepseek-ai/cordis`, `dsh-client-*`) stay external; CSS Modules inline via lightningcss.
- **rc version families matter** — `dsh-client-*` / `dsh-host-webserver` / `dsh-invariants` must be a mutually compatible rc family; mixing rc.1 with rc.6 breaks installs (`dsh-paths` E404).

## Version

Current version **v0.9.0** — **Mermaid diagrams** (CDN lazy-load, click-to-render), **preview restore** (tab + file + Markdown view), and the XSS-test fix.
See [CHANGELOG.md](./CHANGELOG.md) for release notes.

## Roadmap

Focused on the two lines that actually matter to the product: the **read path** (pointing the model at code) and the **write path** (editing files). Everything else is parked in the backlog below instead of being listed as a peer track.

**Done ✅**

- [x] v0.1 core: right-side file tree, click / drag-to-composer references, DSH native look
- [x] Search & filter across the whole tree; content insertion for small files (≤ 32 KB)
- [x] i18n (zh/en via the DSH locale service, follows the DSH UI language)
- [x] `@` mention source with sessions-cwd auto-discovery + lexicon highlight; unified `@path` reference format
- [x] Demo language toggle, GitHub Pages preview, demo GIF, storefront screenshots
- [x] npm package + `dsh.bundle` contract + awesome-dsh-plugin listing
- [x] Multi-target references: folder drag (compact tree) + multi-select batch insert
- [x] Whole-file preview (≤ 512 KB) with paged fallback for large files
- [x] Preview-first interaction: row click previews, ⏎ shares, `@` / `i` shortcuts
- [x] Markdown rendering (zero-dep, XSS-safe) + source toggle
- [x] In-panel file editing with external-change detection
- [x] Resizable popup with size memory; Preview as a standalone tab
- [x] Mermaid diagrams (CDN lazy-load, click-to-render)
- [x] Preview restore (tab + file + Markdown view)

**Parked backlog** (do when real demand shows up)

- Content search across loaded dirs (host-side grep); recent files / favorites
- Full keyboard navigation; copy path / reveal in the OS file manager
- Virtual scrolling (huge dirs); light/dark theme regression checks; Playwright e2e
- CI (lint + e2e + automated release)

## License

[MIT](./LICENSE)
