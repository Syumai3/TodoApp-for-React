export function Filterbar() {
  const handleStatusChange = (e) => {
    console.log("未着手のみ表示する");
  };
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
          onChange={(e) => handleStatusChange(e.target.checked)}
        />
        <span>未着手</span>
      </div>
      <div>
        <input
          type="checkbox"
          name="status"
          value="着手中"
          onChange={(e) => handleStatusChange(e.target.checked)}
        />
        <span>着手中</span>
      </div>
      <div>
        <input
          type="checkbox"
          name="status"
          value="完了"
          onChange={(e) => handleStatusChange(e.target.checked)}
        />
        <span>完了</span>
      </div>
    </div>
  );
}
