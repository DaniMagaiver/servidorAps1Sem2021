# Servidor APS - 1 sem. 2021 

## Instalando dependências
Na pasta do projeto executar comando ```npm install```.

## Configurando ambiente
Com o mysql instalado em sua máquina crie uma base de dados através do prompt do mysql.
```
CREATE DATABASE aps
``` 

Insira no arquivo .env o usuário, senha e nome da base de dados utilizada.
```
MYSQL_USERNAME="root"
MYSQL_PASSWORD="admin"
DATABASE="aps"
```

## Rodando o projeto
Para rodar o projeto utilize o comando
```
npm run dev
```