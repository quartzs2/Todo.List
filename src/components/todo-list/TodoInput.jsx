import { useRef } from "react";

const TodoInput = ({ addTodo }) => {
  const inputRef = useRef(null);

  const handleAddTodo = () => {
    addTodo({ content: inputRef.current.value });
    inputRef.current.value = "";
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleAddTodo}>추가</button>
    </>
  );
};

export default TodoInput;
