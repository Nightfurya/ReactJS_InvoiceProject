import React, { Component } from "react";
import { Redirect } from "react-router";
import "./AuthForm.scss";
import firebase from "../../Firebase/firebase";

//Redux
import { connect } from "react-redux";
import * as appActions from "../../Store/app/app.actions";

class AuthForm extends Component {
  state = {
    error: false
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.userSignInSuccess();
      }
    });
  }

  makeSubmit = e => {
    e.preventDefault();

    const LOGIN = document.querySelector('input[name="login"]');
    const PASSWORD = document.querySelector('input[name="password"]');

    if (!LOGIN.value || !PASSWORD.value) {
      this.setState({
        error: true
      });
      return;
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(LOGIN.value, PASSWORD.value)
      .catch(error => console.log(error));

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.userSignInSuccess();
      } else {
        console.log(user, "error, i can't sign in");
      }
    });
  };

  cancelError = () => {
    this.setState({
      error: false
    });
  };

  render() {
    if (this.props.authToken) {
      return <Redirect to={"/home"} />;
    } else {
      return (
        <div className="auth-form__container">
          <form className="auth-form">
            <h3>INVOICE AUTH</h3>
            <input
              onFocus={this.cancelError}
              className={this.state.error ? "error" : ""}
              name="login"
              type="text"
              placeholder="Login"
            />
            <input
              onFocus={this.cancelError}
              className={this.state.error ? "error" : ""}
              name="password"
              type="password"
              placeholder="Password"
            />
            <button onClick={this.makeSubmit}>SUBMIT</button>
          </form>
        </div>
      );
    }
  }
}

function mapStateToProps({ app }) {
  return {
    authToken: app.authToken
  };
}

export default connect(
  mapStateToProps,
  { ...appActions }
)(AuthForm);
