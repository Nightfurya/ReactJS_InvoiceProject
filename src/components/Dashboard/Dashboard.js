import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Dashboard.scss";
import Header from "../Header/Header";
import Table from "../Table/Table";
import SimpleModal from "../Modal/Modal";
import ActionButton from "../ui/ActionButton/ActionButton";
import ComponentLoader from "../ui/ComponentLoader/ComponentLoader";
//redux
import { connect } from "react-redux";
import * as appActions from "../../Store/app/app.actions";

class Dashboard extends Component {
  state = {
    INVOICES: [],
    data: [],
    modalOpen: false,
    isMounted: false
  };

  componentDidMount() {
    const BASE_NAMES = ["BANKS", "CURRENCIES", "CUSTOMERS", "INVOICES", "SERVICES", "SUPPLIERS"];
    BASE_NAMES.forEach(item => {
      let PARAMS = { baseName: item, reducerFieldName: item };
      this.props.getFirebaseDataSuccess(PARAMS);
    });

    setTimeout(() => {
      this.setState({
        INVOICES: this.props.INVOICES
      });
    }, 2000);
  }

  openModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    });

    if (this.state.modalOpen === true) {
      const BASE_NAMES = ["BANKS", "CURRENCIES", "CUSTOMERS", "INVOICES", "SERVICES", "SUPPLIERS"];
      BASE_NAMES.forEach(item => {
        let PARAMS = { baseName: item, reducerFieldName: item };
        this.props.getFirebaseDataSuccess(PARAMS);
      });

      setTimeout(() => {
        this.setState({
          INVOICES: this.props.INVOICES
        });
      }, 2000);
    }
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
              <Table array={this.props.INVOICES} />
              <div className="container-for-btn">
                <ActionButton color="primary" buttonName="Add new invoice" onHandleClick={this.openModal} />
                <SimpleModal
                  open={this.state.modalOpen}
                  handleClose={this.openModal}
                  BANKS={this.props.BANKS}
                  CURRENCIES={this.props.CURRENCIES}
                  CUSTOMERS={this.props.CUSTOMERS}
                  INVOICES={this.props.INVOICES}
                  SERVICES={this.props.SERVICES}
                  SUPPLIERS={this.props.SUPPLIERS}
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
    BANKS: app.BANKS,
    CURRENCIES: app.CURRENCIES,
    CUSTOMERS: app.CUSTOMERS,
    INVOICES: app.INVOICES,
    SERVICES: app.SERVICES,
    SUPPLIERS: app.SUPPLIERS
  };
}
export default connect(
  mapStateToProps,
  { ...appActions }
)(Dashboard);
