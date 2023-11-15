import React from "react";
import { useState, useRef, useEffect } from "react";
import { FormBox } from "../../styles/Style"

const Form = ({ setData, tasks, setTasks }) => {
  // 포커스 효과
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // 할일 추가
  const [name, setName] = useState("");

  const onChangeEvent = (e) => {
    setName(e.target.value);
  };

  const onSubmitEvent = (e) => {
    e.preventDefault();

    addTask(name);
    setName("");
  };

  const addTask = (name) => {
    const newTask = { id: `list-${new Date()}`, name, completed: false };
    const newTasks = [...tasks, newTask];

    setData(newTasks);
    setTasks(newTasks);
  };

  return (
    <FormBox onSubmit={onSubmitEvent} style={{ marginTop: "1.5rem" }}>
      <input type="text" placeholder="할일을 입력해주세요." ref={inputRef} value={name} onChange={onChangeEvent} />
      <button type="submit" disabled={!name.trim()}>추가하기</button>
    </FormBox>
  );
};

export default Form;
