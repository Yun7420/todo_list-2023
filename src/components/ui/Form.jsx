import React from "react";
import { useState, useRef, useEffect } from "react";
// Style
import styled from "styled-components";
// Form Style
const FormBox = styled.form`
  padding-top: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    padding: 0.5rem 1rem;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
  }

  button {
    padding: 0.5rem 0;
    width: 100%;
    background-color: #2c86da;
    border-radius: 0.5rem;
    color: white;
  }

  button:disabled {
    opacity: 50%;
  }
`;

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
    <FormBox onSubmit={onSubmitEvent}>
      <input type="text" value={name} onChange={onChangeEvent} ref={inputRef} placeholder="할일을 입력해주세요." />
      <button type="submit" disabled={!name.trim()}>추가하기</button>
    </FormBox>
  );
};

export default Form;
