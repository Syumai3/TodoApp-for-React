import "./App.css";
import { AddTodo } from "./components/AddTodo";
import { Filterbar } from "./components/Filterbar";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <h1>タスク管理</h1>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <AddTodo />
        <Filterbar />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <TodoList />
      </div>

      <div>
        残タスク数: 2
      </div>
    </>
  );
}

export default App;
