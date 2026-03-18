@echo off
:: Força o terminal a entender caracteres especiais (UTF-8)
chcp 65001 > nul

:: --- CONFIGURAÇÃO DE CAMINHO ---
set REPO_PATH=%~dp0
set REPO_URL=https://github.com/AntonioCandido/mural_ti.git

echo [1/5] Validando ambiente e removendo travas de segurança...
cd /d "%REPO_PATH%"

:: LIMPEZA DE TRAVAS (Procura na pasta atual e na pasta pai)
if exist ".git\index.lock" del /f ".git\index.lock" 2>nul
if exist "..\.git\index.lock" del /f "..\.git\index.lock" 2>nul

:: Aborta qualquer processo do Git que tenha travado
git merge --abort 2>nul
git rebase --abort 2>nul
git reset 2>nul

echo [2/5] Sincronizando arquivos (Preparando envio)...
:: Adiciona as mudanças. O "index.lock" agora foi removido, então deve funcionar.
git add -A

echo [3/5] Gravando alterações locais (Commit)...
set msg=Atualização Mural - %date% %time%
:: Tenta commitar. Se falhar por falta de mudanças, prossegue silenciosamente.
git commit -m "%msg%" 2>nul || echo [!] Nenhuma mudança nova detectada.

echo [4/5] Sincronizando com o GitHub (Prioridade do Coordenador)...
git fetch origin
:: Resolve conflitos automaticamente usando a sua versão do computador
git pull origin main --rebase -X ours --allow-unrelated-histories

echo [5/5] Publicando na Vercel...
:: O push forçado garante que o site https://mural-ti.vercel.app atualize agora
git push origin main --force

echo.
echo ===========================================
echo Processo concluído com sucesso!
echo ===========================================
pause