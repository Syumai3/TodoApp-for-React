import { useState } from "react";

export function AddTodo() {
  const [newTodo, setNewTodo] = useState("");
  const handleAddChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleAddNewTodo = () => {
    console.log("追加ボタンが押されました");
  };

  return (
    <>
      <input
        type="text"
        value={newTodo}
        placeholder="Todoを追加"
        onChange={(e) => handleAddChange(e)}
      />
      <button onClick={handleAddNewTodo}>追加</button>
    </>
  );
}
