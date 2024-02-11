import { useState } from "react";
import "./App.css";
import { AddTodo } from "./components/AddTodo";
import { Filterbar } from "./components/Filterbar";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  // 新しいtodoを追加する
  const addTodoItem = (todoTitle) => {
    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      status: "未着手",
    };
    setTodos([...todos, newTodo]);
  };

  // todoを削除する
  const deleteTodoItem = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>タスク管理</h1>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <AddTodo onAddTodo={addTodoItem} />
        <Filterbar />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <TodoList todos={todos} onDelete={deleteTodoItem} />
      </div>

      <div>
        {todos.length > 0 ? `残タスク数:${todos.length}` : "タスクはありません"}
      </div>
    </>
  );
}

export default App;
