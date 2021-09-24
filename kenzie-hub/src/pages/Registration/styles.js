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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 700px;

  form {
    background: var(--gray);
    width: 406px;
    height: 680px;  
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px; 
    border-radius: 35px; 
    margin-bottom: 60px;
    
    input {
      color: var(--purple2);
      width: 332px;
      height: 48px;
      font-size: 22px;
      border-radius: 10px;
      border: none;
      margin: 20px;
      padding: 5px 0 0 10px;
    }

    p {
      margin: 10px 0 5px 0;
      font-weight: 600;
    }

    .erros {
      margin: 0;
    }
  }

  h1 {
    text-shadow: 0px 0px 4px var(--purple2);
    text-align: center;
    font-size: 50px;
    width: 300px;
    color: var(--purple);

  }
`;
