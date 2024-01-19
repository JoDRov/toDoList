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
  console.log(localTaskList);
  return `Tarea añadida: ${userText} - ${completedOrNot(newTask)} `;
}

function markCompleted(id: number){
  localTaskList = taskManager.markAsCompleted(id);
  console.log(chalk.blue(`La tarea ${id} ${taskList[id].text} ha sido modificada`));
  console.log(localTaskList);
}

function markIncompleted(id: number) {
  localTaskList = taskManager.markAsIncompleted(id);
  console.log(chalk.yellow(`La tarea ${id} ${localTaskList[id].text} ha sido modificada`));
  console.log(localTaskList);
}

function remove(id: number) {
  localTaskList = taskManager.removeTask(id);
  console.log(chalk.red(`La tarea ${id} ${localTaskList[id].text} ha sido eliminada`));
  console.log(localTaskList);
}

function showList() {
  const result: string = showTaskList(localTaskList);
  console.log(chalk.white(result));
  console.log(localTaskList);
}

const options = program.opts();

while (!appEnd) {
  let question = readlineSync.question('What do you want to do next? (1.add, 2.mark complete, 3.mark incomplete, 4.remove, 5.show task list, 6.exit) (Just type the number): ');
  console.log(question)

  switch(question){
    case "1": {
      let taskText = readlineSync.question("Inser your task here: ")

      add(taskText);
      break
    }
    case "2": {
      let taskIdText = readlineSync.question("Insert the id of the task you want completed: ")
      console.log("TaskIdText: " + taskIdText)
      const taskId = stringToNumber(taskIdText)
      console.log("taskId: " + taskId)
    
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
      let taskIdText = readlineSync.question("Insert the id of the task you want removed: ")
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
      break
    }
  }
}


function stringToNumber(text:string): number{
  console.log("stringToNumberText: " + text)
  let num = 0
  switch(text){
    case "0": {num = 0}
    case "1": {num = 1}
    case "2": {num = 2}
    case "3": {num = 3}
    case "4": {num = 4}
    case "5": {num = 5}
    case "6": {num = 6}
    default: console.log("not a number!")
  }
  console.log(num)
  return num
}

program.parse(process.argv)