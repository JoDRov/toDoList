export let contadorId: number = 0;
export let taskList: Task[] = [];

console.log("Hello World")

export type Task = {
  id: number,
  text: string,
  completed: boolean
}

export class Tasks{
  _task: Task;
  constructor(task: Task){
    this._task = task;
  }

  addTask(task: Task){
    taskList.push(task);
    contadorId++;
  }

  markAsCompleted(taskId: number){
    const taskIndex: number = taskList.findIndex((task) => task.id === taskId);
    taskList[taskIndex].completed = true;
  }

  markAsInompleted(taskId: number){
    const taskIndex: number = taskList.findIndex((task) => task.id === taskId);
    taskList[taskIndex].completed = false;
  }

  removeTask(taskId: number){
    const taskIndex: number = taskList.findIndex((task) => task.id === taskId);
    console.log(taskList)
    if (!isNaN(taskIndex)){
      taskList.splice(taskIndex,1);
      contadorId --;
      taskList[taskId].id = taskId;
    }
    console.log(taskList)
  }
}

export function showTaskList(taskList: Task[]){
    let stringArray: string[] = [];
  
    for (let i = 0; i < taskList.length; i++){
      if (i < taskList.length - 1){
        stringArray.push(taskList[i].text + ": " + completedOrNot(taskList[i]) + ", ");
      }else{
        stringArray.push(taskList[i].text + ": " + completedOrNot(taskList[i]) + ".");
      }
    } 
    return stringArray;
  }

let tareaTest: Task = {id: contadorId, text: "Comprar portatil", completed: false}
export let prueba = new Tasks(tareaTest);
prueba.addTask(tareaTest);

let secondTask: Task = {id: contadorId, text: "Ir al gym", completed: false}
prueba.addTask(secondTask);

let thirdTask: Task = {id: contadorId, text: "Ir a fumar", completed: false}
prueba.addTask(thirdTask);

prueba.markAsCompleted(contadorId - 1);
// prueba.removeTask(0)
showTaskList(taskList);

export function completedOrNot(task: Task){
  if (task.completed){
    return "completado"
  }else{
    return "pendiente"
  }
}