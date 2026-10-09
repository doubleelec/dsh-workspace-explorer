# Architecture Kit Test Setup

The Architecture Kit requires a `tests/<module>/` directory for every governed module. This project uses Vitest for feature tests under `test/`; governance tests are isolated in `tests/governance/` and run with `python -m pytest tests/governance`.

The generic completeness check currently treats every registered module as owning a `tests/<module>/` directory. These directories are lightweight markers unless module-specific governance tests are needed; do not move or duplicate Vitest suites here just to satisfy the kit.
