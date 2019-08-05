import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Dashboard.scss";
import Header from "../Header/Header";
import Table from "../Table/Table";
import ContainedButtons from "../ui/Button/Button";
import CircularIndeterminate from "../ui/Loader/Loader";
import firebase from "../../Firebase/firebase";
//redux
import { connect } from "react-redux";
import * as appActions from "../../Store/app/app.actions";

class Dashboard extends Component {
  state = {
    INVOICES: []
  };
  componentDidMount() {
    const BASE_NAMES = ["INVOICES", "BANKS", "CUSTOMERS", "SERVICES", "SUPLIERS"];
    BASE_NAMES.forEach(item => {
      let PARAMS = { baseName: item, reducerFieldName: item };
      this.props.getFirebaseDataSuccess(PARAMS);
    });

    setTimeout(() => {
      this.setState({
        INVOICES: this.props.INVOICES,
        BANKS: this.props.BANKS,
        CUSTOMERS: this.props.CUSTOMERS,
        SERVICES: this.props.SERVICES,
        SUPLIERS: this.props.SUPLIERS
      });
    }, 3000);
  }

  addNewInvoiceFunc = () => {
    const db = firebase.firestore();
    db.collection("INVOICES")
      .doc()
      .set({
        name: "Los Angeles",
        state: "CA",
        country: "USA"
      })
      .then(() => console.log("Document successfully written!"))
      .catch(error => console.error("Error writing document: ", error));
  };

  render() {
    if (!this.props.authToken) {
      return <Redirect to={"/"} />;
    } else {
      return (
        <>
          <Header />
          {this.state.INVOICES.length !== 0 ? (
            <div className="dashboard-container">
              <Table array={this.state.INVOICES} />
              <div className="container-for-btn">
                <ContainedButtons color="primary" buttonName="Add new invoice" />
              </div>
            </div>
          ) : (
            <CircularIndeterminate />
          )}
        </>
      );
    }
  }
}

function mapStateToProps({ app }) {
  return {
    authToken: app.authToken,
    INVOICES: app.INVOICES
  };
}
export default connect(
  mapStateToProps,
  { ...appActions }
)(Dashboard);
