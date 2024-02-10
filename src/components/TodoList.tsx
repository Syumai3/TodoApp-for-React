import { Todo } from "./Todo";

export function TodoList({ todos }) {
  return (
    <div>
      {todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
    </div>
  );
}

export default TodoList;
