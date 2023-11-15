import React from "react";
import { useState } from "react";
import { List, ListLength } from "../../styles/Style"

// 컴포넌트
import Title from "../ui/Title";
import FilterButton from "../ui/FilterButton";
import Form from "../ui/Form";
import TodoList from "../ui/TodoList";

// 초기 데이터
const seedData = () => {
  const seed = [
    { id: "list1", name: "REACT 학습하기", completed: false },
    { id: "list2", name: "VUE 학습하기", completed: false },
    { id: "list3", name: "NODE 학습하기", completed: false },
  ];

  setData(seed);
};

const setData = (seed) => {
  localStorage.setItem("todoList", JSON.stringify(seed));
};

if (!JSON.parse(localStorage.getItem("todoList"))) {
  seedData();
}

const Main = () => {
  // 체크
  const toggleTaskCompleted = (id) => {
    const toggleTask = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }

      return task;
    });

    setData(toggleTask);
    setTasks(toggleTask);
  };

  // 수정
  const editTaskCompleted = (id, newName) => {
    const editTask = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, name: newName };
      }

      return task;
    });

    setData(editTask);
    setTasks(editTask);
  };

  // 삭제
  const deleteTaskCompleted = (id) => {
    const deleteTask = tasks.filter((task) => {
      return task.id !== id;
    });

    setData(deleteTask);
    setTasks(deleteTask);
  };

  // 할일 리스트 생성
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("todoList"))
  );

  const tasksList = tasks.map((task) => (
    <TodoList task={task} toggleTaskCompleted={toggleTaskCompleted} editTaskCompleted={editTaskCompleted} deleteTaskCompleted={deleteTaskCompleted} />
  ));

  return (
    <>
      <Title />
      <Form setData={setData} tasks={tasks} setTasks={setTasks} />
      <FilterButton></FilterButton>
      <ListLength>총 {tasksList.length}개 있습니다.</ListLength>
      <List>{tasksList}</List>
    </>
  );
};

export default Main;
