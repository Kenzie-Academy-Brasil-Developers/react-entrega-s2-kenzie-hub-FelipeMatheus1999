import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Content = styled.div`
  width: 70%;
  max-width: 650px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      width: 90%;
      height: 48px;
      font-size: 20px;
      border: none;
      border-radius: 7px;
      padding: 5px 0 0 10px;
      margin: 5px 0;
    }
  }
`;

export const GroupCard = styled.div`
  background: var(--purple2);
  max-width: 1000px;
  width: 80%;
  height: 50%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 10px 0 0 10px;
  border: 5px solid var(--purple);
  border-radius: 15px;
  overflow-y: scroll;
`;

export const Card = styled.div`
  background: var(--gray);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100px;
  height: 120px;
  border: 3px solid var(--purple);
  border-radius: 10px;
  margin: 10px;
`;

// terminar o botão
// export const ButtonLogOff = styled.button`
//   background: var(--purple2);
//   color: var(--lilac);
//   font-size: 20px;
//   font-weight: bold;
//   width: 15%;
//   height: 5%;
//   position: relative;
//   border: none;
//   border-radius: 7px;
// `;
