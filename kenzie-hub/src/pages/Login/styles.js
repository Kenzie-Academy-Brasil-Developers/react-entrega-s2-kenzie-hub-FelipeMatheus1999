import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h1 {
    text-align: center;
    text-shadow: 0px 0px 4px var(--purple2);
    color: var(--purple);
    font-size: 60px;
  }
`;

export const Content = styled.div`
  background: var(--gray);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 35px;
  margin-bottom: 240px;
  padding: 20px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      color: var(--purple2);
      width: 332px;
      height: 48px;
      font-size: 22px;
      border-radius: 10px;
      border: none;
      padding: 5px 0 0 10px;
      margin-top: 20px;
    }

    input + input {
      margin-bottom: 10px;
    }

    .erros {
      font-weight: bold;
      color: var(--red);
      margin: 0;
    }

    p {
      font-weight: bold;
      margin-bottom: 20px;
    }
  }
`;
