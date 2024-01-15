# scripts

0. npm test

Comprueba que los tests funcionen correctamente

1. npm run build

Compila los archivos .ts en la carpeta /src utilizando tsc y crea los archivos .js en la carpeta /dist

2. node dist/index

Ejecuta el archivo index.js

3. node dist/cli

Ejecuta el cli para manejar la aplicacion de lista de tareas

4. node dist/cli -a "string de tarea"

Añade una tarea a la lista de tareas

5. node dist/cli -mc id-tarea

Marca la tarea con el id enviado como completada

6. node dist/cli -mi id-tarea

Marca la tarea con el id enviado como no completada

7. node dist/cli -r id-tarea

Elimina la tarea con el id enviado

8. node dist/cli -stl

Muestra la lista de tareas
