import Button from "../../components/Button";
import * as yup from "yup";
import { useHistory, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Background, Content } from "./styles";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";

const Registration = ({ authenticated }) => {
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
    bio: yup.string().required("Bio obrigatório"),
    course_module: yup.string().required("Modulo obrigatório"),
    contact: yup.string().required("Contato obrigatório"),
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
    api
      .post("/users", data)
      .then(() => {
        toast.success("Sucesso ao criar conta");
        return history.push("/login");
      })
      .catch(() => toast.error("Tente outro email"));
  };

  if (authenticated) {
    return <Redirect to={"/dashboard"} />;
  }

  return (
    <Container>
      <Background />
      <Content>
        <div className="formatText">
          <h1>Cadastre-se</h1>
        </div>
        <form onSubmit={handleSubmit(handleRegister)}>
          <input placeholder="Nome" type="text" {...register("name")} />
          {errors.name?.message && <p className="error">Campo obrigatório</p>}
          <input placeholder="Email" type="email" {...register("email")} />
          {errors.email?.message && <p className="error">Campo obrigatório</p>}
          <input
            placeholder="Senha"
            type="password"
            {...register("password")}
          />
          {errors.password?.message && (
            <p className="error">Campo obrigatório</p>
          )}
          <input placeholder="Bio" type="text" {...register("bio")} />
          {errors.bio?.message && <p className="error">Campo obrigatório</p>}
          <input
            placeholder="Modulo"
            type="text"
            {...register("course_module")}
          />
          {errors.course_module?.message && (
            <p className="error">Campo obrigatório</p>
          )}
          <input placeholder="Contato" type="text" {...register("contact")} />
          {errors.contact?.message && (
            <p className="error">Campo obrigatório</p>
          )}
          <Button type="submit">Cadastrar</Button>
          <p>
            Ja é cadastrado? faça seu <Link to="/login">login.</Link>
          </p>
        </form>
      </Content>
    </Container>
  );
};

export default Registration;
