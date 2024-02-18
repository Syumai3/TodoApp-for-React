import { useEffect, useState } from "react";
import { AddTodo } from "./components/AddTodo";
import { Filterbar } from "./components/Filterbar";
import TodoList from "./components/TodoList";
import { filterbar } from "./css/FilterbarStyles.css";
import { container } from "./css/styles.css";
import { TodoType } from "./types/todoTypes";

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [filters, setFilters] = useState<string[]>([]);

  // マウント時にローカルストレージからTodoリストを読み込む
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(storedTodos);
  }, []);

  // Todoリストが更新されるたびにローカルストレージに保存する
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // 新しいtodoを追加する処理
  const addTodoItem = (todoTitle: string): void => {
    const newTodo: TodoType = {
      id: todos.length + 1,
      title: todoTitle,
      status: "未着手",
    };
    setTodos([...todos, newTodo]);
  };

  // todoを削除する処理
  const deleteTodoItem = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // ステータスを変更する処理
  const changeItemStatus = (
    id: number,
    newStatus: TodoType["status"],
  ): void => {
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

  // フィルターを適用する処理
  const handleStatusChange = (
    status: TodoType["status"],
    isChecked: boolean,
  ): void => {
    if (isChecked) {
      // チェックされたら filters にチェックされた statusを追加 (filtersは初期値は空)
      setFilters([...filters, status]);
    } else {
      // チェックが外されたらフィルターから削除 (isCheckedがfalseの場合、statusと一致しないものだけで配列を作る)
      setFilters(filters.filter((f) => f !== status));
    }
  };
  // フィルターを適用したTodoリストを作成する処理
  const filteredTodos = todos.filter((todo) => {
    return filters.length === 0 || filters.includes(todo.status);
  });

  return (
    <>
      <div className={container}>
        <h1>タスク管理</h1>
        <div className={filterbar}>
          <Filterbar onStatusChange={handleStatusChange} />
          <AddTodo onAddTodo={addTodoItem} />
        </div>
        <div>
          <TodoList
            todos={filteredTodos}
            onDelete={deleteTodoItem}
            onChangeStatus={changeItemStatus}
          />
        </div>
        <div>
          {todos.length > 0
            ? `残タスク数:${todos.length}`
            : "タスクはありません"}
        </div>
      </div>
    </>
  );
}

export default App;
