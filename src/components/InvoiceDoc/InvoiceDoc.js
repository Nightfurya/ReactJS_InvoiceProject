import React, { Component } from "react";
import "./InvoiceDoc.scss";

class InvoiceDoc extends Component {
  render() {
    return (
      <div className="invoice-cont">
        <h4 className="invoice-number-heading">
          Iнвойс/Invoice <span className="invoice-number"> №47</span>
        </h4>
        <table className="invoice-table" border="1">
          <tbody>
            <tr>
              <td className="tr-half-td">
                Дата Інвойсу: <span className="date-of-invoice">1234567</span>{" "}
              </td>
              <td className="tr-half-td">
                Date of invoice: <span className="date-of-invoice">1234567</span>{" "}
              </td>
            </tr>
            <tr>
              <td className="tr-half-td">
                Виконавець:{" "}
                <div className="date-of-invoice">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s
                </div>{" "}
              </td>
              <td className="tr-half-td">
                Supplier:{" "}
                <div className="date-of-invoice">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s
                </div>{" "}
              </td>
            </tr>
            <tr>
              <td className="tr-half-td">
                Замовник:{" "}
                <div className="date-of-invoice">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s
                </div>{" "}
              </td>
              <td className="tr-half-td">
                Customer:{" "}
                <div className="date-of-invoice">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s
                </div>{" "}
              </td>
            </tr>
            <tr>
              <td className="tr-half-td">
                Опис: <span className="date-of-invoice">1234567</span>{" "}
              </td>
              <td className="tr-half-td">
                Description: <span className="date-of-invoice">1234567</span>{" "}
              </td>
            </tr>
            <tr>
              <td className="tr-half-td">
                Валюта: <span className="date-of-invoice">1234567</span>{" "}
              </td>
              <td className="tr-half-td">
                Currency: <span className="date-of-invoice">1234567</span>{" "}
              </td>
            </tr>
            <tr>
              <td className="tr-half-td">
                Ціна товарів/послуг: <span className="date-of-invoice">1234567</span>{" "}
              </td>
              <td className="tr-half-td">
                Price of the goods/services: <span className="date-of-invoice">1234567</span>{" "}
              </td>
            </tr>

            <tr>
              <td colSpan="2" className="tr-full-width-td">
                <div className="bank-info-heading">Bank information:</div>
                <div>
                  <p className="bank-info-p">Beneficiary:</p>
                  <p className="bank-info-p">Account #:</p>
                  <p className="bank-info-p">IBAN:</p>

                  <p className="bank-info-p">Beneficiary`s bank:</p>
                  <p className="bank-info-p">Bank Address:</p>
                  <p className="bank-info-p">SWIFT code:</p>

                  <p className="bank-info-p">Correspondent bank :</p>
                  <p className="bank-info-p">Bank address:</p>

                  <p className="bank-info-p">SWIFT code:</p>
                  <p className="bank-info-p">Correspondent account:</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="invoice-table" border="1">
          <tbody>
            <tr>
              <td className="description-table-td">№</td>
              <td className="description-table-td">Description</td>
              <td className="description-table-td">Quantity</td>
              <td className="description-table-td">Price, USD</td>
              <td className="description-table-td">Amount, USD</td>
            </tr>
            <tr>
              <td className="description-table-td">1</td>
              <td className="description-table-td">There are many variations of passages of Lorem Ipsum available</td>
              <td className="description-table-td">1</td>
              <td className="description-table-td">440.00</td>
              <td className="description-table-td">440.00</td>
            </tr>
            <tr>
              <td className="description-table-td" />
              <td className="description-table-td" />
              <td className="description-table-td" />
              <td className="description-table-td">Total</td>
              <td className="description-table-td">440.00</td>
            </tr>
            <tr>
              <td className="description-table-td" colSpan="4">
                Total to pay: If you are going to use a passage of Lorem Ipsum, you need <br />
                Total to pay: If you are going to use a passage of Lorem Ipsum, you need
              </td>
              <td className="description-table-td">440.00</td>
            </tr>
          </tbody>
        </table>
        <div className="payment-conditions-block">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </div>
        <div className="supplier-cont">
          <div>Supplier/Supplier</div>
          <div className="signature-place" />
          <div>(What is Lorem Ipsum?)</div>
        </div>
      </div>
    );
  }
}

export default InvoiceDoc;
