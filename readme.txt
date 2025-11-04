0.- Construir los modulos de node
    npm i
1.- Generar el package.json con:
    npm init -y
2.- Utilizando el material adjunto
2.1.- Instalar TypeScript y demás dependencias
    npm i -D typescript @types/node ts-node-dev rimraf
2.2.- Inicializar el archivo de configuración de TypeScript ( Se puede configurar al gusto)
    npx tsc --init --outDir dist/ --rootDir src
2.3.- Crear scripts para dev, build y start (Más sobre TS-Node-dev aquí)
  "dev": "tsnd --respawn --clear src/app.ts",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"
3.- Crear Carpeta src y dentro de esta el archivo app.ts
4.- para correr 
    npm run dev
5.- nstalar el paquete @types/node que contiene las declaraciones de tipos para los módulos nativos de Node.js, incluyendo 'http'.
    npm install --save-dev @types/node
6.- resolver temas con http
7.- Para http2
7.1.- Generar certificados
    openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt
8.- Instalar Express
    npm i express
    npm install -D @types/express
9.- Configurar variables de entorno
9.1.- Definir .env 
9.2.- Hacer las siguientes instalaciones 
    npm i dotenv env-var 
9.3.- Definir carpeta 
    config 
dentro de esta el archivo 
    envs.ts
9.4.- clonar .env a .env.template

----  RestServer ---
https://curso-node-ts-07-restweb-production.up.railway.app/marvel
https://curso-node-ts-07-restweb-production.up.railway.app/api/todos


Git
https://github.com/nicolasrvivas/Curso-Node-TS-07-RESTWeb/tree/main
git status 
git add . 
git push origin main

10.- Ingresar Postgres
10.1.- Actualizar .env
10.2.- Crear el archivo docker-compose.yml
11.- Levantar docker compose
```
    dockr compose up -D
```
12.- Instalar prisma
12.1.- comando
    npm install prisma --save-dev
12.2.- Setup prisma datasource provider postgres
    npx prisma init --datasource-provider postgresql
12.3.- Utilizar en el schema.prisma este databaseUrl -->> POSTGRES_URL
12.4.- Elimina el que se generó al final en el .env
12.5.- Actualizar el archivo prisma.config.
    POSTGRES_URL
12.5.- Generar el modelo de la base de datos en el schema.prisma
```
    model todo {
        id          Init       @id @default(autoincrement())
        text        String     @db.VarChar
        completedAt DateTime?  @db.Timestamp()
    }
```
12.6.- >gregar esta línea en el archivo prisma.config.ts
    import "dotenv/config";
12.7.- Migrar la db
```
    npx prisma migrate dev --name init
```
12.8.- Ejercutar
    npm i -D prisma
    npm i @prisma/client

