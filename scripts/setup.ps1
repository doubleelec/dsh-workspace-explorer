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
# `dsh plugin add` reuses the existing file: copy when the dep already exists
# (output shows `reused 1, added 0`), silently keeping the STALE bundle —
# that was the 2026-09-16 miss: 3090 toggled, 3080 didn't. So delete the
# installed copy first, then add + install (forces `added 1`), then verify
# the new bundle marker is present before declaring success.
$webCopy = Join-Path $env:USERPROFILE '.dsh\profiles\web\node_modules\@doubleelec\dsh-workspace-explorer'
if (Test-Path $webCopy) {
  Write-Host "removing stale copy: $webCopy"
  Remove-Item -Recurse -Force $webCopy
}
Push-Location $Repo
try {
  # forward slashes: file: deps must not use backslashes
  $uri = 'file://' + ($Repo -replace '\\', '/')
  dsh plugin --profile web add -w $uri
  dsh plugin --profile web install
} finally { Pop-Location }
$webBundle = Join-Path $webCopy 'lib\client.js'
if (-not (Test-Path $webBundle)) { throw "install failed: $webBundle missing after install." }
$probe = Select-String -Path $webBundle -Pattern 'dshwe-toggle' -SimpleMatch | Select-Object -First 1
if (-not $probe) {
  throw 'install verification failed: new bundle marker (dshwe-toggle) not found in web copy — 3080 would keep running stale code.'
}
Write-Host "verified: new bundle present in web copy ($($probe.LineNumber))." -ForegroundColor Green

Write-Host @'

Done. Refresh http://127.0.0.1:3080 — restart `dsh web` only if the panel is missing.
'@ -ForegroundColor Green
