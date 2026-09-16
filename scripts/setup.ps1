#Requires -Version 5.1
<#
.SYNOPSIS
  One-elevation setup: dev symlink + web local install in a single admin approval.

.DESCRIPTION
  Run once in an elevated PowerShell (right-click -> Run as administrator).
  Everything needing elevation (symlink creation, profile writes) happens
  inside this one session — no repeated UAC prompts afterwards:
    1. Rebuild the dev-profile symlink (node_modules/@doubleelec/dsh-workspace-explorer -> this repo).
    2. npm run build (lib/ is what DSH actually loads).
    3. Install the local repo into the web profile as a decoupled copy.
  Afterwards: edit -> build -> refresh 3090 (dev, instant); tested ->
  re-run this script (or just step 3) -> refresh 3080 (prod).

.EXAMPLE
  powershell -ExecutionPolicy Bypass -File scripts/setup.ps1
#>
[CmdletBinding()]
param(
  [switch]$SkipBuild,
  [switch]$DevOnly,
  [switch]$WebOnly
)

$ErrorActionPreference = 'Stop'
$Repo = Split-Path -Parent $PSScriptRoot
$Pkg = '@doubleelec/dsh-workspace-explorer'
$Profiles = Join-Path $env:USERPROFILE '.dsh\profiles'

function Invoke-Step([string]$Name, [scriptblock]$Body) {
  Write-Host "`n== $Name ==" -ForegroundColor Cyan
  & $Body
}

# 0) Preflight: repo sanity + elevation check
$pkgJson = Join-Path $Repo 'package.json'
if (-not (Test-Path $pkgJson)) { throw "package.json not found in $Repo — run this script from the repo's scripts/ folder." }
$isAdmin = ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
if (-not $isAdmin) {
  Write-Warning 'Not running as administrator. Symlink creation may fail; approve the UAC prompt if asked.'
}

if (-not $DevOnly) {
  Invoke-Step 'build (lib/ is what DSH loads)' {
    if ($SkipBuild) { Write-Host 'skipped (--SkipBuild).' }
    else {
      Push-Location $Repo
      try { npm run build } finally { Pop-Location }
    }
  }
}

if (-not $WebOnly) {
  Invoke-Step 'dev profile (3090): symlink -> repo' {
    $link = Join-Path $Profiles "dev\node_modules\@doubleelec\dsh-workspace-explorer"
    $target = $Repo
    $cur = $null
    try { $cur = (Get-Item $link -Force -ErrorAction Stop).Target } catch { $cur = $null }
    if ($cur -eq $target -or $cur -eq @($target)) {
      Write-Host "symlink already correct: $link -> $target"
    } else {
      if (Test-Path $link) {
        # Only remove the link/copy itself, never the source tree.
        $it = Get-Item $link -Force
        if ($it.LinkType -eq 'SymbolicLink' -or $it.LinkType -eq 'Junction') { Remove-Item $link -Force }
        else { Remove-Item -Recurse -Force $link }
      }
      $parent = Split-Path -Parent $link
      if (-not (Test-Path $parent)) { New-Item -ItemType Directory -Path $parent | Out-Null }
      cmd /c mklink /D "$link" "$target"
    }
  }
}

if (-not $DevOnly) {
  Invoke-Step 'web profile (3080): local file: install (decoupled copy)' {
    Push-Location $Repo
    try {
      # forward slashes: file: deps must not use backslashes
      $uri = 'file://' + ($Repo -replace '\\', '/')
      dsh plugin --profile web add -w $uri
      dsh plugin --profile web install
    } finally { Pop-Location }
  }
}

Write-Host @'

Done. Verify:
  dev  (3090): refresh http://127.0.0.1:3090 — source changes appear after `npm run build`
  prod (3080): refresh http://127.0.0.1:3080 — restart `dsh web` only if the panel is missing
'@ -ForegroundColor Green
