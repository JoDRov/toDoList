"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const index_1 = require("./index");
const chalk_1 = __importDefault(require("chalk"));
const figlet_1 = __importDefault(require("figlet"));
const readlineSync = __importStar(require("readline-sync"));
let taskManager = new index_1.Tasks(index_1.taskList);
let localTaskList = [];
let appEnd = false;
const program = new commander_1.Command();
console.log(figlet_1.default.textSync("Gestor de tareas!"));
function add(userText) {
    const newTask = {
        id: index_1.contadorId,
        text: userText,
        completed: false
    };
    localTaskList = taskManager.addTask(newTask);
    console.log(chalk_1.default.green(`id: ${index_1.contadorId - 1} Tarea añadida: ${userText} - ${(0, index_1.completedOrNot)(newTask)} `));
    return `Tarea añadida: ${userText} - ${(0, index_1.completedOrNot)(newTask)} `;
}
function markCompleted(id) {
    localTaskList = taskManager.markAsCompleted(id);
    console.log(chalk_1.default.blue(`La tarea ${id} ${index_1.taskList[id].text} ha sido marcada como completada`));
}
function markIncompleted(id) {
    localTaskList = taskManager.markAsIncompleted(id);
    console.log(chalk_1.default.yellowBright(`La tarea ${id} ${localTaskList[id].text} ha sido marcada como incompleta`));
}
function remove(id) {
    console.log(chalk_1.default.redBright(`La tarea ${id} ${localTaskList[id].text} ha sido eliminada`));
    localTaskList = taskManager.removeTask(id);
}
function showList() {
    const result = (0, index_1.showTaskList)(localTaskList);
    console.log(chalk_1.default.white(result));
    console.log(localTaskList);
}
const options = program.opts();
while (!appEnd) {
    let question = readlineSync.question('What do you want to do next? (1.add, 2.mark complete, 3.mark incomplete, 4.remove, 5.show task list, 6.exit) (Just type the number): ');
    switch (question) {
        case "1": {
            let taskText = readlineSync.question("Inser your task here: ");
            add(taskText);
            break;
        }
        case "2": {
            let taskIdText = readlineSync.question("Insert the id of the task you want completed: ");
            const taskId = stringToNumber(taskIdText);
            markCompleted(taskId);
            break;
        }
        case "3": {
            let taskIdText = readlineSync.question("Insert the id of the task you want incompleted: ");
            const taskId = stringToNumber(taskIdText);
            markIncompleted(taskId);
            break;
        }
        case "4": {
            let taskIdText = readlineSync.question("Insert the id of the task you want to remove: ");
            const taskId = stringToNumber(taskIdText);
            remove(taskId);
            break;
        }
        case "5": {
            showList();
            break;
        }
        case "6": {
            appEnd = true;
            console.log("¡Hasta la vista!");
            break;
        }
    }
}
function stringToNumber(text) {
    let num = Number(text);
    return num;
}
program.parse(process.argv);
//# sourceMappingURL=cli.js.map