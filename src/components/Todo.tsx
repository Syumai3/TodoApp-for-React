export function Todo({ todo, onDelete, onChangeStatus }) {
  const compleateStyle = { textDecoration: "line-through" };
  return (
    <div>
      <select
        value={todo.status}
        onChange={(e) => onChangeStatus(todo.id, e.target.value)}
      >
        <option value="未着手">未着手</option>
        <option value="着手中">着手中</option>
        <option value="完了">完了</option>
      </select>

      <span style={todo.status === "完了" ? compleateStyle : {}}>
        {todo.title}
      </span>{" "}
      <button onClick={onDelete}>削除</button>
    </div>
  );
}
