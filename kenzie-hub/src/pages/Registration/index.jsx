import Button from "../../components/Button";
import { Container, Background, Content } from "./styles";

const Registration = () => {
  return (
    <Container>
      <Background/>
      <Content>
          <h1>Bem-vindo</h1>
          <h1>a KenzieHub</h1>
          <form>
              <input/>
              <input/>
              <input/>
              <input/>
              <Button>Register</Button>
          </form>
      </Content>
    </Container>
  );
};

export default Registration;
