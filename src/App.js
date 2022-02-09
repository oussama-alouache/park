import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./pages/user";
import Adduser from "./pages/adduser";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={User} />
        <Route path="/adduser" component={Adduser} />
      </Switch>
    </Router>
  );
}

export default App;
