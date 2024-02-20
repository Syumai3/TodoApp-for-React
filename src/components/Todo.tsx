import { buttonStyle } from "../css/styles.css";
import { compleateStyle, selectBoxStyle } from "../css/todoStyle.css";
import { TODO_STATUS, type TodoType } from "../types/todoTypes";

type TodoProps = {
  todo: TodoType;
  onDelete: () => void;
  onChangeStatus: (id: number, newStatus: TodoType["status"]) => void;
};

export function Todo({ todo, onDelete, onChangeStatus }: TodoProps) {
  return (
    <div>
      <select
        value={todo.status}
        onChange={(e) =>
          onChangeStatus(todo.id, e.target.value as TodoType["status"])}
        className={selectBoxStyle}
      >
        {/* Object.values(TODO_STATUS) で、TODO_STATUSの値の配列を作る */}
        {Object.values(TODO_STATUS).map((status) => (
          <option key={status} value={status}>{status}</option>
        ))}
      </select>
      <span className={todo.status === TODO_STATUS.DONE ? compleateStyle : ""}>
        {todo.title}
      </span>{" "}
      <button onClick={onDelete} className={buttonStyle}>削除</button>
    </div>
  );
}
