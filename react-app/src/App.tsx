import {taskList, showTaskList} from "../../src/index.ts";

console.log(taskList)

const stringArray: string = showTaskList(taskList);

function App(){
  return (
  <div>
    <header>
        <h1>To do List</h1>
        <h6>Made by Jose Diaz</h6>
    </header>
    <main>
        <div id="app">
        {stringArray}
        </div>
    </main>
    <footer>

    </footer>
  </div>
  );
}

export default App;