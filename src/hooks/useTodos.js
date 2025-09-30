import { useState } from "react";

const useTodos = () => {
  const [todos, setTodos] = useState([
    {
      id: Number(new Date()),
      content: "안녕하세요",
    },
  ]);

  const addTodo = ({ content }) => {
    const newTodo = {
      id: Number(new Date()),
      content: content,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodo = ({ id }) => {
    setTodos((prev) => prev.filter((el) => el.id !== id));
  };

  const modifyTodo = ({ id, content }) => {
    setTodos((prev) => prev.map((el) => (el.id === id ? { ...el, content: content } : el)));
  };

  return { todos, addTodo, deleteTodo, modifyTodo };
};

export default useTodos;
