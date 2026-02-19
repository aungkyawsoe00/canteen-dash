@echo off
echo Starting CanteenDash Web Server...
echo.
echo Opening http://localhost:8000 in your browser...
timeout /t 1 /nobreak
start http://localhost:8000

REM Try with Python 3
python -m http.server 8000
if %errorlevel% neq 0 (
    REM Try with Python 2
    python -m SimpleHTTPServer 8000
)
