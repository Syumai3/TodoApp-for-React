export function Todo({ todo }) {
  return (
    <div>
      <span>{todo.status}</span> <span>{todo.title}</span>
    </div>
  );
}
