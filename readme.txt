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



