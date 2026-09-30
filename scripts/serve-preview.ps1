$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

npm run build

Remove-Item -Recurse -Force build\preview -ErrorAction SilentlyContinue
New-Item -ItemType Directory -Path build\preview\a2oru -Force | Out-Null

Copy-Item build\index.html -Destination build\preview\a2oru\
Copy-Item build\static -Destination build\preview\a2oru\static -Recurse
Copy-Item build\*.png, build\*.jpg, build\*.txt, build\*.xml, build\*.json -Destination build\preview\a2oru\ -ErrorAction SilentlyContinue
Copy-Item build\A2ORU_Video_new.mp4 -Destination build\preview\a2oru\ -ErrorAction SilentlyContinue
Copy-Item serve.preview.json -Destination build\preview\serve.json

Write-Host ""
Write-Host "Open in browser:" -ForegroundColor Green
Write-Host "  http://localhost:3001/a2oru/" -ForegroundColor Cyan
Write-Host ""

npx serve build\preview -l 3001
