@echo off
chcp 65001 >nul
cd C:\Users\User\webapp
git add .
git commit -m "update"
git push
echo.
echo ================================
echo   Upload Complete!
echo ================================
pause