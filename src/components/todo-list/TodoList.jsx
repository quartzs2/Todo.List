import { useState } from "react";
import Todo from "./Todo";
import TodoInput from "./TodoInput";

const TodoList = () => {
  const [todo, setTodo] = useState([
    // {
    //   id: Number(new Date()),
    //   content: "안녕하세요",
    // },
  ]);

  return (
    <div>
      <TodoInput setTodo={setTodo} />
      <ul>
        {todo.map((el) => (
          <Todo key={el.id} todo={el} setTodo={setTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
