import { Command } from 'commander';
import { showTaskList, taskList, contadorId, Task, Tasks, completedOrNot } from './index';
import chalk from 'chalk';
import figlet from 'figlet';
import * as readlineSync from 'readline-sync';

let taskManager: Tasks = new Tasks(taskList);
let localTaskList: Task[] = [];
let appEnd: boolean = false;
const program = new Command();

console.log(figlet.textSync("Gestor de tareas!"));

function add(userText: string) {
  const newTask: Task = {
    id: contadorId,
    text: userText,
    completed: false
  };

  localTaskList = taskManager.addTask(newTask);
  console.log(chalk.green(`id: ${contadorId - 1} Tarea añadida: ${userText} - ${completedOrNot(newTask)} `));
  return `Tarea añadida: ${userText} - ${completedOrNot(newTask)} `;
}

function markCompleted(id: number){
  localTaskList = taskManager.markAsCompleted(id);
  console.log(chalk.blue(`La tarea ${id} ${taskList[id].text} ha sido marcada como completada`));
}

function markIncompleted(id: number) {
  localTaskList = taskManager.markAsIncompleted(id);
  console.log(chalk.yellowBright(`La tarea ${id} ${localTaskList[id].text} ha sido marcada como incompleta`));
}

function remove(id: number) {
  console.log(chalk.redBright(`La tarea ${id} ${localTaskList[id].text} ha sido eliminada`));
  localTaskList = taskManager.removeTask(id);
}

function showList() {
  const result: string = showTaskList(localTaskList);
  console.log(chalk.white(result));
  console.log(localTaskList);
}

const options = program.opts();

while (!appEnd) {
  let question = readlineSync.question('What do you want to do next? (1.add, 2.mark complete, 3.mark incomplete, 4.remove, 5.show task list, 6.exit) (Just type the number): ');

  switch(question){
    case "1": {
      let taskText = readlineSync.question("Inser your task here: ")

      add(taskText);
      break
    }
    case "2": {
      let taskIdText = readlineSync.question("Insert the id of the task you want completed: ")
      const taskId = stringToNumber(taskIdText)
    
      markCompleted(taskId);
      break
    }
    case "3": {
      let taskIdText = readlineSync.question("Insert the id of the task you want incompleted: ")
      const taskId = stringToNumber(taskIdText)

      markIncompleted(taskId);
      break
    }
    case "4": {
      let taskIdText = readlineSync.question("Insert the id of the task you want to remove: ")
      const taskId = stringToNumber(taskIdText)

      remove(taskId);
      break
    }
    case "5": {
      showList();
      break
    }
    case "6": {
      appEnd = true;
      console.log("¡Hasta la vista!")
      break
    }
  }
}


function stringToNumber(text:string): number{
  let num = Number(text)
  return num
}

program.parse(process.argv)