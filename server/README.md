Commands useds:

- Start project
>$>yarn init -y

in the server, i'll use typescript language, for this:

>$>yarn add typescript -D
 
- Create archive of configurations to Typescript:
>$>yarn tsc --init | npx npc --init

- Change "Target":"es5" to "Target": "es2017" - at ./tsconfig.json > { } compilerOptions > target
