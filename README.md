# Servidor APS - 1 sem. 2021 

## Instalando dependências
Na pasta do projeto executar comando ```npm install```.

## Configurando ambiente
Com o mysql instalado em sua máquina crie uma base de dados através do prompt do mysql.
```
CREATE DATABASE aps
``` 

Insira no arquivo .env o usuário, senha, nome da base e porta a ser utilizada.
```
TYPEORM_USERNAME="root"
TYPEORM_PASSWORD="admin"
TYPEORM_HOST="127.0.0.1"
TYPEORM_PORT="3306"
TYPEORM_DATABASE="aps"
```

### Verificando porta no Mysql
Abra o prompt do mysql e digite o comando:
```
mysql> SHOW GLOBAL VARIABLES LIKE 'PORT';
```

## Rodando o projeto
Para rodar o projeto utilize o comando
```
npm run dev
```