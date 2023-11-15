import React from "react";

// 컴포넌트
import Main from "./components/section/Main"; 
// 스타일
import { Container, Wraaper } from "./styles/Style";

const App = () => {
  return (
    <Container>
      <Wraaper>
        <Main />
      </Wraaper>
    </Container>
  );
};

export default App;
