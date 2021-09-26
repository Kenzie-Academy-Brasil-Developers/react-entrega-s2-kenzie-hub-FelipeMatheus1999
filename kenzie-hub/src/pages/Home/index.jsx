import { Container, Content } from "./styles";
import Button from "../../components/Button";
import { useHistory, Redirect } from "react-router-dom";

const Home = ({ authenticated }) => {
  const history = useHistory();

  const handleLogin = () => {
    history.push("/login");
  }

  const handleRegistration = () => {
    history.push("/registration");
  }

  if (authenticated) {
    return <Redirect to={"/dashboard"}/>
  }

  return (
    <Container>
      <h1>KenzieHub</h1>
      <Content>
        <Button onClick={handleRegistration}>Cadastrar-se</Button>
        <Button whiteSchema onClick={handleLogin}>Login</Button>
      </Content>
    </Container>
  );
};

export default Home;
