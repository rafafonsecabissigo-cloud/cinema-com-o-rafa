@echo off
echo ------------------------------------------
echo 🍿 Cinema com o Rafa - Subindo para o Ar!
echo ------------------------------------------
echo.
echo ⏳ Preparando arquivos...
git add .
echo ✅ Arquivos preparados!
echo.
echo ⏳ Criando o pacote de atualizacao...
git commit -m "update via subir.bat"
echo ✅ Pacote criado!
echo.
echo ⏳ Enviando para o GitHub e Vercel...
git push
echo.
echo ------------------------------------------
echo 🎉 TUDO PRONTO! Seu site esta sendo atualizado.
echo ------------------------------------------
pause
