@echo off
chcp 65001 >nul
cd C:\Users\User\webapp
echo ================================
echo   WARNING: Reset to last save?
echo   All changes will be lost!
echo ================================
set /p answer="Continue? (Y/N): "
if /i "%answer%"=="Y" (
    git reset --hard
    echo.
    echo ================================
    echo   Reset Complete!
    echo ================================
) else (
    echo.
    echo ================================
    echo   Cancelled!
    echo ================================
)
pause