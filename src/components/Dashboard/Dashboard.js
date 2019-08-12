import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Dashboard.scss";
import Header from "../Header/Header";
import Table from "../Table/Table";
import SimpleModal from "../Modal/Modal";
import ActionButton from "../ui/ActionButton/ActionButton";
import ComponentLoader from "../ui/ComponentLoader/ComponentLoader";
import firebase from "../../Firebase/firebase";
//redux
import { connect } from "react-redux";
import * as appActions from "../../Store/app/app.actions";

class Dashboard extends Component {
  state = {
    INVOICES: [],
    data: [],
    modalOpen: false
  };
  componentDidMount() {
    const BASE_NAMES = ["INVOICES", "BANKS", "CUSTOMERS", "SERVICES", "SUPLIERS"];
    BASE_NAMES.forEach(item => {
      let PARAMS = { baseName: item, reducerFieldName: item };
      this.props.getFirebaseDataSuccess(PARAMS);
      // console.log(this.props.getFirebaseDataSuccess(PARAMS));
    });

    setTimeout(() => {
      this.setState({
        INVOICES: this.props.INVOICES,
        BANKS: this.props.BANKS,
        CUSTOMERS: this.props.CUSTOMERS,
        SERVICES: this.props.SERVICES,
        SUPLIERS: this.props.SUPLIERS
      });
    }, 1500);
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

  openModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
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
                <ActionButton color="primary" buttonName="Add new invoice" onHandleClick={this.openModal} />
                <SimpleModal
                  open={this.state.modalOpen}
                  handleClose={this.openModal}
                  INVOICES={this.props.INVOICES}
                  BANKS={this.props.BANKS}
                  CUSTOMERS={this.props.CUSTOMERS}
                  SERVICES={this.props.SERVICES}
                  SUPLIERS={this.props.SUPLIERS}
                />
              </div>
            </div>
          ) : (
            <ComponentLoader />
          )}
        </>
      );
    }
  }
}

function mapStateToProps({ app }) {
  return {
    authToken: app.authToken,
    INVOICES: app.INVOICES,
    BANKS: app.BANKS,
    CUSTOMERS: app.CUSTOMERS,
    SERVICES: app.SERVICES,
    SUPLIERS: app.SUPLIERS
  };
}
export default connect(
  mapStateToProps,
  { ...appActions }
)(Dashboard);
