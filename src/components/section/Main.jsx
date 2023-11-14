import React from "react";
import styled from "styled-components";

// components
import Title from "../ui/Title";
import FilterButton from "../ui/FilterButton";
import Form from "../ui/Form";
import TodoList from "../ui/TodoList";

// 초기 데이터 생성
const seedData = () => {
  const seed = [
    { id: "list1", name: "HTML 학습하기", completed: false },
    { id: "list2", name: "CSS 학습하기", completed: false },
    { id: "list3", name: "JAVASCRIPT 학습하기", completed: false },
    { id: "list4", name: "REACT 학습하기", completed: false },
  ];

  setData(seed);
};

const setData = (seed) => {
  localStorage.setItem("todoList", JSON.stringify(seed));
};

if(!JSON.parse(localStorage.getItem("todoList"))) {
  seedData();
}

const Main = () => {
  return <Title></Title>;
};

export default Main;
