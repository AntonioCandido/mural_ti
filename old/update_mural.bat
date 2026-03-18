@echo off
:: --- CONFIGURAÇÃO DE CAMINHO ---
set REPO_PATH=C:\Users\olive\OneDrive\Documentos\Clientes\Estacio de Sá\Mural\2026\Aplicativo\mural_ti
set REPO_URL=https://github.com/AntonioCandido/mural_ti.git

echo [1/5] Acessando o diretorio...
cd /d "%REPO_PATH%"

:: Limpeza de travas do Git
git rebase --abort 2>nul
rd /s /q ".git\rebase-merge" 2>nul

:: Configuração de Identidade
git config user.email "antonio.filho@estacio.br"
git config user.name "Antonio Candido"
git config core.autocrlf true

echo [2/5] Preparando e Gravando alteracoes...
git add .
set msg=Atualizacao Mural de TI - %date% %time%
:: O commit limpa a fila para o pull nao falhar
git commit -m "%msg%"

echo [3/5] Sincronizando com o GitHub...
:: O "git fetch" seguido do rebase limpo evita o erro de 'unstaged changes'
git fetch origin
git pull origin main --rebase -X ours

echo [4/5] Enviando para o servidor (Deploy Vercel)...
git push origin main --force

echo.
echo ===========================================
echo Processo concluido com sucesso!
echo Site: https://mural-ti.vercel.app
echo ===========================================
pause