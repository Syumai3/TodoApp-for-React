import { Todo } from "./Todo";

export function TodoList({ todos, onDelete }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </div>
  );
}

export default TodoList;
