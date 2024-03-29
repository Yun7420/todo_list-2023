import React from "react";
import { useState, useRef, useEffect } from "react";

const TodoList = ({ task, toggleTaskCompleted, editTaskCompleted, deleteTaskCompleted }) => {
  // 포커스 효과
  const inputRef = useRef(null);

  // 뷰 || 수정 화면 전환
  const [isEdit, setIsEdit] = useState(false);

  const onClickEvent = () => {
    setIsEdit(false);
    setNewName(task.name);
  };

  // 할일 수정
  const [newName, setNewName] = useState(task.name);

  const onSubmitEvent = (e) => {
    e.preventDefault();

    setIsEdit(false);
    editTaskCompleted(task.id, newName);
  };

  useEffect(() => {
    if (isEdit) {
      inputRef.current.focus();
    }
  });

  const viewTemplate = (
    <li className="viewBox">
      <label>
        <input type="checkbox" className="viewInput" onChange={() => toggleTaskCompleted(task.id)} />
        <span className={task.completed ? "line" : ""}>{task.name}</span>
      </label>
      <div>
        <button onClick={() => setIsEdit(true)}>수정</button>
        <button onClick={() => deleteTaskCompleted(task.id)}>삭제</button>
      </div>
    </li>
  );

  const editingTemplate = (
    <li className="editBox">
      <form onSubmit={onSubmitEvent}>
        <input type="text" className="editInput" value={newName} ref={inputRef} onChange={(e) => setNewName(e.target.value)} />
        <div>
          <button type="button" onClick={onClickEvent}>취소</button>
          <button type="submit" disabled={task.name === newName || !newName}>저장</button>
        </div>
      </form>
    </li>
  );

  return <>{isEdit ? editingTemplate : viewTemplate}</>;
};

export default TodoList;
