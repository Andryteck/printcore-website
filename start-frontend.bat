@echo off
cd /d "%~dp0"
cls
echo ========================================
echo   PrintCore Website (Frontend)
echo ========================================
echo.
echo Starting Next.js development server...
echo.
echo Website will open at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.
npm run dev
pause
