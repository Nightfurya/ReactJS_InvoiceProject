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
    data: []
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
    authToken: app.authToken
  };
}
export default connect(
  mapStateToProps,
  { ...appActions }
)(Dashboard);
