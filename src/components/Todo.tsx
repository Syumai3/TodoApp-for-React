import { buttonStyle } from "../css/styles.css";
import { compleateStyle, selectBoxStyle } from "../css/todoStyle.css";
import { TodoType } from "../types/todoTypes";

interface TodoProps {
  todo: TodoType;
  onDelete: () => void;
  onChangeStatus: (id: number, newStatus: TodoType["status"]) => void;
}

export function Todo({ todo, onDelete, onChangeStatus }: TodoProps) {
  return (
    <div>
      <select
        value={todo.status}
        onChange={(e) =>
          onChangeStatus(todo.id, e.target.value as TodoType["status"])}
        className={selectBoxStyle}
      >
        <option value="未着手">未着手</option>
        <option value="着手中">着手中</option>
        <option value="完了">完了</option>
      </select>
      <span className={todo.status === "完了" ? compleateStyle : ""}>
        {todo.title}
      </span>{" "}
      <button onClick={onDelete} className={buttonStyle}>削除</button>
    </div>
  );
}
