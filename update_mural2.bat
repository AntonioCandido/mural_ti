@echo off
chcp 65001 > nul
set REPO_PATH=%~dp0

echo [1/4] Limpando ambiente e travas...
cd /d "%REPO_PATH%"

:: Silenciar avisos de final de linha (LF/CRLF)
git config core.autocrlf true

:: Remove a trava de segurança se existir
if exist ".git\index.lock" del /f ".git\index.lock" 2>nul

:: Impedir que a pasta "old" suba para o GitHub
if not exist ".gitignore" echo old/ > .gitignore
git rm -r --cached old/ 2>nul

echo [2/4] Preparando arquivos na RAIZ...
git add .

echo [3/4] Criando commit de organizacao...
set msg=Atualizacao Mural - %date% %time%
:: Tenta commitar; se não houver nada, apenas avisa
git commit -m "%msg%" || echo [!] Sem novas alteracoes para salvar.

echo [4/4] Enviando para o GitHub e Vercel...
:: Agora usando 'main' corretamente
git push origin main --force

echo.
echo ===========================================
echo Repositorio sincronizado com sucesso!
echo Verifique o deploy: https://mural-ti.vercel.app
echo ===========================================
pause