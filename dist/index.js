"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.completedOrNot = exports.showTaskList = exports.Tasks = exports.contadorId = exports.taskList = void 0;
exports.taskList = [];
exports.contadorId = 0;
class Tasks {
    constructor(taskList) {
        this._taskList = taskList;
    }
    addTask(task) {
        this._taskList.push(task);
        exports.contadorId++;
        return this._taskList;
    }
    markAsCompleted(taskId) {
        const taskIndex = this._taskList.findIndex((task) => task.id === taskId);
        this._taskList[taskIndex].completed = true;
        return this._taskList;
    }
    markAsIncompleted(taskId) {
        const taskIndex = this._taskList.findIndex((task) => task.id === taskId);
        this._taskList[taskIndex].completed = false;
        return this._taskList;
    }
    removeTask(taskId) {
        const taskIndex = this._taskList.findIndex((task) => task.id === taskId);
        if (!isNaN(taskIndex)) {
            this._taskList.splice(taskIndex, 1);
            exports.contadorId--;
        }
        return this._taskList;
    }
}
exports.Tasks = Tasks;
function showTaskList(taskList) {
    let string = "";
    for (let i = 0; i < taskList.length; i++) {
        if (i < taskList.length - 1) {
            string += taskList[i].text + ": " + completedOrNot(taskList[i]) + ", ";
        }
        else {
            string += taskList[i].text + ": " + completedOrNot(taskList[i]) + ".";
        }
    }
    return string;
}
exports.showTaskList = showTaskList;
function completedOrNot(task) {
    if (task.completed) {
        return "completado";
    }
    else {
        return "pendiente";
    }
}
exports.completedOrNot = completedOrNot;
/*let tareaTest: Task = {id: contadorId, text: "Comprar portatil", completed: false;
prueba.addTask(tareaTest);

let secondTask: Task = {id: contadorId, text: "Ir al gym", completed: false}
prueba.addTask(secondTask);

let thirdTask: Task = {id: contadorId, text: "Ir a fumar", completed: false}
prueba.addTask(thirdTask);

prueba.markAsCompleted(contadorId - 1);
// prueba.removeTask(0)
showTaskList(taskList);*/
//# sourceMappingURL=index.js.map