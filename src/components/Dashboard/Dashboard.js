import React, { Component } from "react";
import "./Dashboard.scss";
import Header from "../Header/Header";
import Table from "../Table/Table";
import ContainedButtons from "../ui/Button/Button";

class Dashboard extends Component {
  render() {
    return (
      <>
        <Header />
        <Table />
        <div className="container-for-btn">
          <ContainedButtons color="primary" buttonName="Add new invoice" />
        </div>
      </>
    );
  }
}

export default Dashboard;
