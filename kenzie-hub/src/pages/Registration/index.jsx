import Button from "../../components/Button";
import axios from "axios";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Background, Content } from "./styles";
import { Link } from "react-router-dom";

const Registration = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .max(20, "Máximo 20 caracteres"),
    email: yup.string().required("Email obrigatório").email(),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
      ),
    bio: yup.string().required("Email obrigatório"),
    course_module: yup.string().required("Email obrigatório"),
    contact: yup.string().required("Contato obrigatório")
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegister = (data) => {
    axios
    .post("https://kenziehub.me/users", data)
    .then(() => history.push("/login"))
    .catch((err) => console.log(err));
    console.log(data)
  };

  return (
    <Container>
      <Background />
      <Content>
        <div className="formatText">
          <h1>Cadastro</h1>
        </div>
        <form onSubmit={handleSubmit(handleRegister)}>
          <input placeholder="Nome" type="text" {...register("name")} />
          <input placeholder="Email" type="email" {...register("email")} />
          <input placeholder="Senha" type="password" {...register("password")} />
          <input placeholder="Bio" type="text" {...register("bio")} />
          <input placeholder="Modulo" type="text" {...register("course_module")} />
          <input placeholder="Contato" type="text" {...register("contact")} />
          <p>
            Ja é cadastrado? faça seu <Link to="/login">login.</Link>
          </p>
          <Button type="submit">Cadastrar</Button>
        </form>
      </Content>
    </Container>
  );
};

export default Registration;
