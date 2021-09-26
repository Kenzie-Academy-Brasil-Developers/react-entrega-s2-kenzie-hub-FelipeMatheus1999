import Home from "../pages/Home";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import DashBoard from "../pages/DashBoard";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Kenziehub:token"));

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Home authenticated={authenticated} />
      </Route>

      <Route path="/registration">
        <Registration authenticated={authenticated} />
      </Route>

      <Route path="/login">
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>

      <Route path="/dashboard">
        <DashBoard authenticated={authenticated} />
      </Route>
    </Switch>
  );
};

export default Routes;
