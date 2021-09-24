import styled from "styled-components";
import ImageRegistration from "../../assets/imagem-tela-de-cadastro.svg";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    background: url(${ImageRegistration}) no-repeat center, var(--gray);
    background-size: contain;
  }
`;

export const Content = styled.div`
  background: var(--lilac);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 36px;
    width: 220px;
    color: var(--purple);
  }

  h1 + h1 {
    width: 250px;
    font-size: 44px;
  }
`;
