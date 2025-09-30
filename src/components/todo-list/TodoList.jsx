import Todo from "./Todo";
import TodoInput from "./TodoInput";
import useTodos from "../../hooks/useTodos";

const TodoList = () => {
  const { todos, addTodo, deleteTodo, modifyTodo } = useTodos();

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <ul>
        {todos.map((el) => (
          <Todo key={el.id} todo={el} deleteTodo={deleteTodo} modifyTodo={modifyTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
