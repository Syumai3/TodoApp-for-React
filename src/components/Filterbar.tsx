export function Filterbar({ onStatusChange }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        gap: "10px",
      }}
    >
      <div>
        <input
          type="checkbox"
          name="status"
          value="未着手"
          onChange={(e) => onStatusChange("未着手", e.target.checked)}
        />
        <span>未着手</span>
      </div>
      <div>
        <input
          type="checkbox"
          name="status"
          value="着手中"
          onChange={(e) => onStatusChange("着手中", e.target.checked)}
        />
        <span>着手中</span>
      </div>
      <div>
        <input
          type="checkbox"
          name="status"
          value="完了"
          onChange={(e) => onStatusChange("完了", e.target.checked)}
        />
        <span>完了</span>
      </div>
    </div>
  );
}
