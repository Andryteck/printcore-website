Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  PrintCore Backend Server" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Starting NestJS server..." -ForegroundColor Green
Write-Host ""
Write-Host "Server: http://localhost:3001" -ForegroundColor White
Write-Host "Swagger: http://localhost:3001/api/docs" -ForegroundColor White
Write-Host ""
Write-Host "Press Ctrl+C to stop" -ForegroundColor Gray
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Set-Location -Path "$PSScriptRoot\printcore-backend"
npm run start:dev





