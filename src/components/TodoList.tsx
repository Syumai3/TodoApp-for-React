import { TodoType } from "../types/todoTypes";
import { Todo } from "./Todo";

interface TodoListProps {
  todos: TodoType[];
  onDelete: (id: number) => void;
  onChangeStatus: (id: number, newStatus: TodoType["status"]) => void;
}

export function TodoList({ todos, onDelete, onChangeStatus }: TodoListProps) {
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
