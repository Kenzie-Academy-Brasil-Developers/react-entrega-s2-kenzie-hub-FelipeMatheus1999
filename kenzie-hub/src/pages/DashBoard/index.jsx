import Button from "../../components/Button";
import * as yup from "yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Content, GroupCard, Card } from "./styles";
import api from "../../services/api";
import { Redirect } from "react-router";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";

const DashBoard = ({ authenticated }) => {
  const [techs, setTechs] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Kenziehub:token")) || ""
  );
  const [user] = useState(jwtDecode(token));

  const schema = yup.object().shape({
    title: yup.string().required("Technology required"),
    status: yup.string().required("Status required"),
  });

  const renderTechs = () => {
    api
      .get(`/users/${user.sub}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setTechs(res.data.techs);
        renderTechs();
      });
  };

  const handleTechsRegister = (data) => {
    api
      .post(`/users/techs`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => toast.success("Tecnologia adicionada"));
  };

  const handleTechsRemove = (e) => {
    const id = e.target.id;

    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => toast.success("Tecnologia removida"));
  };

  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const mapTechs = techs.map((value) => {
    return (
      <Card key={value.id}>
        <h1>{value.title}</h1>
        <span>{value.status}</span>
        <hr></hr>
        <Button id={value.id} onClick={handleTechsRemove}>
          remove
        </Button>
      </Card>
    );
  });

  if (!authenticated) {
    return <Redirect to={"/login"} />;
  }

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit(handleTechsRegister)}>
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
          <Button type="submit">Adding</Button>
          <Button onClick={renderTechs}>Show techs</Button>
        </form>
      </Content>
      <GroupCard>{mapTechs}</GroupCard>
    </Container>
  );
};

export default DashBoard;
