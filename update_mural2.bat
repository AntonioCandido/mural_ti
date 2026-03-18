@echo off
chcp 65001 > nul
set REPO_PATH=%~dp0

echo [1/4] Limpando ambiente...
cd /d "%REPO_PATH%"
if exist ".git\index.lock" del /f ".git\index.lock" 2>nul

echo [2/4] Preparando arquivos na RAIZ...
git add .

echo [3/4] Criando commit de organizacao...
set msg=Organizacao de pastas e Deploy - %date% %time%
git commit -m "%msg%"

echo [4/4] Enviando para o GitHub e Vercel...
:: O push forcado limpa a bagunça antiga do GitHub de uma vez por todas
git push origin main --force

echo.
echo ===========================================
echo Repositorio organizado e enviado!
echo Verifique o deploy: https://mural-ti.vercel.app
echo ===========================================
pause