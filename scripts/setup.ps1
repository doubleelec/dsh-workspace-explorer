#Requires -Version 5.1
<#
.SYNOPSIS
  Install this repo into the prod web profile (3080) in one elevation.

.DESCRIPTION
  Run in an elevated PowerShell (right-click -> Run as administrator).
  Everything needing elevation happens inside this one session:
    1. npm run build (lib/ is what DSH actually loads).
    2. Install the local repo into the web profile as a decoupled copy.
  The dev profile (3090) is intentionally NOT touched: it is a symlink to
  this repo, so `npm run build` + refresh 3090 is all dev needs — no
  install step, no elevation. See DEV.md for the dev loop.

.EXAMPLE
  powershell -ExecutionPolicy Bypass -File scripts/setup.ps1
.EXAMPLE
  powershell -ExecutionPolicy Bypass -File scripts/setup.ps1 -SkipBuild
#>
[CmdletBinding()]
param(
  [switch]$SkipBuild
)

$ErrorActionPreference = 'Stop'
$Repo = Split-Path -Parent $PSScriptRoot

# 0) Preflight: repo sanity
$pkgJson = Join-Path $Repo 'package.json'
if (-not (Test-Path $pkgJson)) { throw "package.json not found in $Repo — run this script from the repo's scripts/ folder." }

Write-Host "`n== build (lib/ is what DSH loads) ==" -ForegroundColor Cyan
if ($SkipBuild) { Write-Host 'skipped (--SkipBuild).' }
else {
  Push-Location $Repo
  try { npm run build } finally { Pop-Location }
}

Write-Host "`n== web profile (3080): local file: install (decoupled copy) ==" -ForegroundColor Cyan
Push-Location $Repo
try {
  # forward slashes: file: deps must not use backslashes
  $uri = 'file://' + ($Repo -replace '\\', '/')
  dsh plugin --profile web add -w $uri
  dsh plugin --profile web install
} finally { Pop-Location }

Write-Host @'

Done. Refresh http://127.0.0.1:3080 — restart `dsh web` only if the panel is missing.
'@ -ForegroundColor Green
