import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useSearchParams,
} from "react-router-dom";
import { AddTodo } from "./components/AddTodo";
import { Filterbar } from "./components/Filterbar";
import TodoList from "./components/TodoList";
import { filterbar } from "./css/FilterbarStyles.css";
import { container } from "./css/styles.css";
import { TODO_STATUS, TodoType } from "./types/todoTypes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

const storedTodos = JSON.parse(
  localStorage.getItem("todos") || "[]",
) as TodoType[];

function TodoPage() {
  const [todos, setTodos] = useState<TodoType[]>(storedTodos);
  const [searchParams, setSearchParams] = useSearchParams();

  // 新しいtodoを追加する処理
  const addTodoItem = (todoTitle: string): void => {
    const newTodo: TodoType = {
      id: todos.length + 1,
      title: todoTitle,
      status: TODO_STATUS.TODO,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    // Todoリストが更新されるたびにローカルストレージに保存する
    // => JSON.stringify({a: 1, b: "2"}) -> '{"a":1,"b":"2"}'
    // => JSON.parse('{"a":1,"b":"2"}') -> object {a: 1, b: "2"}
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  // todoを削除する処理
  const deleteTodoItem = (id: number): void => {
    const deletedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(deletedTodos);
    localStorage.setItem("todos", JSON.stringify(deletedTodos));
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
    localStorage.setItem("todos", JSON.stringify(updateTodos));
  };

  // フィルターを適用する処理
  const handleStatusChange = (
    status: TodoType["status"],
    isChecked: boolean,
  ): void => {
    // チェックされたらフィルターに追加 (isCheckedがfalseの場合、statusと一致するものだけのクエリ文字列を作る)
    if (isChecked) {
      // filter= の後の文字列を配列にして、重複を取り除いてから、新しいstatusを追加して、また文字列に戻す
      setSearchParams((prev) => {
        // ?filter=xxx の xxx 部分
        // filter= だけの場合、get は空文字 '' を返してしまうのでその場合は null にしておきたい (nullが返ると filter がないということになる)
        const filterQueryValue = prev.get("filter") || null;

        // "hoge,foo,bar".split(",") -> ["hoge", "foo", "bar"]
        const filterStatus = filterQueryValue?.split(",") ?? [];

        // Set は重複を取り除いた「集合」を作る(配列ではない)
        const filterStatusSet = new Set(filterStatus);
        // filterStatusSet にチェックした status を追加
        filterStatusSet.add(status);

        // Set から配列に戻し、カンマ区切りの文字列にする
        // ["hoge", "foo", "bar"].join(",") -> "hoge,foo,bar"
        prev.set(
          "filter",
          Array.from(filterStatusSet).join(","),
        );

        return new URLSearchParams(prev);
      });
    } else {
      // チェックが外されたらフィルターから削除 (isCheckedがfalseの場合、statusと一致しないものだけのクエリ文字列を作る)
      setSearchParams((prev) => {
        const filterQueryValue = prev.get("filter") || null;

        const filterStatus = filterQueryValue?.split(",") ?? [];

        const filterStatusSet = new Set(filterStatus);
        // filterStatusSet にチェックした status を削除
        filterStatusSet.delete(status);

        prev.set(
          "filter",
          Array.from(filterStatusSet).join(","),
        );

        return new URLSearchParams(prev);
      });
    }
  };
  // フィルターを適用したTodoリストを作成する処理

  // http://xxx.com/?filter=未着手,完了
  const filters = (searchParams.get("filter")?.split(",") || null) ?? [];
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
