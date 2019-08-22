import React, { Component } from "react";
import "./InputsFormInModal.scss";
import firebase from "../../../Firebase/firebase";

class InputsFormInModal extends Component {
  state = {
    supplierName: "New supplier",
    customerInformation: "New customer",
    description: "New service",
    currency: "New currency",
    bank: "New bank"
  };

  handleChange = name => event => {
    this.setState({ ...this.state, [name]: event.target.value });
  };

  // addNewInvoiceFunc = e => {
  //   e.preventDefault();
  //   const db = firebase.firestore();
  //   console.log(this.state.value);
  //   db.collection("BANKS")
  //     .doc()
  //     .set({
  //       bankInfo: "lalala <br /> lalala"
  //     })
  //     .then(() => console.log("Document successfully written!"))
  //     .catch(error => console.error("Error writing document: ", error));
  // };

  render() {
    const { banksArray, currenciesArray, customersArray, invoicesArray, servicesArray, suppliersArray } = this.props;
    return (
      <form className="form__flex-container">
        <p className="section__title">Invoice number:</p>
        <input
          className="data-field data-field__input"
          type="text"
          placeholder="Invoice number"
          defaultValue={invoicesArray.length + 1}
        />
        <input
          className="data-field data-field__time"
          type="datetime-local"
          placeholder="Invoice date: DD.MM.YYYY hh:mm"
        />
        {/*  */}
        <p className="section__title">Supplier's name (ENG):</p>
        <select className="data-field data-field__select" onChange={this.handleChange("supplierName")}>
          <option key="New supplier" value="New supplier">
            New supplier
          </option>
          {suppliersArray.map(item => (
            <option key={item.supplierName__eng} value={item.supplierName__eng}>
              {item.supplierName__eng}
            </option>
          ))}
        </select>
        {this.state.supplierName === "New supplier" ? (
          <>
            <input className=" data-field data-field__input" type="text" placeholder="Supplier's name (ENG)" />
            <input className=" data-field data-field__input" type="text" placeholder="Supplier's adress (ENG)" />
            <input className=" data-field data-field__input" type="text" placeholder="Supplier's name (UA)" />
            <input className=" data-field data-field__input" type="text" placeholder="Supplier's adress (UA)" />
          </>
        ) : (
          <>
            <p>Supplier's adress (ENG):</p>
            <select className="data-field data-field__select">
              {suppliersArray.map(item => (
                <option key={item.supplierAdress__eng} value={item.supplierAdress__eng}>
                  {item.supplierAdress__eng}
                </option>
              ))}
            </select>
            <p>Supplier's name (UA):</p>
            <select className="data-field">
              {suppliersArray.map(item => (
                <option key={item.supplierName__ua} value={item.supplierName__ua}>
                  {item.supplierName__ua}
                </option>
              ))}
            </select>
            <p>Supplier's adress (UA):</p>
            <select className="data-field data-field__select">
              {suppliersArray.map(item => (
                <option key={item.supplierAdress__ua} value={item.supplierAdress__ua}>
                  {item.supplierAdress__ua}
                </option>
              ))}
            </select>
          </>
        )}
        {/*  */}
        <p className="section__title">Customer's information (ENG):</p>
        <select className="data-field data-field__select" onChange={this.handleChange("customerInformation")}>
          <option key="New customer" value="New customer">
            New customer
          </option>
          {customersArray.map(item => (
            <option key={item.customerInformation} value={item.customerInformation}>
              {item.customerInformation}
            </option>
          ))}
        </select>
        {this.state.customerInformation === "New customer" ? (
          <input className="data-field data-field__input" type="text" placeholder="Customer's information (ENG)" />
        ) : (
          ""
        )}
        {/*  */}
        <p className="section__title">Description (ENG):</p>
        <select className="data-field data-field__select" onChange={this.handleChange("description")}>
          <option key="New service" value="New service">
            New service
          </option>
          {servicesArray.map(item => (
            <option key={item.description__eng} value={item.description__eng}>
              {item.description__eng}
            </option>
          ))}
        </select>
        {this.state.description === "New service" ? (
          <>
            <input className="data-field data-field__input" type="text" placeholder="Description (ENG)" />
            <input className="data-field data-field__input" type="text" placeholder="Description (UA)" />
          </>
        ) : (
          <>
            <p>Description (UA):</p>
            <select className="data-field data-field__select">
              {servicesArray.map(item => (
                <option key={item.description__ua} value={item.description__ua}>
                  {item.description__ua}
                </option>
              ))}
            </select>
          </>
        )}
        {/*  */}
        <p className="section__title">Currency (ENG):</p>
        <select className="data-field data-field__select" onChange={this.handleChange("currency")}>
          <option key="New currency" value="New currency">
            New currency
          </option>
          {currenciesArray.map(item => (
            <option key={item.currencyName__eng} value={item.currencyName__eng}>
              {item.currencyName__eng}
            </option>
          ))}
        </select>
        {this.state.currency === "New currency" ? (
          <>
            <input className="data-field data-field__input" type="text" placeholder="Сurrency (ENG)" />
            <input className="data-field data-field__input" type="text" placeholder="Сurrency (UA)" />
          </>
        ) : (
          <>
            <p>Currency (UA):</p>
            <select className="data-field data-field__select">
              {currenciesArray.map(item => (
                <option key={item.currencyName__ua} value={item.currencyName__ua}>
                  {item.currencyName__ua}
                </option>
              ))}
            </select>
          </>
        )}
        {/*  */}
        <p className="section__title">Price of the service: </p>
        <input className="data-field data-field__input" type="number" placeholder="Price of the service" />
        {/*  */}
        <p className="section__title">Bank name (ENG):</p>
        <select className="data-field data-field__select" onChange={this.handleChange("bank")}>
          <option key="New bank" value="New bank">
            New bank
          </option>
          {banksArray.map(item => (
            <option key={item.beneficiaryBank__eng} value={item.beneficiaryBank__eng}>
              {item.beneficiaryBank__eng}
            </option>
          ))}
        </select>
        {this.state.bank === "New bank" ? (
          <>
            <input className="data-field data-field__input" type="text" placeholder="Bank name (ENG)" />
            <textarea
              className="data-field__textarea"
              id="asd"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Bank information (ENG)"
            />
          </>
        ) : (
          <>
            <p>Bank information (ENG):</p>
            <select className="data-field data-field__select">
              {banksArray.map(item => (
                <option style={{ width: 300 }} key={item.bankInformation} value={item.bankInformation}>
                  {item.bankInformation}
                </option>
              ))}
            </select>
          </>
        )}
        {/*  */}
        <p className="section__title">Invoice desription:</p>
        <p>
          Pay within 90 days. / Сплатити протягом 90 днів. All charges of correspondent banks are at the Supplier's
          expenses. / Усі комісіі банків-кореспондентів сплачує виконавець. Please note, that payment according to this
          invoice at the same time is the confirmation of performed works, delivered services and final mutual
          installments between Parties without any additional documents. Also it is to acknowledge that Parties have no
          claims to each other. / Оплата згідно цього Iнвойсу одночасно є підтвердженням виконаних робіт, наданих
          послуг, кінцевих розрахунків між Сторонами і того, що Сторони не мають взаємних претензій , і не вамагає
          підписання додаткових документів.
        </p>

        <button className="invoice-button" onClick={e => this.addNewInvoiceFunc(e)}>
          Create a new invoice
        </button>
      </form>
    );
  }
}

export default InputsFormInModal;
