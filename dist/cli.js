"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const index_1 = require("./index");
const chalk_1 = __importDefault(require("chalk"));
const figlet_1 = __importDefault(require("figlet"));
console.log(figlet_1.default.textSync("El puto AMO The best Jose!"));
const command = new commander_1.Command();
command
    .version('1.0.0')
    .description('Gestor de Tareas');
command
    .command('add <text>')
    .description('Añadir una nueva tarea')
    .action((text) => {
    const newTask = { id: index_1.contadorId, text, completed: false };
    index_1.prueba.addTask(newTask);
    console.log(chalk_1.default.green(`Tarea añadida: ${text} - ${(0, index_1.completedOrNot)(newTask)} `));
    //showTaskList(taskList);
});
command
    .command('mark-completed <id>')
    .description("Marca una tarea como completada")
    .action((id) => {
    index_1.prueba.markAsCompleted(id);
    console.log(chalk_1.default.blue(`La tarea ${id} ${index_1.taskList[id].text} ha sido modificada`));
});
command
    .command('mark-incomplete <id>')
    .description("Marca una tarea como no completada")
    .action((id) => {
    index_1.prueba.markAsInompleted(id);
    console.log(chalk_1.default.yellow(`La tarea ${id} ${index_1.taskList[id].text} ha sido modificada`));
});
command
    .command('remove <id>')
    .description('Eliminar una tarea')
    .action((id) => {
    index_1.prueba.removeTask(id);
    console.log(chalk_1.default.red(`La tarea ${id} ${index_1.taskList[id].text} ha sido eliminada`));
});
command
    .command('showTaskList')
    .description('Muestra la lista de tareas')
    .action((taskList) => {
    const result = (0, index_1.showTaskList)(taskList);
    console.log(chalk_1.default.white(result));
});
//# sourceMappingURL=cli.js.map