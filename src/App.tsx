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

  // ステータスを変更する
  const changeItemStatus = (id, newStatus) => {
    const updateTodos = todos.map((todo) => {
      // 指定されたIDのTodoを見つけた場合、新しいステータスで更新
      if (todo.id === id) {
        // スプレッド構文を使って新しいオブジェクトを作成し、statusプロパティを更新
        return { ...todo, status: newStatus };
      }
      return todo;
    });
    setTodos(updateTodos); // 更新されたTodoリストで状態をセット
  };

  return (
    <>
      <h1>タスク管理</h1>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <AddTodo onAddTodo={addTodoItem} />
        <Filterbar />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <TodoList
          todos={todos}
          onDelete={deleteTodoItem}
          onChangeStatus={changeItemStatus}
        />
      </div>

      <div>
        {todos.length > 0 ? `残タスク数:${todos.length}` : "タスクはありません"}
      </div>
    </>
  );
}

export default App;
