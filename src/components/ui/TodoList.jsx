import React from "react";
import { useState, useRef, useEffect } from "react";

const TodoList = ({ task, toggleTaskCompleted, editTaskCompleted, deleteTaskCompleted }) => {
  // 포커스 효과
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEdit) {
      inputRef.current.focus();
    }
  });

  // 뷰 || 수정 화면 전환
  const [isEdit, setIsEdit] = useState(false);

  const onClickEvent = () => {
    setIsEdit(false);
  };

  // 할일 수정
  const [newName, setNewName] = useState(task.name);

  const onSubmitEvent = (e) => {
    e.preventDefault();

    editTaskCompleted(task.id, newName);
    setIsEdit(false);
  };

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
        <input type="text" className="editInput" ref={inputRef} onChange={(e) => setNewName(e.target.value)} />
        <div>
          <button onClick={onClickEvent}>취소</button>
          <button>저장</button>
        </div>
      </form>
    </li>
  );

  return <>{isEdit ? editingTemplate : viewTemplate}</>;
};

export default TodoList;
