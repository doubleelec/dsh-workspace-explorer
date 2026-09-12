# dsh-workspace-explorer

> Self-maintained fork by [doubleelec](https://github.com/doubleelec) — based on
> [Jiyr0119/dsh-workspace-explorer](https://github.com/Jiyr0119/dsh-workspace-explorer) v0.7.1 (MIT).
> npm package: `@elec/dsh-workspace-explorer`.

**[English](README.md)** | [中文](README.zh.md)

[![License](https://img.shields.io/github/license/doubleelec/dsh-workspace-explorer)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/doubleelec/dsh-workspace-explorer)](https://github.com/doubleelec/dsh-workspace-explorer/stargazers)
[![Last commit](https://img.shields.io/github/last-commit/doubleelec/dsh-workspace-explorer)](https://github.com/doubleelec/dsh-workspace-explorer)

<p align="center">
  ⭐ If you find this useful, give it a Star — it makes the maintainer's day &nbsp;·&nbsp; <a href="https://github.com/doubleelec/dsh-workspace-explorer">★ Give a Star</a>
</p>

> A workspace file explorer for the DeepSeek Harness Web UI: a **“Workspace Files” capsule button in the session header** (feature name + folder icon, beside the Session log button) opens an animated popup showing the current workspace's directory tree — click a file to preview it, share it into the chat with one click, or drag it into the composer.

Inspired by the VS Code / Cursor project tree, filling the gap of a missing directory view in DSH after workspaces are added.

## Why this plugin

- **Preview first, never misfire** — clicking a file row opens it in a dedicated Preview tab instead of unexpectedly injecting text into your draft. Sharing is an explicit act: the arrow button at the row's head, `⏎`, points toward the composer at the bottom-left — the icon says where the file is going.
- **Markdown that reads like Markdown** — `.md` / `.mdx` files render formatted (headings, lists, code blocks, quotes, tables, task lists) with a one-click source toggle. Zero-dependency renderer built on React elements — XSS-safe by construction, no sanitizer needed.
- **Reference anything in one motion** — single click to share, drag & drop to the caret, Shift / ⌘ multi-select batch insert, or type `@` in the composer to fuzzy-find any file (up to 5000 entries, 10 levels deep) even with the panel closed.
- **Edit without leaving** — preview panel turns into an editor (Save / Discard / Cancel) with external-change detection on save; writes go straight to disk.
- **Stays out of the way** — the popup measures itself live between the session header and the composer, never covers the input box; size is corner-draggable with localStorage memory (double-click resets). Noise dirs hidden, sizes shown, relative/absolute reference format — all live-tunable.

## 🖥 Demo

![dsh-workspace-explorer demo](demo/preview.gif)

*Demo GIF (recorded at v0.5.1): the **“Workspace Files” pill entry**, multi-select batch insert, folder drag → compact tree text, paginated preview, and the settings tab. The newer Preview tab, file editing and Markdown rendering are shown in the screenshots below.*

<details>
<summary><b>Screenshots</b> · 截图</summary>

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
- 🖱 **Click to preview** — click a file row (or `Enter` / `Space`) to open it in the Preview tab; the **⏎ button** at the row's head inserts the `@path` reference into the composer (`@` / `i` shortcut works too)
- 🖱 **Drag & drop** — drop a file into the composer to insert at the caret (fullscreen dashed hint); dropping elsewhere appends to the end. **Folders are draggable too** — dropping a directory inserts a depth-limited compact tree listing
- 🖱 **Multi-select & batch insert** — Shift / ⌘ click to select multiple rows, then insert all of them at once (files → references, folders → tree listings)
- ⌨️ **`@` mention anywhere** — type `@` in the composer to fuzzy-find workspace files (name or path, 50 suggestions, 500-path lexicon highlight) — works even with the panel closed, via sessions-cwd auto-discovery
- 🌓 **Theme-aware** — built entirely on DSH's `--dsw-alias-*` design tokens; adapts to light/dark with a native dialog look (16px radius, lv3 shadow)
- 🔍 **Search & filter** — filter files by name across the whole tree (up to 5000 entries / 10 levels, match count shown)
- 📝 **Markdown rendering** — `.md` / `.mdx` preview rendered by default (headings, bold/italic/strike, code blocks with language tag, quotes, ordered/unordered/task lists, tables, horizontal rules); one-click toggle back to source; oversized paged files fall back to source automatically
- ✏️ **Preview tab** — whole-file view (≤ 4 MB in one read, paged beyond that with total lines & current page); insert the reference, or paste the full content for small files (≤ 32 KB)
- 📝 **File editing** — click "Edit" in the preview panel to enter textarea mode; save writes directly to disk with change detection (warns if the file was modified externally)
- 🌐 **i18n** — zh/en dictionaries registered through DSH's locale service; the panel follows the DSH UI language

## Quick Start

### Installation & usage

One command installs the full plugin — no build step, no config changes. The npm package ships a native host half (`lib/index.js`, webServer JSON routes `/dsh-we/api/list|peek|tree|config|write`) **and** a browser bundle (`lib/client.js` via `dsh.plugin.json`).

```bash
dsh plugin --profile web add -w @elec/dsh-workspace-explorer@latest
```

(or click the install button in the DSH market). After install, a **“Workspace Files” pill (name + icon)** appears in the session header; restart or hard-refresh the web UI if needed. This is the zero-config, no-build path.

> ℹ️ **pnpm note**: modern pnpm (9/10) refuses to add a dependency at the workspace root (`ERR_PNPM_ADDING_TO_ROOT`), hence the `-w` flag above. Alternative: create `~/.dsh/profiles/web/.npmrc` containing `ignore-workspace-root-check=true`.

> ⚠️ **Common misconception**: a listing alone never auto-installs anything — users still click install. The full UI now appears after install (native bundle — no boot errors).

See [`docs/install.md`](./docs/install.md) for details.

### Usage

1. Click the **“Workspace Files” pill** (feature name + folder icon) at the top right of the session header, beside the Session log button, to open the popup.
2. Expand directories to browse files; **click a file to preview it**.
3. Click the **⏎ button** at a row's head (or drag the file into the composer, or type `@` + filename) to reference it, then send.
4. Use the **Settings** tab at the top of the popup (or DSH Settings → Workspace Explorer) to adjust panel behavior.

## Project Structure

```
dsh-workspace-explorer/
├── README.md             # Docs — English (default)
├── README.zh.md          # Docs — 中文
├── LICENSE               # MIT
├── CHANGELOG.md          # Release notes
├── manifest.json         # Plugin metadata
├── package.json          # npm package (@elec/dsh-workspace-explorer)
├── demo/
│   ├── index.html        # Interactive mock preview (GitHub Pages)
│   └── preview.gif       # Demo animation (README)
├── .github/
│   └── workflows/
│       └── pages.yml     # Deploy demo/ to GitHub Pages (manual; preview hidden)
├── docs/
│   ├── install.md        # Install guide
│   ├── local-debugging.md# Local dev setup (symlink + dev profile)
│   └── publish.md        # Publishing workflow (GitHub + npm)
├── src/
│   ├── index.ts          # Native host half: webServer JSON routes (/dsh-we/api/*)
│   └── client/
│       ├── index.tsx     # Native client half: popup + tree + preview + drag & drop
│       ├── markdown.ts   # Zero-dep Markdown parser/renderer (XSS-safe)
│       ├── format.ts     # Pure formatting helpers
│       └── popupLayout.ts# Popup geometry math (unit-tested)
├── test/                 # vitest suites (format / host / popupLayout / markdown)
└── lib/                  # Built artifacts (lib/index.js + lib/client.js)
```

## Implementation Notes

| Capability | Mechanism |
|---|---|
| Directory listing | Host `fs` via `resolveRel`-guarded root+rel (`/dsh-we/api/list`), directories first, 400-entry cap |
| File peek | Whole read ≤ 4 MB, paged scan with line-offset cache beyond (`/dsh-we/api/peek`); binary sniffed, ≤ 32 KB inlinable |
| Tree / search index | Depth/budget-limited recursion (`/dsh-we/api/tree`, up to 10 levels / 5000 entries) |
| File write | `/dsh-we/api/write` with size-based external-change detection |
| Host→Client RPC | Same-origin `fetch POST /dsh-we/api/*` (path-confined, no arbitrary-path reads) |
| Popup | `shell.overlay` slot (`useWorkspaces` / `useSessions`), position measured between session header & composer; corner resize with localStorage memory |
| Toggle button | `conversation.session.header.utilities` slot (“Workspace Files” pill: name + icon) |
| Composer write | `conversation.input.dock` → `inputActions.setDraft`, with `conversation.input` service fallback |
| `@` mention | `inputTriggers.registerSource` (fuzzy candidates + lexicon highlight), root auto-discovered from sessions cwd |
| Drag & drop | HTML5 DnD; native caret insert in the textarea, append elsewhere |
| Markdown | Hand-written parser → React elements (no `innerHTML`); source toggle; paged fallback |
| Theming / i18n | `--dsw-alias-*` CSS variables (light/dark); zh/en via the DSH locale service |

## Version

Current version **v0.7.1-fork.3** — **Preview-first interaction** (row click previews, ⏎ shares), **Markdown rendering**, and **single-package cleanup** (dynamic paste variant removed).
See [CHANGELOG.md](./CHANGELOG.md) for release notes.

## Roadmap

Focused on the two lines that actually matter to the product: the **read path** (pointing the model at code) and the **write path** (editing files). Everything else is parked in the backlog below instead of being listed as a peer track.

**Done ✅**

- [x] v0.1 core: right-side file tree, click / drag-to-composer references, native DSH look
- [x] Search & filter across the whole tree; content insertion for small files (≤ 32 KB)
- [x] i18n (zh/en via the DSH locale service, follows the DSH UI language)
- [x] `@` mention source with sessions-cwd auto-discovery + lexicon highlight; unified `@path` reference format
- [x] Demo language toggle, GitHub Pages preview, demo GIF, storefront screenshots
- [x] npm package + `dsh.bundle` contract + awesome-dsh-plugin listing
- [x] Multi-target references: folder drag (compact tree) + multi-select batch insert
- [x] Whole-file preview (≤ 4 MB) with paged fallback for large files
- [x] Preview-first interaction: row click previews, ⏎ button shares, keyboard `@` / `i`
- [x] Markdown rendering (zero-dep, XSS-safe) with source toggle
- [x] In-panel file editing with external-change detection
- [x] Resizable popup with size memory; Preview as a standalone tab

**Parked backlog** (do when real demand shows up)

- Content search across loaded dirs (host-side grep); recent files / favorites
- Full keyboard navigation; copy path / reveal in the OS file manager
- Virtual scrolling (huge dirs); light/dark theme regression checks; Playwright e2e
- CI (lint + e2e + automated release)

## License

[MIT](./LICENSE)
