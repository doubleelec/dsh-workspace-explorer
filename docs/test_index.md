# Governance Test Index

Human-facing catalog of the architecture governance suite. This index covers the vendored architecture tests only; Vitest feature/unit suites in `test/` are listed in the project README and are outside this index.

## Global governance kit

| Test | Enforces | Fails when |
|:---|:---|:---|
| `test_module_boundaries.py::test_no_orphan_submodules` | direct-child inventory integrity | an eligible child is absent from `module.submodules` |
| `test_module_boundaries.py::test_no_phantom_submodules` | direct-child inventory integrity | a declared child or dependency-rule target is missing |
| `test_module_boundaries.py::test_module_submodules_complete` | exact per-module inventories | declared and actual eligible direct children differ |
| `test_module_boundaries.py::test_governed_files_have_single_deepest_owner` | Python-file ownership | a governed Python file has no unique deepest module owner |
| `test_module_boundaries.py::test_storage_zone_references_respect_ownership` | managed-storage ownership (optional) | a non-owner references a managed zone name |
| `test_module_boundaries.py::test_submodule_boundaries` | dependency classification | an observed Python import conflicts with a declared direct-child dependency rule |
| `test_module_boundaries.py::test_design_flows_schema` | design flow schema | a declared flow has invalid shape or kind |
| `test_module_boundaries.py::test_design_flow_links_resolve` | design flow links | a flow reference or invariant does not resolve |
| `test_module_boundaries.py::test_required_invariant_coverage` | opt-in critical invariant coverage | a critical module requests invariant coverage but has no bound rule |
| `test_interface_contracts.py::test_interface_locks_reference_existing_files` | lock file existence | a lock references a missing file |
| `test_interface_contracts.py::test_interface_locks_reference_existing_functions` | lock symbol existence | a locked function/class does not exist |
| `test_interface_contracts.py::test_interface_lock_reasons_are_stated` | lock rationale | a non-empty lock has no reason |
| `test_interface_contracts.py::test_interface_lock_signatures_match_code` | signature drift | signature parameters/defaults/types differ from the implementation |
| `test_interface_contracts.py::test_invariant_declarations_are_non_empty` | semantic invariant quality | a declared invariant list is empty |
| `test_interface_contracts.py::test_invariant_test_refs_exist` | invariant binding quality | a governance invariant references an absent or hollow test |
| `test_interface_contracts.py::test_public_api_consistency` | facade API declaration | `public_api.exposed` differs from package `__all__` |
| `test_interface_contracts.py::test_exposed_symbols_have_signature_locks` | expose-is-lock | an exposed Python API symbol lacks a signature lock |
| `test_interface_contracts.py::test_cross_module_from_imports_in_exposed` | cross-module import boundaries | a governed Python import bypasses an owner's declared facade |
| `test_architecture_kit_complete.py::test_root_cleanliness` | project-root cleanliness | a Python source file is placed directly at the project root |
| `test_architecture_kit_complete.py::test_governed_modules_completeness` | architecture kit completeness | a module lacks module metadata, public API metadata, or tests directory |
| `test_architecture_kit_complete.py::test_governance_tests_are_indexed` | index freshness | a governance test is missing from this index or an indexed function is absent |

## Maintenance

Update this table in the same change as any governance test addition, rename, or removal. The meta-guard `test_governance_tests_are_indexed` checks both missing and stale test references.
