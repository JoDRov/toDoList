export let taskList: Task[] = [];
export let contadorId: number = 0;

export type Task = {
  id: number,
  text: string,
  completed: boolean
}

export class Tasks{
  _taskList: Task[];
  constructor(taskList: Task[]){
    this._taskList = taskList;
  }

  addTask(task: Task){
    this._taskList.push(task);
    contadorId++;
    return this._taskList;
  }

  markAsCompleted(taskId: number){
    const taskIndex: number = this._taskList.findIndex((task) => task.id === taskId);
    this._taskList[taskIndex].completed = true;
    return this._taskList
  }

  markAsIncompleted(taskId: number){
    const taskIndex: number = this._taskList.findIndex((task) => task.id === taskId);
    this._taskList[taskIndex].completed = false;
    return this._taskList
  }

  removeTask(taskId: number){
    const taskIndex: number = this._taskList.findIndex((task) => task.id === taskId);
    if (!isNaN(taskIndex)){
      this._taskList.splice(taskIndex,1);
      contadorId --;
    }
    return this._taskList
  }
}

export function showTaskList(taskList: Task[]){
  let string: string = "";

  for (let i = 0; i < taskList.length; i++){
    if (i < taskList.length - 1){
      string += taskList[i].text + ": " + completedOrNot(taskList[i]) + ", ";
    }else{
      string += taskList[i].text + ": " + completedOrNot(taskList[i]) + ".";
    }
  } 
  return  string;
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

