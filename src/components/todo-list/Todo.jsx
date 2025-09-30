const Todo = ({ todo, deleteTodo }) => {
  const handleDeleteTodo = () => {
    deleteTodo({ id: todo.id });
  };

  return (
    <li>
      {todo.content}
      <button onClick={handleDeleteTodo}>삭제</button>
    </li>
  );
};

export default Todo;
