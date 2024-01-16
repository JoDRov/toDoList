"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const index_1 = require("./index");
const chalk_1 = __importDefault(require("chalk"));
const figlet_1 = __importDefault(require("figlet"));
const testTask = {
    id: 0,
    text: "blabla",
    completed: false
};
let taskManager = new index_1.Tasks(index_1.taskList);
let localTaskList = [];
const program = new commander_1.Command();
console.log(figlet_1.default.textSync("Gestor de tareas!"));
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
function add(userText) {
    try {
        const newTask = {
            id: index_1.contadorId,
            text: userText,
            completed: false
        };
        localTaskList = taskManager.addTask(newTask);
        console.log(chalk_1.default.green(`id: ${index_1.contadorId} Tarea añadida: ${userText} - ${(0, index_1.completedOrNot)(newTask)} `));
        console.log(localTaskList);
        return `Tarea añadida: ${userText} - ${(0, index_1.completedOrNot)(newTask)} `;
    }
    catch (error) {
        console.error("Error occurred while adding a task!", error);
    }
}
function markComplete(id) {
    localTaskList = taskManager.markAsCompleted(id);
    console.log(chalk_1.default.blue(`La tarea ${id} ${index_1.taskList[id].text} ha sido modificada`));
    console.log(localTaskList);
}
function markIncomplete(id) {
    localTaskList = taskManager.markAsIncompleted(id);
    console.log(chalk_1.default.yellow(`La tarea ${id} ${localTaskList[id].text} ha sido modificada`));
    console.log(localTaskList);
}
function remove(id) {
    localTaskList = taskManager.removeTask(id);
    console.log(chalk_1.default.red(`La tarea ${id} ${localTaskList[id].text} ha sido eliminada`));
    console.log(localTaskList);
}
function showList() {
    const result = (0, index_1.showTaskList)(localTaskList);
    console.log(chalk_1.default.white(result));
    console.log(localTaskList);
}
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
//# sourceMappingURL=cli.js.map