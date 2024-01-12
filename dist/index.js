"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prueba = exports.completedOrNot = exports.showTaskList = exports.Tasks = exports.taskList = exports.contadorId = void 0;
exports.contadorId = 0;
exports.taskList = [];
class Tasks {
    /*_task: Task;
    constructor(task: Task){
      this._task = task;
    }*/
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
function completedOrNot(task) {
    if (task.completed) {
        return "completado";
    }
    else {
        return "pendiente";
    }
}
exports.completedOrNot = completedOrNot;
exports.prueba = new Tasks();
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