import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import AuthForm from "./components/AuthForm/AuthForm";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={AuthForm} />
        <Route exact path="/home" component={Dashboard} />
        <Route exact path="/users" />
      </Switch>
    </div>
  );
}

export default App;
