import { Container, Content } from "./styles";
import axios from "axios";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email(),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        "^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[!@#$&*%?^-])(?=.*?[0-9]).{8,}$"
      ),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = (data) => {
    axios
      .post("https://kenziehub.me/sessions", data)
      .then(() => history.push("/dashboard"))
      .catch((err) => console.log(err));
    console.log(data);
  };

  return (
    <Container>
        <h1>KenzieHub</h1>
      <Content>
        <form onSubmit={handleSubmit(handleLogin)}>
          <input placeholder="Email" type="text" {...register("email")} />
          <input
            placeholder="Senha"
            type="password"
            {...register("password")}
          />
          <p>
            Não tem conta uma? Cadastre-se <Link to="/registration">aqui.</Link>
          </p>
          <Button type="submit" whiteSchema>
            Login
          </Button>
        </form>
      </Content>
    </Container>
  );
};

export default Login;
