"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.completedOrNot = exports.prueba = exports.showTaskList = exports.Tasks = exports.taskList = exports.contadorId = void 0;
exports.contadorId = 0;
exports.taskList = [];
console.log("Hello World");
class Tasks {
    constructor(task) {
        this._task = task;
    }
    addTask(task) {
        exports.taskList.push(task);
        exports.contadorId++;
    }
    markAsCompleted(taskId) {
        const taskIndex = exports.taskList.findIndex((task) => task.id === taskId);
        exports.taskList[taskIndex].completed = true;
    }
    markAsInompleted(taskId) {
        const taskIndex = exports.taskList.findIndex((task) => task.id === taskId);
        exports.taskList[taskIndex].completed = false;
    }
    removeTask(taskId) {
        const taskIndex = exports.taskList.findIndex((task) => task.id === taskId);
        console.log(exports.taskList);
        if (!isNaN(taskIndex)) {
            exports.taskList.splice(taskIndex, 1);
            exports.contadorId--;
            exports.taskList[taskId].id = taskId;
        }
        console.log(exports.taskList);
    }
}
exports.Tasks = Tasks;
function showTaskList(taskList) {
    let stringArray = [];
    for (let i = 0; i < taskList.length; i++) {
        if (i < taskList.length - 1) {
            stringArray.push(taskList[i].text + ": " + completedOrNot(taskList[i]) + ", ");
        }
        else {
            stringArray.push(taskList[i].text + ": " + completedOrNot(taskList[i]) + ".");
        }
    }
    return stringArray;
}
exports.showTaskList = showTaskList;
let tareaTest = { id: exports.contadorId, text: "Comprar portatil", completed: false };
exports.prueba = new Tasks(tareaTest);
exports.prueba.addTask(tareaTest);
let secondTask = { id: exports.contadorId, text: "Ir al gym", completed: false };
exports.prueba.addTask(secondTask);
let thirdTask = { id: exports.contadorId, text: "Ir a fumar", completed: false };
exports.prueba.addTask(thirdTask);
exports.prueba.markAsCompleted(exports.contadorId - 1);
// prueba.removeTask(0)
showTaskList(exports.taskList);
function completedOrNot(task) {
    if (task.completed) {
        return "completado";
    }
    else {
        return "pendiente";
    }
}
exports.completedOrNot = completedOrNot;
//# sourceMappingURL=index.js.map