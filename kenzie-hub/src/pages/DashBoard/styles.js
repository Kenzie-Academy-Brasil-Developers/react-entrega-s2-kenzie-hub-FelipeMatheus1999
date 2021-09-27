import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

export const Content = styled.div`
  width: 20%;
  padding: 25px 0 0 10px;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    input {
      width: 90%;
      max-width: 250px;
      height: 48px;
      font-size: 20px;
      border: none;
      border-radius: 7px;
      padding: 5px 0 0 10px;
      margin: 5px 0;
    }

    button {
      width: 200px;
    }

    div {
      background: var(--gray);
      width: 15%;
      height: 10%;
    }
  }
`;

export const GroupCard = styled.div`
  background: var(--purple2);
  width: 80%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  border-left: 3px solid var(--purple);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 20px 0 0 10px;
  overflow-y: scroll;
`;

export const Card = styled.div`
  background: var(--gray);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 120px;
  height: 120px;
  border: 3px solid var(--purple);
  border-radius: 10px;
  margin: 5px;
  padding-top: 5px;

  h1 {
    color: var(--purple2);
    font-size: 18px;
    text-transform: capitalize;
  }

  hr {
    border-top: 1px solid var(--purple);
    border-bottom: 1px solid var(--purple2);
    width: 90%;
  }

  span {
    font-weight: bold;
  }

  button {
    height: 30px;
    font-size: 16px;
  }
`;
