import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import AuthForm from "./components/AuthForm/AuthForm";
import Dashboard from "./components/Dashboard/Dashboard";
import InvoiceDoc from "./components/InvoiceDoc/InvoiceDoc";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={AuthForm} />
        <Route exact path="/home" component={Dashboard} />
        <Route exact path="/invoice/:id?" component={InvoiceDoc} />
        {/* <Route exact path="/users" /> */}
      </Switch>
    </div>
  );
}

export default App;
