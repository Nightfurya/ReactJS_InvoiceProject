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
    data: [],
    modalOpen: false
  };
  componentDidMount() {
    const db = firebase.firestore();

    db.settings({ timestampsInSnapshots: true });
    const collection = db.collection("INVOICES");

    collection.get().then(snapshot => {
      let data = [];
      snapshot.forEach(doc => {
        data.push(doc.data());
      });
      console.log(data);
      this.setState({
        data: data
      });
    });
  }

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
          {this.state.data.length !== 0 ? (
            <div className="dashboard-container">
              <Table array={this.state.data} />
              <div className="container-for-btn">
                <ActionButton color="primary" buttonName="Add new invoice" onHandleClick={this.openModal} />
                <SimpleModal open={this.state.modalOpen} handleClose={this.openModal} />
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
    authToken: app.authToken
  };
}
export default connect(
  mapStateToProps,
  { ...appActions }
)(Dashboard);
