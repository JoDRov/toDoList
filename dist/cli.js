"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const index_1 = require("./index");
const chalk_1 = __importDefault(require("chalk"));
const figlet_1 = __importDefault(require("figlet"));
let taskManager = new index_1.Tasks(index_1.taskList);
let localTaskList = [];
function resetOptions() {
    process.argv = process.argv.slice(0, 2); // Reset options
}
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
    .option("-s, --stop", "Cierra la aplicacion");
let appEnd = false;
program
    .command("add string")
    .action((userString) => {
    add(userString);
})
    .description("Añade una tarea a la lista");
program
    .command("mc id")
    .action((userId) => {
    markComplete(userId);
})
    .description("Marca una tarea como completada");
program
    .command("mi id")
    .action((userId) => {
    markIncomplete(userId);
})
    .description("Marca una tarea como no completada");
program
    .command("rm id")
    .action((userId) => {
    remove(userId);
})
    .description("Elimina una tarea de la lista");
program
    .command("stl")
    .action(() => {
    showList();
})
    .description("Elimina una tarea de la lista");
function add(userText) {
    const newTask = {
        id: index_1.contadorId,
        text: userText,
        completed: false
    };
    localTaskList = taskManager.addTask(newTask);
    console.log(chalk_1.default.green(`id: ${index_1.contadorId - 1} Tarea añadida: ${userText} - ${(0, index_1.completedOrNot)(newTask)} `));
    console.log(localTaskList);
    return `Tarea añadida: ${userText} - ${(0, index_1.completedOrNot)(newTask)} `;
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
const options = program.opts();
//while (!appEnd) {
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
//}
program.parse(process.argv);
//# sourceMappingURL=cli.js.map