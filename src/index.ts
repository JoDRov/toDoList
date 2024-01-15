export let taskList: Task[] = [];
export let contadorId: number = 0;

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
    console.log(taskList)
    return taskList;
  }

  markAsCompleted(taskId: number){
    const taskIndex: number = taskList.findIndex((task) => task.id === taskId);
    taskList[taskIndex].completed = true;
    return taskList
  }

  markAsIncompleted(taskId: number){
    const taskIndex: number = taskList.findIndex((task) => task.id === taskId);
    taskList[taskIndex].completed = false;
    return taskList
  }

  removeTask(taskId: number){
    const taskIndex: number = taskList.findIndex((task) => task.id === taskId);
    if (!isNaN(taskIndex)){
      taskList.splice(taskIndex,1);
      contadorId --;
    }
    return taskList
  }
}

export function showTaskList(taskList2: Task[]){
  let stringArray: string[] = [];

  for (let i = 0; i < taskList2.length; i++){
    if (i < taskList2.length - 1){
      stringArray.push(taskList2[i].text + ": " + completedOrNot(taskList2[i]) + ", ");
    }else{
      stringArray.push(taskList2[i].text + ": " + completedOrNot(taskList2[i]) + ".");
    }
  } 
  return stringArray;
}

export function completedOrNot(task: Task){
  if (task.completed){
    return "completado"
  }else{
    return "pendiente"
  }
}





/*let tareaTest: Task = {id: contadorId, text: "Comprar portatil", completed: false;
prueba.addTask(tareaTest);

let secondTask: Task = {id: contadorId, text: "Ir al gym", completed: false}
prueba.addTask(secondTask);

let thirdTask: Task = {id: contadorId, text: "Ir a fumar", completed: false}
prueba.addTask(thirdTask);

prueba.markAsCompleted(contadorId - 1);
// prueba.removeTask(0)
showTaskList(taskList);*/

