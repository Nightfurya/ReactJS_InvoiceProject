import React, { Component } from "react";
import "./InvoiceDoc.scss";
import { Redirect } from "react-router-dom";
import ComponentLoader from "../ui/ComponentLoader/ComponentLoader";
import ActionButton from "../ui/ActionButton/ActionButton";
import Header from "../Header/Header";
import html2canvas from "html2canvas";
import * as jsPDF from "jspdf";
//redux
import { connect } from "react-redux";
import * as appActions from "../../Store/app/app.actions";

class InvoiceDoc extends Component {
  state = {
    INVOICES__REDUX: []
  };

  componentDidMount() {
    const BASE_NAMES = "INVOICES";
    let PARAMS = { baseName: BASE_NAMES, reducerFieldName: BASE_NAMES };
    this.props.getFirebaseDataSuccess(PARAMS);

    setTimeout(() => {
      this.setState({
        INVOICES__REDUX: this.props.INVOICES
      });
    }, 2000);
  }

  makePdfForMe = () => {
    html2canvas(document.querySelector("#invoice-container-for-pdf")).then(canvas => {
      document.body.appendChild(canvas);
    });

    const input = document.getElementById("invoice-container-for-pdf");
    let imgData;

    html2canvas(input).then(canvas => {
      imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a4");
      pdf.addImage(imgData, "JPEG", 30, 0);
      pdf.save("download.pdf");
    });
  };

  render() {
    const ID = this.props.match.params.id;
    const INVOICES__REDUX = this.state.INVOICES__REDUX;

    const currentDocument = INVOICES__REDUX.find(function(item) {
      return item.invoiceNumber === ID;
    });

    let bankInformation, time, newTimeFormat, totalPay, bankInfoList;
    if (currentDocument && currentDocument.length !== 0) {
      const bankInformationFromInvoices = currentDocument.bankInformation;
      bankInformation = bankInformationFromInvoices.split("; ");
      time = currentDocument.invoiceDate;
      newTimeFormat = time
        .split("-")
        .reverse()
        .join(".");
      totalPay = (+currentDocument.quantity * +currentDocument.totalPrice).toFixed(2);

      bankInfoList = bankInformation.map(element => {
        return <p className="bank-info-p">{element}</p>;
      });
    }

    if (!this.props.authToken) {
      return <Redirect to={"/"} />;
    } else {
      return (
        <>
          {this.state.INVOICES__REDUX.length !== 0 ? (
            <>
              <Header />
              <div className="div__container-pdf-screen">
                <div className="div__container-btn">
                  <ActionButton
                    color="primary"
                    buttonName="Make a pdf-document for me"
                    onHandleClick={this.makePdfForMe}
                  />
                </div>
                <div id="invoice-container-for-pdf" className="invoice-cont">
                  <h4 className="invoice-number-heading">
                    Iнвойс/Invoice <span className="invoice-number"> №{currentDocument.invoiceNumber}</span>
                  </h4>
                  <table className="invoice-table" border="1">
                    <tbody>
                      <tr>
                        <td className="tr-half-td">
                          Дата Інвойсу: <span className="date-of-invoice">{time ? newTimeFormat : ""}</span>
                        </td>
                        <td className="tr-half-td">
                          Date of invoice: <span className="date-of-invoice">{newTimeFormat ? newTimeFormat : ""}</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="tr-half-td">
                          Виконавець:
                          <div className="date-of-invoice">
                            {currentDocument.supplierName__ua}.<br />
                            {currentDocument.supplierAddress__ua}
                          </div>
                        </td>
                        <td className="tr-half-td">
                          Supplier:
                          <div className="date-of-invoice">
                            {currentDocument.supplierName__eng}.<br />
                            {currentDocument.supplierAddress__eng}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="tr-half-td">
                          Замовник:
                          <div className="date-of-invoice">{currentDocument.customerInformation}</div>
                        </td>
                        <td className="tr-half-td">
                          Customer:
                          <div className="date-of-invoice">{currentDocument.customerInformation}</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="tr-half-td">
                          Опис: <span className="date-of-invoice">{currentDocument.description__ua}</span>
                        </td>
                        <td className="tr-half-td">
                          Description: <span className="date-of-invoice">{currentDocument.description__eng}</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="tr-half-td">
                          Валюта: <span className="date-of-invoice">{currentDocument.currencyName__ua}</span>
                        </td>
                        <td className="tr-half-td">
                          Currency: <span className="date-of-invoice">{currentDocument.currencyName__eng}</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="tr-half-td">
                          Ціна товарів/послуг: <span className="date-of-invoice">{currentDocument.totalPrice}</span>
                        </td>
                        <td className="tr-half-td">
                          Price of the goods/services:{" "}
                          <span className="date-of-invoice">{currentDocument.totalPrice}</span>
                        </td>
                      </tr>

                      <tr>
                        <td colSpan="2" className="tr-full-width-td">
                          <div className="bank-info-heading">Bank information:</div>
                          <div>
                            <p className="bank-info-p">Beneficiary's bank: {currentDocument.beneficiaryBank__eng}</p>
                            {bankInfoList}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="invoice-table" border="1">
                    <tbody>
                      <tr>
                        <td className="description-table-td">№</td>
                        <td className="description-table-td">Description / Опис</td>
                        <td className="description-table-td quantity">Quantity / Кiлькiсть</td>
                        <td className="description-table-td">
                          Price, {currentDocument.currencyName__eng} / Цiна, {currentDocument.currencyName__ua}
                        </td>
                        <td className="description-table-td">
                          Amount, {currentDocument.currencyName__eng} / Сума, {currentDocument.currencyName__ua}
                        </td>
                      </tr>
                      <tr>
                        <td className="description-table-td">1</td>
                        <td className="description-table-td">
                          {currentDocument.description__eng} / {currentDocument.description__ua}
                        </td>
                        <td className="description-table-td">{currentDocument.quantity}</td>
                        <td className="description-table-td">{currentDocument.totalPrice}</td>
                        <td className="description-table-td">{totalPay}</td>
                      </tr>
                      <tr>
                        <td className="description-table-td" />
                        <td className="description-table-td" />
                        <td className="description-table-td" />
                        <td className="description-table-td">Total</td>
                        <td className="description-table-td">{totalPay}</td>
                      </tr>
                      <tr>
                        <td className="description-table-td" colSpan="4">
                          Total to pay: {currentDocument.totalPriceText__eng}
                          <br />
                          Усього до сплати: {currentDocument.totalPriceText__ua}
                        </td>
                        <td className="description-table-td">{totalPay}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="payment-conditions-block">{currentDocument.invoiceDescription}</div>
                  <div className="supplier-cont">
                    <div>Supplier/Виконавець:</div>
                    <div className="signature-place" />
                    <div>
                      ({currentDocument.initials__ua} / {currentDocument.initials__eng})
                    </div>
                  </div>
                </div>
              </div>
            </>
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
    INVOICES: app.INVOICES
  };
}
export default connect(
  mapStateToProps,
  { ...appActions }
)(InvoiceDoc);
