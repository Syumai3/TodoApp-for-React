import { checkbox, filterItem } from "../css/FilterbarStyles.css";
import { TodoType } from "../types/todoTypes";

interface FilterbarProps {
  onStatusChange: (status: TodoType["status"], isChecked: boolean) => void;
}

export function Filterbar({ onStatusChange }: FilterbarProps) {
  return (
    <div className={filterItem}>
      <div>
        <input
          type="checkbox"
          name="status"
          value="未着手"
          onChange={(e) => onStatusChange("未着手", e.target.checked)}
          className={checkbox}
        />
        <span>未着手</span>
      </div>
      <div>
        <input
          type="checkbox"
          name="status"
          value="着手中"
          onChange={(e) => onStatusChange("着手中", e.target.checked)}
          className={checkbox}
        />
        <span>着手中</span>
      </div>
      <div>
        <input
          type="checkbox"
          name="status"
          value="完了"
          onChange={(e) => onStatusChange("完了", e.target.checked)}
          className={checkbox}
        />
        <span>完了</span>
      </div>
    </div>
  );
}
