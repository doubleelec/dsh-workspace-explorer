"""
Architecture Kit Completeness Test — Verify that governed modules
have their full governance kit:
1. module.toml (with [module] section)
2. tests/<module>/ directory for unit tests
3. docs/test_index.md — the human-facing test-suite index
"""

__TEMPLATE_VERSION__ = "1.0.0"
# Template changelog:
# - 1.0.0 (2026-09-28): initial version stamp; no behavior change.

import ast
import re
import tomllib
from pathlib import Path
import pytest

def _find_project_root() -> Path:
    cur = Path(__file__).resolve().parent
    while cur != cur.parent:
        if (cur / "architecture.toml").exists():
            return cur
        cur = cur.parent
    cwd = Path.cwd().resolve()
    cur = cwd
    while cur != cur.parent:
        if (cur / "architecture.toml").exists():
            return cur
        cur = cur.parent
    return cwd

PROJECT_ROOT = _find_project_root()
ARCHITECTURE_FILE = PROJECT_ROOT / "architecture.toml"

if not ARCHITECTURE_FILE.exists():
    pytestmark = pytest.mark.skip(
        reason=f"architecture.toml not found in {PROJECT_ROOT}; skipping architecture governance tests."
    )
    _ARCH = {}
else:
    with open(ARCHITECTURE_FILE, "rb") as f:
        _ARCH = tomllib.load(f)

def discover_all_modules(base_dir: Path, submodules_list: list[str]) -> set[str]:
    """Recursively discover all module directories that have a module.toml."""
    discovered = set()
    for sub in submodules_list:
        sub_path = base_dir / sub
        if sub_path.is_dir():
            mod_toml = sub_path / "module.toml"
            if mod_toml.exists():
                rel_path = sub_path.relative_to(PROJECT_ROOT).as_posix()
                discovered.add(rel_path)
                with open(mod_toml, "rb") as f:
                    try:
                        cfg = tomllib.load(f)
                        inner_subs = cfg.get("module", {}).get("submodules", [])
                        discovered.update(discover_all_modules(sub_path, inner_subs))
                    except Exception:
                        pass
    return discovered


# All modules discovered recursively
ALL_MODULES = discover_all_modules(PROJECT_ROOT, _ARCH.get("submodules", []))
for key in _ARCH.get("module", {}).keys():
    ALL_MODULES.add(key)


def test_root_cleanliness():
    """Verify that the project root does not contain ANY .py files.
    Infrastructure should use non-py formats (toml, txt, yaml, etc.) or reside in modules.
    """
    errors = []
    for item in PROJECT_ROOT.iterdir():
        if item.is_file() and item.suffix == ".py":
            errors.append(f"Source file detected at project root: {item.name}")

    if errors:
        pytest.fail(
            "🔴 Root-cleanliness check failed (absolute constraint). No .py files are allowed at the project root.\n"
            "Move feature code into modules, test configuration into tests/, or build configuration into pyproject.toml:\n"
            + "\n".join(errors)
        )


def test_governed_modules_completeness():
    """Verify that all modules registered recursively
    have the complete governance kit and standard fields:
    - module.toml with mandatory [module] and [public_api] sections
    - tests/<module>/ directory
    """
    errors = []

    for mod in sorted(ALL_MODULES):
        mod_dir = PROJECT_ROOT / mod
        if not mod_dir.exists():
            errors.append(f"Module directory does not exist: {mod}/")
            continue

        # 1. Check module.toml and its sections
        module_toml_path = mod_dir / "module.toml"
        if not module_toml_path.exists():
            errors.append(f"[{mod}] module.toml is missing")
        else:
            with open(module_toml_path, "rb") as f:
                try:
                    cfg = tomllib.load(f)
                except Exception as e:
                    errors.append(f"[{mod}] failed to parse module.toml: {e}")
                    continue

                # Check [module] section
                if "module" not in cfg:
                    errors.append(f"[{mod}] module.toml is missing the [module] metadata section")
                else:
                    m = cfg["module"]
                    for field in ("name", "description", "submodules"):
                        if field not in m:
                            errors.append(f"[{mod}] module.toml [module] is missing field '{field}'")
                    # Key presence alone let empty descriptions pass as
                    # complete. A description must be a non-empty one-glance
                    # statement (SKILL.md "Module Metadata Standards").
                    desc_text = str(m.get("description", "") or "").strip()
                    if not desc_text:
                        errors.append(
                            f"[{mod}] module.toml [module].description is empty; "
                            "state what the module is for in one glance"
                        )

                # Check [public_api] section
                if "public_api" not in cfg:
                    errors.append(f"[{mod}] module.toml is missing the [public_api] interface section")
                else:
                    api = cfg["public_api"]
                    if "exposed" not in api:
                        errors.append(f"[{mod}] module.toml [public_api] is missing field 'exposed'")

        # 2. Check tests/<module>/
        test_dir = PROJECT_ROOT / "tests" / mod
        if not test_dir.exists() or not test_dir.is_dir():
            errors.append(f"[{mod}] missing unit-test directory tests/{mod}/")

    if errors:
        pytest.fail(
            "🔴 The Architecture Kit is incomplete. Every module's module.toml "
            "must contain a complete [module] section (non-empty one-glance description included), "
            "a [public_api] section, and a tests/<module>/ directory:\n"
            + "\n".join(errors)
        )


