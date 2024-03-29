# 나만의 할일목록 만들기 🧐

JavaScript, React, Styled Components를 활용하여 만든 나만의 할일목록(ToDoList) 프로젝트입니다.
오늘의 날짜를 확인 할 수 있으며, 할일을 입력하면 추가하기 버튼이 활성화되어 할일목록에 추가 할 수 있습니다.
추가된 할일들은 갯수를 확인 할 수 있으며 수정 및 삭제도 가능합니다. 또한 할일 텍스트를 클릭하면 완료된 상태, 미완료된 상태를 표현할 수 있습니다.
최종적으로 전체, 완료, 미완료버튼을 통해서 사용자는 할일들을 편하게 관리할 수 있습니다.

참고 : 깃허브 Branch를 열어보면 각 해당하는 코드들을 확인하실 수 있도록 clip을 해두었습니다.

1. Figma(디자인 툴) 활용

- 레이아웃 및 디자인을 제작

2. 자바스크립트 활용

- 현재 날짜를 표시할 수 있는 코드를 작성
- 초기데이터를 생성하여 로컬스토리지에 저장하고 불러오기
- 초기데이터 반영 및 할일목록 추가, 수정, 삭제 등...에 필요한 매개변수를 받아 if문을 통해 구분하고 스프레드 연산자 등을 통해서 업데이트

3. 리액트 활용

- 디자인한 내용을 Component로 구성함으로써 Component의 관리, 재사용성에 대해서 생각하기
- Array.filter와 Array.map을 활용하여 Component를 반복하고, 필터 버튼을 통해서 원하는 Component만 출력
- useState, Props를 활용하여 할일목록 추가, 삭제, 수정 등... 에 필요한 값을 업데이트
- useRef, useEffect를 활용하여 input태그에 접근하여 포커싱 효과주기
- 삼항 연산자를 활용하여 className, disabled 속성에 CSS효과 적용

4. 스타일 컴포넌트 활용

- Styled Components를 활용하여 Reset CSS를 설정하고 CSS작업 및 반응형 작업하기

## 완성작 미리보기

미리보기 : https://yun7420.github.io/todo_list-2023/

## 사용스택

- JavaScript, React를 사용하여 사이트를 완성합니다.
- Styled-Components를 사용하여 CSS를 관리합니다.
- Git, GitHub을 사용하여 파일을 관리합니다.
- build를 통해 코드와 파일, 이미지, CSS파일등을 패키징 합니다.

## 프로젝트 실행과 마무리

- React를 설치합니다. `npx create-react-app 타이틀` || `create-react-app .(현재폴더)`
- Styled-Components 설치합니다. `npm install styled-components`
- 배포 환경에서 사용할 파일을 생성합니다. `npm run build`
- static 파일 서빙 프로그램 생성합니다. `npm install -g(현재 컴퓨터 모든 경로 사용가능) serve`
- build폴더 기반으로 웹 애플리케이션 서빙합니다. `serve -s build`

## 프로젝트 참고 사이트

1. 로컬스토리지 저장 및 불러오기 (https://studyingych.tistory.com/28)
2. Styled Component Reset CSS 설정하기 (https://lakelouise.tistory.com/319)
3. 깃허브 사이트에 build 하기 (https://velog.io/@nemo/github-page-deploy-%EB%B0%B0%ED%8F%AC)

## 프로젝트를 통해 배운 내용

### JavaScript

1. 초기데이터 생성 및 로컬스토리지 사용

```
  const seedData = () => {
    const seed = [
      { id: "list1", name: "REACT 학습하기", completed: true },
      { id: "list2", name: "VUE 학습하기", completed: false },
      { id: "list3", name: "NODE 학습하기", completed: false },
      { id: "list3", name: "NEXT.JS 학습하기", completed: false },
    ];

    setData(seed);
  };

  const setData = (seed) => {
    localStorage.setItem("todoList", JSON.stringify(seed));
  };

  if (!JSON.parse(localStorage.getItem("todoList"))) {
    seedData();
  }
```

2. 초기데이터 추가, 토글, 수정, 삭제

```
  // 추가
  const addTask = (name) => {
    const newTask = { id: `list-${new Date()}`, name, completed: false };
    const newTasks = [...tasks, newTask];

    setData(newTasks);
    setTasks(newTasks);
  };

  // 토글
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
```

### Styled-Component

1. GlobalStyles로 Reset CSS 작성

```
  // 참고 : createGlobalStyle 불러오기 (GlobalStyles.js에 삽입)
  import { createGlobalStyle } from "styled-components";

  // 참고 : GlobalStyles 불러오기 (index.js에 삽입)
  import GlobalStyles from "./styles/GlobalStyles";
```

2. Styled-Component 반응형 코드 작성하기

```
  export const Wraaper = styled.div`
    width: 500px;
    height: 600px;

    @media only screen and (max-width: 600px) {
      width: 90%;
    }
  `;
```

### React

1. fillter, map, Props 활용

```
  // 필터 데이터
  const FilterMap = {
    전체 : () => true,
    완료 :  (task) => task.completed,
    미완료 : (task) => !task.completed
  }

  // 리스트 컴포넌트에 목록, 토글, 수정, 삭제 props 및 필터 리스트 생성
  const tasksList = tasks.filter(FilterMap[filter]).map((task) => (
    <TodoList
      key={task.id}
      task={task}
      toggleTaskCompleted={toggleTaskCompleted}
      editTaskCompleted={editTaskCompleted}
      deleteTaskCompleted={deleteTaskCompleted}
    />
  ));
```

## 프로젝트를 하면서 느낀점

혼자 만들어본 첫 프로젝트이기 떄문에 서툴렀던 부분이 많았습니다.
TodoList 컴포넌트 안에 토글, 수정, 삭제에 관련된 함수들을 넣어서 App.js파일을 좀 더 심플하게 만들어보고 싶었지만 setState로 State를 업데이트하여 State가 필요한 컴포넌트에 업데이트하니 코드가 더 길어져서 반영하지 않았습니다. 후에 알아보니 프로젝트의 전체적인 흐름을 반영하는 코드들은 각 컴포넌트에 분배하지 않는 방법이 더 좋다는 말이 있어서 그부분에 대해서 다시한번 생각해보는 시간을 가질 수 있었습니다. (Stateful, Stateless 컴포넌트에 대해서 알아보면 좋을 것 같습니다.)

