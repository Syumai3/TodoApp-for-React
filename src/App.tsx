import "./App.css";
import { AddTodo } from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <h1>タスク管理</h1>
      <AddTodo />
      <TodoList />
      <div>
      </div>
    </>
  );
}

export default App;
