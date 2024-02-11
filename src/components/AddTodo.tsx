import { useState } from "react";

interface AddTodoProps {
  onAddTodo: (todoTitle: string) => void;
}

export function AddTodo({ onAddTodo }: AddTodoProps) {
  const [newTodo, setNewTodo] = useState("");

  const handleAddChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleAddNewTodo = () => {
    onAddTodo(newTodo); // 親コンポーネントの addTodoItem 関数を呼び出して新しい Todo を追加
    setNewTodo(""); // 入力欄をクリア
  };

  return (
    <>
      <input
        type="text"
        value={newTodo}
        placeholder="Todoを追加"
        onChange={handleAddChange}
      />
      <button onClick={handleAddNewTodo}>追加</button>
    </>
  );
}
