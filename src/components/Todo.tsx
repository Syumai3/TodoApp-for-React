export function Todo({ todo, onDelete, onChangeStatus }) {
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
      <span>{todo.title}</span> <button onClick={onDelete}>削除</button>
    </div>
  );
}
