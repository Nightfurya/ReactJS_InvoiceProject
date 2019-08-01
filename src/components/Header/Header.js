import React, { Component } from "react";
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
      .then(this.props.userMakeSignOut())
      .catch(error => console.log(error));
  };

  render() {
    return (
      <header className="header">
        <ContainedButtons color="secondary" onHandleClick={e => this.makeLogOut(e)} buttonName="Log out" />
      </header>
    );
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