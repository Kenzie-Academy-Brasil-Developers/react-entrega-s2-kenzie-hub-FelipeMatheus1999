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
  width: 406px;
  height: 265px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 35px;
  margin-bottom: 240px;

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
      margin-bottom: 25px;
      padding: 5px 0 0 10px;
    }

    p {
      font-weight: bold;
      margin-bottom: 5px;
    }
  }
`;
