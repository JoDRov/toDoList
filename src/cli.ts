import {Command} from 'commander';
import {showTaskList, taskList , contadorId, Task, Tasks, completedOrNot} from './index';
import chalk from 'chalk';
import figlet from 'figlet';

let localTaskList: Task[] = [];

let testTask: Task = {
  id: 0,
  text: "Hello",
  completed: false
}
let prueba: Tasks = new Tasks(testTask);
prueba.removeTask(0);

const program = new Command();
console.log(figlet.textSync("Gestor de tareas!"));

program
  .version("1.0.0")
  .description("Cli para manejar una lista de tareas")
  .option("-a, --a <string>", "Añade una tarea a la lista de tareas")
  .option("-mc, --mc <id>", "Marca una tarea como completada")
  .option("-mi, --mi <id>", "Marca una tarea com incompleta")
  .option("-r, --r <id>", "Elimina una tarea de la lista de tareas")
  .option("-stl, --stl", "Muestra la lista de tareas")
  .parse(process.argv);

const options = program.opts();

function add(text: string) {
  try {
    const newTask: Task = {
      id: 1,
      text: text, 
      completed: false 
    };

    localTaskList = prueba.addTask(newTask);
    console.log(chalk.green(`id: ${contadorId} Tarea añadida: ${text} - ${completedOrNot(newTask)} `));

    return `Tarea añadida: ${text} - ${completedOrNot(newTask)} `

  } catch (error) {
    console.error("Error occurred while adding a task!", error);
  }
}

function markComplete(id: number){
  localTaskList = prueba.markAsCompleted(id)
  console.log(chalk.blue(`La tarea ${id} ${taskList[id].text} ha sido modificada`))
}

function markIncomplete(id: number){
  localTaskList = prueba.markAsIncompleted(id)
  console.log(chalk.yellow(`La tarea ${id} ${taskList[id].text} ha sido modificada`))
}


function remove(id: number){
  localTaskList = prueba.removeTask(id)
  console.log(chalk.red(`La tarea ${id} ${taskList[id].text} ha sido eliminada`));
}

function showList() {
  const result: string[] = showTaskList(localTaskList);
  console.log(chalk.white(result));
  console.log(taskList)
}

if (options.a){
  add(options.a);
}
if (options.mc){
  markComplete(options.mc);
}
if (options.mi){
  markIncomplete(options.mi);
}
if (options.r){
  remove(options.r);
}
if (options.stl){
  showList();
}

/*program
.command ('add <text>')
.description ('Añadir una nueva tarea')
.action ((text: string) => {
  const newTask: Task = { id: contadorId, text, completed: false };
  prueba.addTask(newTask);
  console.log(chalk.green(`Tarea añadida: ${text} - ${completedOrNot(newTask)} `));
  //showTaskList(taskList);
})

program
.command ('mark-completed <id>')
.description ("Marca una tarea como completada")
.action ((id: number) => {
  prueba.markAsCompleted(id)
  console.log(chalk.blue(`La tarea ${id} ${taskList[id].text} ha sido modificada`))
})

program
.command ('mark-incomplete <id>')
.description ("Marca una tarea como no completada")
.action ((id: number) => {
  prueba.markAsInompleted(id)
  console.log(chalk.yellow(`La tarea ${id} ${taskList[id].text} ha sido modificada`))
})

program
.command ('remove <id>')
.description ('Eliminar una tarea')
.action ((id: number) => {
  prueba.removeTask(id)
  console.log(chalk.red(`La tarea ${id} ${taskList[id].text} ha sido eliminada`));
})

program 
.command ('show-task-list')
.description ('Muestra la lista de tareas')
.action ((taskList: Task[]) => {
  const result: string[] = showTaskList(taskList);
  console.log(chalk.white(result));
})*/