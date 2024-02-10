export function Todo({ todo }) {
  return (
    <div>
      <span>{todo.status}</span> <span>{todo.title}</span> <button>削除</button>
    </div>
  );
}
