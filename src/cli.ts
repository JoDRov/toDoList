import {Command} from 'commander';
import {contadorId, prueba, showTaskList, taskList , Task, Tasks, completedOrNot} from './index';
import chalk from 'chalk';
import figlet from 'figlet';

console.log(figlet.textSync("El puto AMO The best Jose!"));
const command = new Command();

command
.version('1.0.0')
.description('Gestor de Tareas');

command
.command ('add <text>')
.description ('Añadir una nueva tarea')
.action ((text: string) => {
  const newTask: Task = { id: contadorId, text, completed: false };
  prueba.addTask(newTask);
  console.log(chalk.green(`Tarea añadida: ${text} - ${completedOrNot(newTask)} `));
  //showTaskList(taskList);
})

command
.command ('mark-completed <id>')
.description ("Marca una tarea como completada")
.action ((id: number) => {
  prueba.markAsCompleted(id)
  console.log(chalk.blue(`La tarea ${id} ${taskList[id].text} ha sido modificada`))
})

command
.command ('mark-incomplete <id>')
.description ("Marca una tarea como no completada")
.action ((id: number) => {
  prueba.markAsInompleted(id)
  console.log(chalk.yellow(`La tarea ${id} ${taskList[id].text} ha sido modificada`))
})

command
.command ('remove <id>')
.description ('Eliminar una tarea')
.action ((id: number) => {
  prueba.removeTask(id)
  console.log(chalk.red(`La tarea ${id} ${taskList[id].text} ha sido eliminada`));
})

command 
.command ('showTaskList')
.description ('Muestra la lista de tareas')
.action ((taskList: Task[]) => {
  const result: string[] = showTaskList(taskList);
  console.log(chalk.white(result));
})