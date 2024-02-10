import { Todo } from "./Todo";

const mockTodos = [
  { id: 1, title: "牛乳を買う", status: "着手中" },
  { id: 2, title: "卵を買う", status: "完了" },
  { id: 3, title: "パンを買う", status: "未着手" },
];

export function TodoList() {
  return (
    <div>
      {mockTodos.map((todo) => <Todo key={todo.id} todo={todo} />)}
    </div>
  );
}

export default TodoList;
