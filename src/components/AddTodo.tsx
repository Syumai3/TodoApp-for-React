export function AddTodo() {
  const handleAddChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleAddNewTodo = () => {
    console.log("追加ボタンが押されました");
  };

  return (
    <>
      <input
        type="text"
        value=""
        placeholder="Todoを追加"
        onChange={handleAddChange}
      />
      <button onClick={handleAddNewTodo}>追加</button>
    </>
  );
}
