import { TODO_STATUS, TodoType } from "../../types/todoTypes";
import { checkbox, filterCheckboxGroup, filterItem } from "./Filterbar.css";

type FilterbarProps = {
  onStatusChange: (status: TodoType["status"], isChecked: boolean) => void;
};

export function Filterbar({ onStatusChange }: FilterbarProps) {
  return (
    <div className={filterItem}>
      {/* Object.values(TODO_STATUS) で、TODO_STATUSの値の配列を作る */}
      {Object.values(TODO_STATUS).map((status) => (
        <div key={status} className={filterCheckboxGroup}>
          <input
            type="checkbox"
            name="status"
            value={status}
            onChange={(e) =>
              onStatusChange(status, e.target.checked)}
            className={checkbox}
          />
          <span>{status}</span>
        </div>
      ))}
    </div>
  );
}
