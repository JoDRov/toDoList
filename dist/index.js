"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.completedOrNot = exports.showTaskList = exports.Tasks = exports.contadorId = exports.taskList = void 0;
exports.taskList = [];
exports.contadorId = 0;
class Tasks {
    constructor(task) {
        this._task = task;
    }
    addTask(task) {
        exports.taskList.push(task);
        exports.contadorId++;
        console.log(exports.taskList);
        return exports.taskList;
    }
    markAsCompleted(taskId) {
        const taskIndex = exports.taskList.findIndex((task) => task.id === taskId);
        exports.taskList[taskIndex].completed = true;
        return exports.taskList;
    }
    markAsIncompleted(taskId) {
        const taskIndex = exports.taskList.findIndex((task) => task.id === taskId);
        exports.taskList[taskIndex].completed = false;
        return exports.taskList;
    }
    removeTask(taskId) {
        const taskIndex = exports.taskList.findIndex((task) => task.id === taskId);
        if (!isNaN(taskIndex)) {
            exports.taskList.splice(taskIndex, 1);
            exports.contadorId--;
        }
        return exports.taskList;
    }
}
exports.Tasks = Tasks;
function showTaskList(taskList2) {
    let stringArray = [];
    for (let i = 0; i < taskList2.length; i++) {
        if (i < taskList2.length - 1) {
            stringArray.push(taskList2[i].text + ": " + completedOrNot(taskList2[i]) + ", ");
        }
        else {
            stringArray.push(taskList2[i].text + ": " + completedOrNot(taskList2[i]) + ".");
        }
    }
    return stringArray;
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