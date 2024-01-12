# TDL

# Creamos nuestro repositorio de Git

1. git init //

2. git add README.md

3. git commit -m "first commit"

4. git branch -M main

5. git remote add origin https://github.com/JoDRov/TDL.git

6. git push -u origin main

# Instalamos Typescript

1. npm init -y // Crea un fichero package.json

2. npm install -g typescript // Esta opcion es para instalar typescript globalmente

3. npm install typescript --save-dev // Para instalar typescript localmente, se guarda como una dependencia de desarrollo en el archivo package.json

4. npx tsc --init // Crea un fichero tsconfig.json con la configuracion default

5. npx tsc

# Configuración tsconfig.json

- Hay que descomentar y modificar las siguientes opciones

1. "rootDir": "./src",

2. "allowJs": true,

3. "sourceMap": true,

4. "outDir": "./dist",

5. "removeComments": true,

6. "noEmitOnError": true,

# Instalación de Jest

1. npm install --save-dev jest ts-jest @types/jest @types/node ts-node

2. Crear archivo jest.config.js en la raiz del proyecto

3. Añadir las siguientes lineas en jest.config.js

module.exports = {
preset: 'ts-jest',
testEnvironment: 'node',
}

4. Añadir las siguientes lineas en el archivo package.json

"scripts": {
"test": "jest",
"test:watch": "jest --watch"
},

# Añadiendo CLI al proyecto

En la carpeta raiz del proyecto creamos el siguiente directorio:
mkdir cli-tool
cd cli-tool
npm init -y
añadir "type": "module", debajo de "main"

# Comandos de testeo

npm test // Inicia una comprobacion de los tests
npm test:watch

dentro de la carpeta react-app
npm run dev // activa el localhost
