import Home from "../pages/Home";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import DashBoard from "../pages/DashBoard";
import { Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/registration">
        <Registration />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/dashboard">
        <DashBoard />
      </Route>
    </Switch>
  );
};

export default Routes;
