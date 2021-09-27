import { Container, Content } from "./styles";
import * as yup from "yup";
import { useHistory, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import api from "../../services/api";
import { toast } from "react-toastify";

const Login = ({ authenticated, setAuthenticated }) => {
  const schema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email(),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        "^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[!@#$&*%?^-])(?=.*?[0-9]).{8,}$"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = (data) => {
    api
      .post("/sessions", data)
      .then((res) => {
        const { token } = res.data;
        localStorage.clear();
        localStorage.setItem("@Kenziehub:token", JSON.stringify(token));
        setAuthenticated(true);
      })
      .catch(() => toast.error("Email ou senha invalido"));
  };

  if (authenticated) {
    return <Redirect to={"/dashboard"} />;
  }

  return (
    <Container>
      <h1>KenzieHub</h1>
      <Content>
        <form onSubmit={handleSubmit(handleLogin)}>
          <input placeholder="Email" type="text" {...register("email")} />
          {errors.email?.message && <p className="erros">Email obrigatório</p>}
          <input
            placeholder="Senha"
            type="password"
            {...register("password")}
          />
          {errors.password?.message && (
            <p className="erros">Senha obrigatória</p>
          )}
          <Button type="submit" whiteSchema>
            Login
          </Button>
          <p>
            Não tem uma conta? Cadastre-se <Link to="/registration">aqui.</Link>
          </p>
        </form>
      </Content>
    </Container>
  );
};

export default Login;
