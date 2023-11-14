import React from "react";
import styled from "styled-components";

// components
import Main from "./components/section/Main";
// styles
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(120deg, rgba(255, 255, 255, 1) 0%, rgba(47, 151, 255, 1) 100%);
`;

const Wraaper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 1.5rem;

  width: 500px;
  height: 600px;
  background-color: #fff;
  border-radius: 1rem;

  box-shadow: 5px 5px 15px #0057ae;
`;

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
