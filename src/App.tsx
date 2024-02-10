import { useState } from "react";
import "./App.css";
import { AddTodo } from "./components/AddTodo";
import { Filterbar } from "./components/Filterbar";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoItem = (todoTitle) => {
    // 新しいtodoを追加する
    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      status: "未着手",
    };
    setTodos([...todos, newTodo]);
  };
  return (
    <>
      <h1>タスク管理</h1>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <AddTodo onAddTodo={addTodoItem} />
        <Filterbar />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <TodoList todos={todos} />
      </div>

      <div>
        残タスク数: 2
      </div>
    </>
  );
}

export default App;
