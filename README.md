# 나만의 할일목록 만들기 🧐

프론트엔드(Front-End)과정을 듣고 배운 내용을 바탕으로 나만의 할일목록(ToDoList)를 제작하는 시간을 가져보았습니다.

1. Figma(디자인 툴) 활용

- 레이아웃 및 디자인을 제작

2. 자바스크립트 활용

- 현재 날짜를 표시할 수 있는 코드를 작성
- 초기데이터를 생성하여 로컬스토리지에 저장하고 불러오기
- 초기데이터 추가, 수정, 삭제 등...에 필요한 매개변수를 받아 if문을 통해 구분하고 스프레드 연산자 등을 통해서 업데이트

3. 리액트 활용

- 디자인한 내용을 component로 구성함으로써 component의 관리, 재사용성에 대해서 생각하기
- Array.filter와 Array.map을 활용하여 component를 반복하고, 필터 버튼을 통해서 원하는 component만 출력
- useState, props를 활용하여 초기데이터 추가, 삭제, 수정 등... 에 필요한 값을 업데이트
- useRef, useEffect를 활용하여 input태그에 접근하여 포커싱 효과주기
- 삼항 연산자를 활용하여 className, disabled 속성에 css효과 적용

4. 스타일 컴포넌트 활용

- styled components를 활용하여 reset css를 설정하고 css작업 및 반응형 작업하기

## 완성작 미리보기

미리보기 : 링크를 준비중입니다.

## 사용스택

- javascript, react를 사용하여 사이트를 완성합니다.
- styled-components를 사용하여 css를 관리합니다.
- git, github을 사용하여 파일을 관리합니다.
- build를 통해 코드와 파일, 이미지, css파일등을 패키징 합니다.

## 프로젝트 실행과 마무리

- react를 설치합니다. `npx create-react-app 타이틀` || `create-react-app .(현재폴더)`
- styled-components 설치합니다. `npm install styled-components`
- 배포 환경에서 사용할 파일을 생성합니다. `npm run build`
- static 파일 서빙 프로그램 생성합니다. `npm install -g(현재 컴퓨터 모든 경로 사용가능) serve`
- build폴더 기반으로 웹 애플리케이션 서빙합니다. `serve -s build`

## 프로젝트를 통해 배운 내용

### Javascript

1. 현재날짜 생성

- 사용 코드

```
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate() ;
```

- 적용 코드

```
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1;
  const todayDate = today.getDate();

  const monthList = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
  const todayTextMonth = monthList[todayMonth];
```

2. 초기데이터 생성 및 로컬스토리지 사용

- 사용할 코드

```
  // 로컬스토리지 저장 및 불러오기
  localStorage.setItem(key, value);
  localStorage.getItem(key);

  // object > string || string > object (로컬스토리지에는 object값을 저장할 수 없기 때문이다.)
  JSON.stringify(value)
  JSON.parse(key)
```

- 적용 코드

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

### Styled-Component

1. GlobalStyles로 reset css 작성

```

createGlobalStyle 불러오기 (GlobalStyles.js에 삽입)
import { createGlobalStyle } from "styled-components";

// GlobalStyles 불러오기 (index.js에 삽입)
import GlobalStyles from "./styles/GlobalStyles";

```

2. styled-component 반응형 코드 작성하기

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

1. map 함수 활용

```

const listItems = numbers.map((number, index) => {
console.log(number, index);
});

const tasksList = tasks.map((task) => (
<TodoList key={task.id} task={task} />
));

```

## 프로젝트를 하면서 아쉬운점

```

```
