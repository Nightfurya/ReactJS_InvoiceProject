import React, { Component } from "react";
import { Redirect } from "react-router";
import "./AuthForm.scss";
import firebase from "../src/Firebase/firebase";

class AuthForm extends Component {
  state = {
    redirect: false
  };

  makeSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form className="auth-form">
          <h3>INVOICE AUTH</h3>
          <input name="login" type="text" placeholder="Login" />
          <input name="password" type="password" placeholder="Password" />
          <button onClick={this.makeSubmit}>SUBMIT</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
