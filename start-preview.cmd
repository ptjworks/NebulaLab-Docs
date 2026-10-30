@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>&1
if errorlevel 1 (
  echo Node.js is required. Install Node.js and try again.
  pause
  exit /b 1
)
if not exist "node_modules\vitepress\bin\vitepress.js" (
  echo Dependencies are missing. Run npm ci in this folder first.
  pause
  exit /b 1
)
if not exist "docs\.vitepress\dist\index.html" (
  call npm run docs:build
  if errorlevel 1 (
    pause
    exit /b 1
  )
)
echo Open http://127.0.0.1:4174/ in your browser.
echo Keep this window open while using the local preview.
echo If a preview is already running, use the existing browser address.
node "node_modules\vitepress\bin\vitepress.js" preview docs --host 127.0.0.1 --port 4174 --strictPort
if errorlevel 1 pause
endlocal
