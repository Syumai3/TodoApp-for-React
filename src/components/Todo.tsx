export function Todo({ todo, onDelete }) {
  return (
    <div>
      <span>{todo.status}</span> <span>{todo.title}</span>{" "}
      <button onClick={onDelete}>削除</button>
    </div>
  );
}
