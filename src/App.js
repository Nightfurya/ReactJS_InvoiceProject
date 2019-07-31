import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import AuthForm from "./components/AuthForm/AuthForm";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Switch>
          <Route exact path="/" component={AuthForm} />
          <Route exact path="/home" />
          <Route exact path="/users" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
