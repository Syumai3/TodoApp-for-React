import { useState } from "react";
import { buttonStyle } from "../../css/styles.css";
import { inputBar } from "./AddTodo.css";

type AddTodoProps = {
  onAddTodo: (todoTitle: string) => void;
};

export function AddTodo({ onAddTodo }: AddTodoProps) {
  const [newTodo, setNewTodo] = useState("");

  const handleAddChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleAddNewTodo = () => {
    // 何も入力されていない場合は何も返さない
    if (newTodo) {
      onAddTodo(newTodo); // 親コンポーネントの addTodoItem 関数を呼び出して新しい Todo を追加
    }
    setNewTodo(""); // 入力欄をクリア
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={newTodo}
          placeholder="タスクを追加"
          onChange={handleAddChange}
          className={inputBar}
        />
        <button onClick={handleAddNewTodo} className={buttonStyle}>
          追加
        </button>
      </div>
    </>
  );
}
