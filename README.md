# 나만의 할일목록 만들기 🧐

프론트엔드(Front-End)과정을 듣고 배운 내용을 바탕으로 나만의 할일목록(ToDoList)를 제작하는 시간을 가져보았습니다.
나만의 할일목록(ToDoList)를 제작하며 자바스크립트, 리액트를 좀 더 능숙하게 사용할 수 있었습니다.

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

- createGlobalStyle
  import { createGlobalStyle } from "styled-components";
  import reset from "styled-reset";
