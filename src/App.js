import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./pages/user";
import Adduser from "./pages/adduser";
import Edituser from "./pages/edituser";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={User} />
        <Route path="/adduser" component={Adduser} />
        <Route path="/edituser/:id" component={Edituser} />

      </Switch>
    </Router>
  );
}

export default App;
