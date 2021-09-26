import Button from "../../components/Button";
import * as yup from "yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Content, GroupCard, Card, ButtonLogOff } from "./styles";
import api from "../../services/api";
import { Redirect } from "react-router";
import { toast } from "react-toastify";

const DashBoard = ({ authenticated }) => {
  const [techs, setTechs] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Kenziehub:token")) || ""
  );

  const schema = yup.object().shape({
    title: yup.string().required("Technology required"),
    status: yup.string().required("Status required"),
  });

  // Terminar essa função / não está trazendo as tecnologia do usuário
  // const renderTechs = () => {
  //   api
  //     .get("/users/techs", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((res) => {
  //       setTechs(res.data);
  //       return console.log(techs);
  //     });
  // };

  const handleTechsRegiste = (data) => {
    if (!data) {
      return toast.error("preencha os campos");
    }

    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => toast.success("Tecnologia adicionada"));
  };

  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  if (!authenticated) {
    return <Redirect to={"/login"} />;
  }

  return (
    <Container>
      <Content>
        {/* <ButtonLogOff>Lof Off<ButtonLogOff/> */}
        <form onSubmit={handleSubmit(handleTechsRegiste)}>
          <input
            type="text"
            placeholder="Write a technology"
            {...register("title")}
          />
          <input
            type="text"
            placeholder="Your status"
            {...register("status")}
          />
          <Button type="submit">Register</Button>
        </form>
      </Content>
      <GroupCard></GroupCard>
    </Container>
  );
};

export default DashBoard;
