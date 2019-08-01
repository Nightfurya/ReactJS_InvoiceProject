import React, { Component } from "react";
import "./Header.scss";
import firebase from "../../Firebase/firebase";
import ContainedButtons from "../ui/Button/Button";

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
    return (
      <header className="header">
        <ContainedButtons color="secondary" onClick={this.makeLogOut} buttonName="Log out" />
      </header>
    );
  }
}

export default Header;
