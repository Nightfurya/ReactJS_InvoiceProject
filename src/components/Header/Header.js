import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Header.scss";
import firebase from "../../Firebase/firebase";
import ContainedButtons from "../ui/Button/Button";

//redux
import { connect } from "react-redux";
import * as appActions from "../../Store/app/app.actions";

class Header extends Component {
  makeLogOut = e => {
    e.preventDefault();
    firebase
      .auth()
      .signOut()
      .then(function() {
        console.log("sign out");
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    if (!this.props.authToken) {
      return <Redirect to={"/"} />;
    } else {
      return (
        <header className="header">
          <ContainedButtons color="secondary" onClick={this.makeLogOut} buttonName="Log out" />
        </header>
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
)(Header);
