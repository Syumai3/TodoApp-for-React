import { Todo } from "./Todo";

export function TodoList({ todos, onDelete, onChangeStatus }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onDelete={() => onDelete(todo.id)}
          onChangeStatus={onChangeStatus}
        />
      ))}
    </div>
  );
}

export default TodoList;
