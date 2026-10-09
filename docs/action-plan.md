# Action Plan — dsh-workspace-explorer

> Resume point: Wave 3 - in flight: none - blocked: none

## Delivery principles

- Keep `architecture.toml` and module manifests as the structural source of truth.
- Change architecture descriptions and inventories in the same delivery that changes module boundaries.
- Preserve generated bundle reproducibility; source/build edits require a build and typecheck.
- Status represents verified delivery state, not intention.

## Waves

| Wave | Scope | Depends on | Status | Exit evidence |
|---|---|---|---|---|
| 0 | Retrofit architecture inventory, module manifests, governance tests and docs | - | completed | `arch_engine.py check` ALL CLEAR, governance pytest, Vitest, typecheck, build |
| 1 | Maintain host filesystem and route behavior | 0 | completed | host Vitest 33/33 incl. backslash-traversal regression, full 78 Vitest, typecheck, build, governance 15 passed/6 skipped, arch check ALL CLEAR |
| 2 | Maintain browser explorer, preview, and interaction behavior | 0 | completed | client 45/45 + full 81 Vitest, typecheck, build with bundle purity intact, governance 15 passed/6 skipped, arch check ALL CLEAR |
| 3 | Optional real DSH end-to-end and release automation improvements | 1, 2 | parked | E2E requires a live DSH runtime (profile + slot injection) beyond repo self-containment; accepted verification is build + typecheck + Vitest + governance, with DSH integration verified manually in dev profile |

## Progress and gates

| Layer | Scope | Gate | When it runs |
|---|---|---|---|
| Unit | One ticket | `npm test` | For every code ticket; mandatory before merge/release |
| Integration | One spec | No dedicated DSH harness currently; run `npm run build`, `npm run typecheck`, plus relevant unit suites | At spec completion where host/client contracts changed |
| System | Two or more specs / whole effort | Architecture check plus full project test/build/typecheck; browser E2E not yet implemented | Before release or cross-spec delivery |
| Architecture | Repository structure and contracts | `python <arch-skill>/core/arch_engine.py check` and `python -m pytest tests/governance` | For module-boundary or architecture edits; recommended for every change |

## Current retrofit checklist

- [x] Capture root and source inventory; exclude generated dependency tree.
- [x] Register top-level modules and nested module inventories.
- [x] Vendor architecture governance suite.
- [x] Write architecture description and module documentation map.
- [x] Add governance test index.
- [x] Document adapter limitation: engine inventory counts `.ps1`, vendored Python governance inventory does not; `scripts/` stays outside the governed tree by design.
- [x] Resolve `arch_engine.py check` drift warning by normalizing vendored tests to LF and pinning them with `.gitattributes`.
- [x] Pass governance pytest suite (15 passed, 6 skipped) with generated lib excluded.
- [x] Pass project tests (76 Vitest tests).
- [x] Pass typecheck.
- [x] Pass host/client build; confirmed `lib/` is cleaned and generated declarations emitted.
- [x] Update resume point to Wave 1 only after all Architecture Kit health gates are reconciled.

## Serial constraints

- Wave 0 gates precede module-specific work in Waves 1 and 2.
- Host path-safety changes must be validated with `test/host.test.ts` and reviewed as a filesystem trust-boundary change.
- Client runtime integration work in Wave 2 must preserve bundle purity and be validated with typecheck/build.
- Wave 3 remains parked: E2E needs a live DSH runtime and Playwright orchestration outside this repo's self-contained gates; release automation (`publish.yml`: test + typecheck + version check + build + OIDC publish) has no open gap.
