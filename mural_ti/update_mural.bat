//@echo off
:: --- CONFIGURAÇÃO DE CAMINHO ---
:: Ajuste o caminho abaixo se houver qualquer mudança na pasta local
set REPO_PATH=C:\Users\olive\OneDrive\Documentos\Clientes\Estacio de Sá\Mural\2026\Aplicativo\mural_ti
set REPO_URL=https://github.com/AntonioCandido/mural_ti.git

echo [1/5] Acessando o diretorio...
cd /d "%REPO_PATH%"

:: Validação de diretório
if %errorlevel% neq 0 (
    echo [!] ERRO: Caminho nao encontrado. Verifique a pasta "mural_ti".
    pause
    exit /b
)

:: --- LIMPEZA DE SEGURANÇA ---
echo [!] Limpando processos de rebase ou travas pendentes...
git rebase --abort 2>nul
rd /s /q ".git\rebase-merge" 2>nul

:: --- CONFIGURAÇÃO DE IDENTIDADE ---
:: Garante que o GitHub aceite o envio sem erros de privacidade (GH007)
git config user.email "antonio.filho@estacio.br"
git config user.name "Antonio Candido"
git config core.autocrlf true

echo [2/5] Preparando arquivos...
git add .

echo [3/5] Gravando alteracoes locais (Commit)...
:: O commit é essencial para limpar a fila antes de sincronizar
set msg=Atualizacao Mural de TI - %date% %time%
git commit -m "%msg%"

echo [4/5] Sincronizando com o GitHub...
:: Puxa novidades do servidor priorizando sempre o que está no seu computador
git pull origin main --rebase -X ours --allow-unrelated-histories

echo [5/5] Enviando para o servidor (Deploy Vercel)...
:: O push forçado garante a atualização da página https://mural-ti.vercel.app
git push origin main --force

echo.
echo ===========================================
echo Processo concluido com sucesso!
echo Site atualizado: https://mural-ti.vercel.app
echo ===========================================
pause