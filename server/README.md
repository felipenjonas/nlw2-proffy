Commands useds:

- Start project
>$>yarn init -y

in the server, i'll use typescript language, for this:

>$>yarn add typescript -D
 
- Create archive of configurations to Typescript:
>$>yarn tsc --init | npx npc --init

- Change "Target":"es5" to "Target": "es2017" - at ./tsconfig.json > { } compilerOptions > target

- Install other lib dependence (This is as nodemeon):
>$> yarn add ts-node-dev -D
> CONFIGURE at package.json -> scripts -> start -> to: "start": "tsnd --transpile-only --ignore-watch node_modules --respawn src/server.ts"

- Install lib express:
>$> yarn add @types/express 

- Install Knex and sqlite3 to create a database:
>$> yarn add knex sqlite3

- Create in ./src a folder named as "database" and a file named "connection.ts".
then configure it

- Create tables (migrations) using knex lib:
    - create file named "knexfile.ts"
    - then configure it.
    - rename Migrations to typescript.
    - Rename command knex migration:latest to typescript language
    >"knex:migrate":"knex --knexfile knexfile.ts migrate:latest"

- Now, create this routes and resources to REST API

PT-BR
# Funcionalidades:

##  conexões

- Rota para listar o total de conexões realizadas;

- Rota para criar uma nova conexão;

## Aulas

- Rota para criar uma aula;
- Rota para listar aulas;
    - Filtar por matéria, dia da semana e horário