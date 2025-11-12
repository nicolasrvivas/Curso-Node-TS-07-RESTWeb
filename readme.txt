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
13.- Modulo 16 Rest Clean Architecture
13.0.- Crear entidad
13.1.- en domain se crean las reglas 
13.2.- en domain crear la carpeta entities dentro de esta todo.entity.ts
13.3.- en domain crear la carpeta datasources se crean los origenes de datos
13.4.- en domain crear la carpeta repositories métodos para poder llegar a datasources
14.- Implementaciones
14.1.- en src se genera la carpeta infratructure dentro de esta datasorce y en esta última el archivo todo.datasource.impl.ts
15.- Casos de Uso
15.1.- En domain, crear la carpeta use-cases dentro de esta todo
15.2.- dento de todo crear los casos de Uso
    create-todo.ts
    delete-todo.ts
    get-todo.ts
    get-todos.ts
    update-todo.ts
16.- Rest Testing
16.1.- Instalaciones de desarrollo (super test es útil para probar Express)
    npm install -D jest @types/jest ts-jest supertest
16.2.- Crear archivo de configuración de Jest
    npx jest --init
16.3.- En el archivo jest.config.js configurar
    preset: 'ts-jest',
    testEnvironment: "jest-environment-node",
16.4.- Opcional - The paths to modules that run some code to configure or set up the testing environment before each test
    setupFiles: [
        "<rootDir>/setupTests.ts>"
    ],
16.5.- Crear scripts en el package.json
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
17.- Crear carpeta test, dentro de esta el archivo app.test.ts
18.- Instalar dotenv-client
    prisma:migrate:test
18.1.- configurar en pakage.json 
    "prisma:migrate:test": "dotenv -e .env.test -- npx prisma migrate deploy",
    "test": "npm run prisma:migrate:test && jest",
    "test:watch": "npm run prisma:migrate:test && jest --watch",
    "test:coverage": "npm run prisma:migrate:test && jest --coverage",




