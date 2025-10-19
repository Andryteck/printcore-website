Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  PrintCore Frontend (Next.js)" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Starting Next.js server..." -ForegroundColor Green
Write-Host ""
Write-Host "Website: http://localhost:3000" -ForegroundColor White
Write-Host ""
Write-Host "Press Ctrl+C to stop" -ForegroundColor Gray
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Set-Location -Path "$PSScriptRoot\printcore_website"
npm run dev





