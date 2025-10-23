@echo off
echo ========================================
echo   PrintCore Website - BePaid Testing
echo ========================================
echo.

cd /d "%~dp0"

echo Checking if .env.local exists...
if not exist ".env.local" (
    echo [ERROR] .env.local file not found!
    echo.
    echo Creating .env.local from example...
    (
        echo NEXT_PUBLIC_API_URL=http://localhost:3001/api
        echo.
        echo # BePaid Payment Gateway ^(Test Mode^)
        echo NEXT_PUBLIC_BEPAID_CHECKOUT_URL=https://checkout.bepaid.by
        echo BEPAID_SHOP_ID=361
        echo BEPAID_SECRET_KEY=b8647b68898b084b836474ed8d61ffe117c9a01168d867f24953b776ddcb134d
    ) > .env.local
    echo [OK] .env.local created with test credentials
    echo.
)

echo Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo [OK] Node.js is installed
echo.

echo Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo [ERROR] Failed to install dependencies
    pause
    exit /b 1
)

echo [OK] Dependencies installed
echo.

echo ========================================
echo   Starting Development Server
echo ========================================
echo.
echo The website will be available at:
echo   http://localhost:3000
echo.
echo Test payment flow:
echo   1. Add items to cart
echo   2. Go to checkout
echo   3. Use test card: 4200000000000000
echo   4. CVV: 123, Date: 12/25
echo   5. 3-D Secure: 12345678
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

call npm run dev

pause

