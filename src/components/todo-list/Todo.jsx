import { useState } from "react";

const Todo = ({ todo, deleteTodo, modifyTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(todo.content);

  const handleDeleteTodo = () => {
    deleteTodo({ id: todo.id });
  };

  const handleModifyTodo = () => {
    if (isEditing) {
      modifyTodo({ id: todo.id, content: editedContent });
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
        />
      ) : (
        todo.content
      )}
      <div>
        <button onClick={handleModifyTodo}>{isEditing ? "수정완료" : "수정"}</button>
        <button onClick={handleDeleteTodo}>삭제</button>
      </div>
    </li>
  );
};

export default Todo;
