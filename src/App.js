import React from "react";
// Components
import Main from "./components/section/Main";
// Style
import styled from "styled-components";
// Container Style
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(47, 151, 255, 1) 100%
  );
`;

const App = () => {
  return (
    <Container>
      <Main />
    </Container>
  );
};

export default App;
