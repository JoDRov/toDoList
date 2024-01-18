import { Command } from 'commander';
import { showTaskList, taskList, contadorId, Task, Tasks, completedOrNot } from './index';
import chalk from 'chalk';
import figlet from 'figlet';

let taskManager: Tasks = new Tasks(taskList);
let localTaskList: Task[] = [];

function resetOptions() {
  process.argv = process.argv.slice(0, 2); // Reset options
}

const program = new Command();
console.log(figlet.textSync("Gestor de tareas!"));

program
  .version("1.0.0")
  .description("Cli para manejar una lista de tareas")
  /*.option("-a, --a <string>", "Añade una tarea a la lista de tareas")
  .option("-mc, --mc <id>", "Marca una tarea como completada")
  .option("-mi, --mi <id>", "Marca una tarea com incompleta")
  .option("-r, --r <id>", "Elimina una tarea de la lista de tareas")
  .option("-stl, --stl", "Muestra la lista de tareas")
  .option("-s, --stop", "Cierra la aplicacion");*/

let appEnd: boolean = false;

program
  .command("add string")
  .action((userString: string) => {
      add(userString)
  })
  .description("Añade una tarea a la lista")

program
  .command("mc id")
  .action((userId: number) => {
      markComplete(userId)
  })
  .description("Marca una tarea como completada")

program
  .command("mi id")
  .action((userId: number) => {
      markIncomplete(userId)
  })
  .description("Marca una tarea como no completada")

program
  .command("rm id")
  .action((userId: number) => {
      remove(userId)
  })
  .description("Elimina una tarea de la lista")

program
  .command("stl")
  .action(() => {
      showList()
  })
  .description("Elimina una tarea de la lista")


function add(userText: string) {
  const newTask: Task = {
    id: contadorId,
    text: userText,
    completed: false
  };

  localTaskList = taskManager.addTask(newTask);
  console.log(chalk.green(`id: ${contadorId - 1} Tarea añadida: ${userText} - ${completedOrNot(newTask)} `));
  console.log(localTaskList);
  return `Tarea añadida: ${userText} - ${completedOrNot(newTask)} `;
}

function markComplete(id: number){
  localTaskList = taskManager.markAsCompleted(id);
  console.log(chalk.blue(`La tarea ${id} ${taskList[id].text} ha sido modificada`));
  console.log(localTaskList);
}

function markIncomplete(id: number) {
  localTaskList = taskManager.markAsIncompleted(id);
  console.log(chalk.yellow(`La tarea ${id} ${localTaskList[id].text} ha sido modificada`));
  console.log(localTaskList);
}

function remove(id: number) {
  localTaskList = taskManager.removeTask(id);
  console.log(chalk.red(`La tarea ${id} ${localTaskList[id].text} ha sido eliminada`));
  console.log(localTaskList);
}

function showList() {
  const result: string = showTaskList(localTaskList);
  console.log(chalk.white(result));
  console.log(localTaskList);
}

const options = program.opts();

/*while (!appEnd) {
  if (options.a) {
    add(options.a);
  }
  if (options.mc) {
    markComplete(options.mc);
  }
  if (options.mi) {
    markIncomplete(options.mi);
  }
  if (options.r) {
    remove(options.r);
  }
  if (options.stl) {
    showList();
  }
  if (options.s) {
    appEnd = true;
  }
}*/

program.parse(process.argv)