# ── Test-suite index completeness (meta-guard) ────────────────────────

_SKILL_CORE_DIR = Path(__file__).resolve().parent
_TEST_INDEX_PATH = PROJECT_ROOT / "docs" / "test_index.md"
# Index references carry an extension: pytest tests (`test_x.py::test_func`)
# and named checks in non-pytest governance scripts (`test-governance.ps1::Assert-X`).
_INDEX_REF_RE = re.compile(r"([A-Za-z0-9_]+\.(?:py|ps1))::([A-Za-z0-9_\-]+)")


def _iter_test_functions(path: Path, file_label: str):
    """Yield (file_label, function_name) for every test function in path."""
    tree = ast.parse(path.read_text(encoding="utf-8"), filename=str(path))
    for node in ast.walk(tree):
        if isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef)) and node.name.startswith("test_"):
            yield file_label, node.name


def _collect_governance_suite():
    """Collect (file_basename, function_name) for every governance test.

    Scope: every ``test_*.py`` beside this file in the skill core (the global
    kit travels together, so new kit files are covered automatically), every
    module-local ``tests/**/test_invariants.py`` under the project root, and —
    when a PowerShell governance script is present — every named check
    (``function Assert-*`` / ``Test-*``) declared inside it.
    """
    collected = []
    for path in sorted(_SKILL_CORE_DIR.glob("test_*.py")):
        collected.extend(_iter_test_functions(path, path.name))
    tests_root = PROJECT_ROOT / "tests"
    if tests_root.is_dir():
        for path in sorted(tests_root.rglob("test_invariants.py")):
            collected.extend(_iter_test_functions(path, path.name))
    ps_script = PROJECT_ROOT / "tests" / "test-governance.ps1"
    if ps_script.is_file():
        script_text = ps_script.read_text(encoding="utf-8", errors="replace")
        for m in re.finditer(r"(?im)^\s*function\s+((?:Assert|Test)-[A-Za-z0-9]+)", script_text):
            collected.append((ps_script.name, m.group(1)))
    return collected


def test_governance_tests_are_indexed():
    """Meta-guard: docs/test_index.md must catalog the whole governance suite.

    Two failure directions keep the index live:
    1. every governance test has an index row ``file.py::function`` — a test
       without a row is undocumented and invisible to human coverage audits;
    2. every ``file.py::function`` reference in the index resolves to a real
       collected test — rows must never outlive the test they describe.
    """
    if not _TEST_INDEX_PATH.exists():
        pytest.fail(
            "🔴 Test-suite index is missing: docs/test_index.md\n"
            "Seed it from arch templates/test_index.md and keep one row "
            "per governance test."
        )

    index_text = _TEST_INDEX_PATH.read_text(encoding="utf-8")
    errors = []

    suite = sorted(set(_collect_governance_suite()))
    unindexed = [
        f"{fname}::{tname}"
        for fname, tname in suite
        if f"{fname}::{tname}" not in index_text
    ]
    if unindexed:
        errors.append(
            "Governance tests missing from the index:\n  " + "\n  ".join(unindexed)
        )

    known = set(suite)
    for match in _INDEX_REF_RE.finditer(index_text):
        fname, tname = match.group(1), match.group(2)
        if (fname, tname) not in known:
            errors.append(f"Index row points to an unknown test: {fname}::{tname}")

    if errors:
        pytest.fail(
            "🔴 Test-suite index (docs/test_index.md) is out of sync with the "
            "governance suite. Add a row per new/renamed test; remove rows whose "
            "test is gone:\n" + "\n".join(errors)
        )
