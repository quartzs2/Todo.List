const Todo = ({ todo, setTodo }) => {
  return (
    <li>
      {todo.content}
      <button
        onClick={() => {
          setTodo((prev) => prev.filter((el) => el.id !== todo.id));
        }}
      >
        삭제
      </button>
    </li>
  );
};

export default Todo;
