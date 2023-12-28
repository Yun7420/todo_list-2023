import styled from "styled-components";

// App 스타일
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(47, 151, 255, 1) 100%
  );
`;

export const Wraaper = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 1.5rem;

  width: 500px;
  height: 90%;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 5px 5px 15px #0057ae;

  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

// Main 스타일

// Title 스타일
export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 1.5rem;
  border-bottom: 1px solid #ccc;

  > div:nth-of-type(1) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2c86da;
  }

  @media only screen and (max-width: 300px) {
    flex-direction: column;
  }
`;

// Form 스타일
export const FormBox = styled.form`
  margin-top: 1.5rem;

  input {
    padding: 0.5rem 1rem;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
  }

  button {
    margin-top: 0.5rem;
    padding: 0.5rem 0;
    width: 100%;
    background-color: #2c86da;
    border-radius: 0.5rem;
    color: #fff;
  }

  button:disabled {
    opacity: 50%;
  }
`;

// FilterButton 스타일
export const FilterBox = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;

  button {
    padding: 0.5rem 0;
    flex: 1;
    background-color: #555;
    border-radius: 0.5rem;
    color: #fff;
  }

  .active {
    background-color: #000;
  }
`;

// TodoList 스타일
export const ListLength = styled.h2`
  margin: 1.5rem 0;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow-y: scroll;

  .viewBox {
    input {
      display: none;
    }

    span {
      padding: 0.3rem;
      width: 100%;
    }

    .line {
      text-decoration: line-through;
    }

    div {
      margin-top: 0.5rem;
      display: flex;
      gap: 0.5rem;

      button {
        flex: 1;
        padding: 0.3rem;
        border-radius: 0.5rem;
      }

      button:nth-of-type(1) {
        border: 1px solid #222;
      }

      button:nth-of-type(2) {
        background-color: red;
        color: #fff;
      }
    }
  }

  .editBox {
    input {
      padding: 0.3rem;
      width: 100%;
      border: 1px solid #ccc;
      border-radius: 0.2rem;
    }

    div {
      margin-top: 0.5rem;
      display: flex;
      gap: 0.5rem;

      button {
        flex: 1;
        padding: 0.3rem;
        border-radius: 0.5rem;
      }

      button:nth-of-type(1) {
        border: 1px solid #222;
      }

      button:nth-of-type(2) {
        background-color: #2c86da;
        color: #fff;
        opacity: 100%;
      }

      button:nth-of-type(2):disabled {
        opacity: 50%;
      }
    }
  }
`;
