@echo off
:: --- CONFIGURAÇÃO DE CAMINHO ---
set REPO_PATH="C:\Users\olive\OneDrive\Documentos\Clientes\Estacio de Sá\Mural\2026\Aplicativo\mural_ti"
set REPO_URL=https://github.com/AntonioCandido/mural_ti.git

echo [1/5] Acessando o diretorio...
cd /d %REPO_PATH%

:: Limpeza de processos travados (Resolve o erro de rebase-merge)
echo [!] Limpando processos de rebase anteriores...
git rebase --abort 2>nul
rd /s /q ".git\rebase-merge" 2>nul

:: Configurar o Git para ignorar avisos de final de linha (LF/CRLF)
git config core.autocrlf true

:: --- SINCRONIZAÇÃO INICIAL ---
if not exist ".git" (
    echo [!] Inicializando e vinculando ao GitHub...
    git init
    git remote add origin %REPO_URL%
    git fetch
    git checkout -b main
)

echo [2/5] Adicionando arquivos...
git add .

echo [3/5] Criando commit e ajustando identidade...
:: Ajuste o e-mail abaixo para o seu e-mail do GitHub para evitar erro GH007
git config user.email "antonio.filho@estacio.br"
set msg=Atualizacao Mural de TI - %date% %time%
git commit -m "%msg%" 2>nul || git commit --amend --no-edit --reset-author

echo [4/5] Sincronizando com o GitHub...
:: Tenta puxar as alterações remotas aceitando as mudanças locais como prioridade
git pull origin main --rebase -X ours --allow-unrelated-histories

echo [5/5] Enviando para o GitHub (Forçado para resolver rejeição)...
:: O push forçado garante que sua versão local (com Analytics/Speed Insights) suba
git push origin main --force

echo.
echo ===========================================
echo Processo concluido com sucesso!
echo ===========================================
pause