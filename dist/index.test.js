"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let contadorId = 0;
let taskList = [];
// Añadir tarea a la lista
describe("Deberia añadir tareas a la lista", () => {
    test("Deberia añadir una tarea a la lista de tareas", () => {
        const task = {
            id: contadorId,
            text: "Ir a comprar un portatil",
            completed: false
        };
        taskList.push(task);
        contadorId++;
        expect(task.id).toBe(contadorId - 1);
        expect(task.text).toBe("Ir a comprar un portatil");
        expect(task.completed).toBe(false);
    });
    test("Deberia añadir una segunda tarea a la lista de tareas", () => {
        const task = {
            id: contadorId,
            text: "Ir al gym",
            completed: false
        };
        taskList.push(task);
        contadorId++;
        expect(task.id).toBe(contadorId - 1);
        expect(task.text).toBe("Ir al gym");
        expect(task.completed).toBe(false);
    });
    test("Deberia añadir una tercera tarea a la lista de tareas", () => {
        const task = {
            id: contadorId,
            text: "Ir a cenar al kiwi",
            completed: false
        };
        taskList.push(task);
        contadorId++;
        expect(task.id).toBe(contadorId - 1);
        expect(task.text).toBe("Ir a cenar al kiwi");
        expect(task.completed).toBe(false);
    });
});
// Marcar tarea como completada
describe("Deberia marcar una tarea como completada", () => {
    test("Marcar la ultima tarea como completada", () => {
        const taskIndex = taskList.findIndex((task) => task.id === contadorId - 1);
        taskList[contadorId - 1].completed = true;
        expect(taskList[contadorId - 1].completed).toBe(true);
    });
});
// Eliminar tarea
describe("Deberia eliminar una tarea de la lista", () => {
    test("Eliminar la ultima tarea de la lista", () => {
        let taskIdWantRemove = 2;
        const taskIndex = taskList.findIndex((task) => task.id === taskIdWantRemove);
        if (!isNaN(taskIndex)) {
            taskList.splice(taskIndex, 1);
        }
        expect(taskList[contadorId - 1]).toBe(undefined);
        contadorId--;
    });
});
// Mostrar lista de tareas
describe("Deberia mostrar la lista de tareas", () => {
    test("Mostrar lista de tareas", () => {
        let test = showTaskList(taskList);
        function showTaskList(taskList) {
            let stringTest = "";
            for (let i = 0; i < taskList.length; i++) {
                if (i < taskList.length - 1) {
                    stringTest += `${taskList[i].text}: ${completedOrNot(taskList[i])}, `;
                }
                else {
                    stringTest += `${taskList[i].text}: ${completedOrNot(taskList[i])}.`;
                }
            }
            function completedOrNot(task) {
                if (task.completed) {
                    return "completado";
                }
                else {
                    return "pendiente";
                }
            }
            expect(stringTest).toBe("Ir a comprar un portatil: pendiente, Ir al gym: pendiente.");
        }
    });
});
//# sourceMappingURL=index.test.js.map