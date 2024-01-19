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

  addTask(task: Task): Task[]{
    this._taskList.push(task);
    contadorId++;
    return this._taskList;
  }

  markAsCompleted(taskId: number): Task[]{
    this._taskList[taskId].completed = true;
    return this._taskList
  }

  markAsIncompleted(taskId: number): Task[]{
    this._taskList[taskId].completed = false;
    return this._taskList
  }

  removeTask(taskId: number): Task[]{
    if (!isNaN(taskId)){
      this._taskList.splice(taskId,1);
      contadorId --;
    }
    return this._taskList
  }
}

export function showTaskList(taskList: Task[]): string{
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

export function completedOrNot(task: Task): string{
  if (task.completed){
    return "completado"
  }else{
    return "pendiente"
  }
}

const testTasK: Task = {
  id: contadorId,
  text: "Ir a comprar manzanas",
  completed: false
}
let taskManager: Tasks = new Tasks(taskList)
taskManager.addTask(testTasK)





/*let tareaTest: Task = {id: contadorId, text: "Comprar portatil", completed: false;
prueba.addTask(tareaTest);

let secondTask: Task = {id: contadorId, text: "Ir al gym", completed: false}
prueba.addTask(secondTask);

let thirdTask: Task = {id: contadorId, text: "Ir a fumar", completed: false}
prueba.addTask(thirdTask);

prueba.markAsCompleted(contadorId - 1);
// prueba.removeTask(0)
showTaskList(taskList);*/

