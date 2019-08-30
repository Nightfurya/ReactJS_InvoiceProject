import React, { Component } from "react";
import "./InputsFormInModal.scss";
import firebase from "../../../Firebase/firebase";

class InputsFormInModal extends Component {
  state = {
    invoiceNumber: "",
    invoiceDate: "",
    supplier__new: "",
    supplierName__eng: "",
    initials__eng: "",
    supplierAddress__eng: "",
    supplierName__ua: "",
    initials__ua: "",
    supplierAddress__ua: "",
    customerInformation__new: "",
    customerInformation: "",
    description__new: "",
    description__eng: "",
    description__ua: "",
    currency__new: "",
    currencyName__eng: "",
    currencyName__ua: "",
    totalPrice: "",
    quantity: "",
    totalPriceText__eng: "",
    totalPriceText__ua: "",
    beneficiaryBank__new: "",
    beneficiaryBank__eng: "",
    bankInformation: "",
    invoiceDescription:
      "Pay within 90 days. / Сплатити протягом 90 днів. All charges of correspondent banks are at the Supplier's expenses. / Усі комісіі банків-кореспондентів сплачує виконавець. Please note, that payment according to this invoice at the same time is the confirmation of performed works, delivered services and final mutual installments between Parties without any additional documents. Also it is to acknowledge that Parties have no claims to each other. / Оплата згідно цього Iнвойсу одночасно є підтвердженням виконаних робіт, наданих послуг, кінцевих розрахунків між Сторонами і того, що Сторони не мають взаємних претензій , і не вамагає підписання додаткових документів.",
    error: false,
    success: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value, error: false });
  };

  addNewInvoiceFunc = e => {
    e.preventDefault();
    for (let key in this.state) {
      if (this.state[key] === "" || this.state[key] === "-- select an option --") {
        this.setState({
          [key]: "error-border",
          error: true
        });
        return;
      }
    }

    const db = firebase.firestore();
    db.collection("INVOICES")
      .doc()
      .set({
        invoiceNumber: this.state.invoiceNumber,
        invoiceDate: this.state.invoiceDate,
        initials__eng: this.state.initials__eng,
        initials__ua: this.state.initials__ua,
        supplierName__eng: this.state.supplierName__eng,
        supplierAddress__eng: this.state.supplierAddress__eng,
        supplierName__ua: this.state.supplierName__ua,
        supplierAddress__ua: this.state.supplierAddress__ua,
        customerInformation: this.state.customerInformation,
        description__eng: this.state.description__eng,
        description__ua: this.state.description__ua,
        currencyName__eng: this.state.currencyName__eng,
        currencyName__ua: this.state.currencyName__ua,
        totalPrice: this.state.totalPrice,
        quantity: this.state.quantity,
        totalPriceText__eng: this.state.totalPriceText__eng,
        totalPriceText__ua: this.state.totalPriceText__ua,
        beneficiaryBank__eng: this.state.beneficiaryBank__eng,
        bankInformation: this.state.bankInformation,
        invoiceDescription: this.state.invoiceDescription
      })
      .then(() => console.log("Document successfully written!"))
      .catch(error => console.error("Error writing document: ", error));

    if (this.state.beneficiaryBank__new === "-- Add a new bank --") {
      db.collection("BANKS")
        .doc()
        .set({
          beneficiaryBank__eng: this.state.beneficiaryBank__eng,
          bankInformation: this.state.bankInformation
        })
        .then(() => console.log("Document successfully written!"))
        .catch(error => console.error("Error writing document: ", error));
    }

    if (this.state.currency__new === "-- Add a new currency --") {
      db.collection("CURRENCIES")
        .doc()
        .set({
          currencyName__eng: this.state.currencyName__eng,
          currencyName__ua: this.state.currencyName__ua
        })
        .then(() => console.log("Document successfully written!"))
        .catch(error => console.error("Error writing document: ", error));
    }

    if (this.state.customerInformation__new === "-- Add a new customer's information --") {
      db.collection("CUSTOMERS")
        .doc()
        .set({
          customerInformation: this.state.customerInformation
        })
        .then(() => console.log("Document successfully written!"))
        .catch(error => console.error("Error writing document: ", error));
    }

    if (this.state.description__new === "-- Add a new description --") {
      db.collection("SERVICES")
        .doc()
        .set({
          description__eng: this.state.description__eng,
          description__ua: this.state.description__ua
        })
        .then(() => console.log("Document successfully written!"))
        .catch(error => console.error("Error writing document: ", error));
    }

    if (this.state.supplier__new === "-- Add a new supplier --") {
      db.collection("SUPPLIERS")
        .doc()
        .set({
          initials__eng: this.state.initials__eng,
          initials__ua: this.state.initials__ua,
          supplierName__eng: this.state.supplierName__eng,
          supplierAddress__eng: this.state.supplierAddress__eng,
          supplierName__ua: this.state.supplierName__ua,
          supplierAddress__ua: this.state.supplierAddress__ua
        })
        .then(() => console.log("Document successfully written!"))
        .catch(error => console.error("Error writing document: ", error));
    }
    this.setState({
      success: true
    });
  };

  render() {
    const { banksArray, currenciesArray, customersArray, invoicesArray, servicesArray, suppliersArray } = this.props;

    let supplierInformation;
    if (this.state.supplier__new === "-- Add a new supplier --") {
      supplierInformation = (
        <>
          <input
            className={
              this.state.supplierName__eng === "error-border"
                ? "data-field data-field__input error-border"
                : "data-field data-field__input"
            }
            type="text"
            placeholder="Supplier's name (ENG)"
            onChange={this.handleChange("supplierName__eng")}
          />
          <input
            className={
              this.state.initials__eng === "error-border"
                ? "data-field data-field__input error-border"
                : "data-field data-field__input"
            }
            type="text"
            placeholder="Initials (ENG)"
            onChange={this.handleChange("initials__eng")}
          />
          <input
            className={
              this.state.supplierAddress__eng === "error-border"
                ? "data-field data-field__input error-border"
                : "data-field data-field__input"
            }
            type="text"
            placeholder="Supplier's Address (ENG)"
            onChange={this.handleChange("supplierAddress__eng")}
          />
          <input
            className={
              this.state.supplierName__ua === "error-border"
                ? "data-field data-field__input error-border"
                : "data-field data-field__input"
            }
            type="text"
            placeholder="Supplier's name (UA)"
            onChange={this.handleChange("supplierName__ua")}
          />
          <input
            className={
              this.state.initials__ua === "error-border"
                ? "data-field data-field__input error-border"
                : "data-field data-field__input"
            }
            type="text"
            placeholder="Initials (UA)"
            onChange={this.handleChange("initials__ua")}
          />
          <input
            className={
              this.state.supplierAddress__ua === "error-border"
                ? "data-field data-field__input error-border"
                : "data-field data-field__input"
            }
            type="text"
            placeholder="Supplier's Address (UA)"
            onChange={this.handleChange("supplierAddress__ua")}
          />
        </>
      );
    } else if (this.state.supplier__new === "-- Existing supplier --") {
      supplierInformation = (
        <div className="container__big">
          <p>Supplier's name (ENG):</p>
          <select
            className={
              this.state.supplierName__eng === "error-border"
                ? "data-field data-field__select error-border"
                : "data-field data-field__select"
            }
            onChange={this.handleChange("supplierName__eng")}
          >
            <option defaultValue="-- select an option --" style={{ display: "none" }}>
              -- select an option --
            </option>
            {suppliersArray.map(item => (
              <option key={item.supplierName__eng} value={item.supplierName__eng}>
                {item.supplierName__eng.length <= 50
                  ? item.supplierName__eng
                  : item.supplierName__eng.substring(0, 50) + "..."}
              </option>
            ))}
          </select>
          <p>Initials (ENG):</p>
          <select
            className={
              this.state.initials__eng === "error-border"
                ? "data-field data-field__select error-border"
                : "data-field data-field__select"
            }
            onChange={this.handleChange("initials__eng")}
          >
            <option defaultValue="-- select an option --" style={{ display: "none" }}>
              -- select an option --
            </option>
            {suppliersArray.map(item => (
              <option key={item.initials__eng} value={item.initials__eng}>
                {item.initials__eng.length <= 50 ? item.initials__eng : item.initials__eng.substring(0, 50) + "..."}
              </option>
            ))}
          </select>
          <p>Supplier's Address (ENG):</p>
          <select
            className={
              this.state.supplierAddress__eng === "error-border"
                ? "data-field data-field__select error-border"
                : "data-field data-field__select"
            }
            onChange={this.handleChange("supplierAddress__eng")}
          >
            <option defaultValue="-- select an option --" style={{ display: "none" }}>
              -- select an option --
            </option>
            {suppliersArray.map(item => (
              <option key={item.supplierAddress__eng} value={item.supplierAddress__eng}>
                {item.supplierAddress__eng.length <= 50
                  ? item.supplierAddress__eng
                  : item.supplierAddress__eng.substring(0, 50) + "..."}
              </option>
            ))}
          </select>
          <p>Supplier's name (UA):</p>
          <select
            className={
              this.state.supplierName__ua === "error-border"
                ? "data-field data-field__select error-border"
                : "data-field data-field__select"
            }
            onChange={this.handleChange("supplierName__ua")}
          >
            <option defaultValue="-- select an option --" style={{ display: "none" }}>
              -- select an option --
            </option>
            {suppliersArray.map(item => (
              <option key={item.supplierName__ua} value={item.supplierName__ua}>
                {item.supplierName__ua.length <= 50
                  ? item.supplierName__ua
                  : item.supplierName__ua.substring(0, 50) + "..."}
              </option>
            ))}
          </select>
          <p>Initials (UA):</p>
          <select
            className={
              this.state.initials__ua === "error-border"
                ? "data-field data-field__select error-border"
                : "data-field data-field__select"
            }
            onChange={this.handleChange("initials__ua")}
          >
            <option defaultValue="-- select an option --" style={{ display: "none" }}>
              -- select an option --
            </option>
            {suppliersArray.map(item => (
              <option key={item.initials__ua} value={item.initials__ua}>
                {item.initials__ua.length <= 50 ? item.initials__ua : item.initials__ua.substring(0, 50) + "..."}
              </option>
            ))}
          </select>
          <p>Supplier's Address (UA):</p>
          <select
            className={
              this.state.supplierAddress__ua === "error-border"
                ? "data-field data-field__select error-border"
                : "data-field data-field__select"
            }
            onChange={this.handleChange("supplierAddress__ua")}
          >
            <option defaultValue="-- select an option --" style={{ display: "none" }}>
              -- select an option --
            </option>
            {suppliersArray.map(item => (
              <option key={item.supplierAddress__ua} value={item.supplierAddress__ua}>
                {item.supplierAddress__ua.length <= 50
                  ? item.supplierAddress__ua
                  : item.supplierAddress__ua.substring(0, 50) + "..."}
              </option>
            ))}
          </select>
        </div>
      );
    }

    let customerInformation;
    if (this.state.customerInformation__new === "-- Add a new customer's information --") {
      customerInformation = (
        <input
          className={
            this.state.customerInformation === "error-border"
              ? "data-field data-field__input error-border"
              : "data-field data-field__input"
          }
          type="text"
          placeholder="Customer's information (ENG)"
          onChange={this.handleChange("customerInformation")}
        />
      );
    } else if (this.state.customerInformation__new === "-- Existing customer's information --") {
      customerInformation = (
        <select
          className={
            this.state.customerInformation === "error-border"
              ? "data-field data-field__select error-border"
              : "data-field data-field__select"
          }
          onChange={this.handleChange("customerInformation")}
        >
          <option defaultValue="-- select an option --" style={{ display: "none" }}>
            -- select an option --
          </option>
          {customersArray.map(item => (
            <option key={item.customerInformation} value={item.customerInformation}>
              {item.customerInformation.length <= 50
                ? item.customerInformation
                : item.customerInformation.substring(0, 50) + "..."}
            </option>
          ))}
        </select>
      );
    }

    let description;
    if (this.state.description__new === "-- Add a new description --") {
      description = (
        <>
          <input
            className={
              this.state.description__eng === "error-border"
                ? "data-field data-field__input error-border"
                : "data-field data-field__input"
            }
            type="text"
            placeholder="Description (ENG)"
            onChange={this.handleChange("description__eng")}
          />
          <input
            className={
              this.state.description__ua === "error-border"
                ? "data-field data-field__input error-border"
                : "data-field data-field__input"
            }
            type="text"
            placeholder="Description (UA)"
            onChange={this.handleChange("description__ua")}
          />
        </>
      );
    } else if (this.state.description__new === "-- Existing description --") {
      description = (
        <div className="container__big">
          <p>Description (ENG):</p>
          <select
            className={
              this.state.description__eng === "error-border"
                ? "data-field data-field__select error-border"
                : "data-field data-field__select"
            }
            onChange={this.handleChange("description__eng")}
          >
            <option defaultValue="-- select an option --" style={{ display: "none" }}>
              -- select an option --
            </option>
            {servicesArray.map(item => (
              <option key={item.description__eng} value={item.description__eng}>
                {item.description__eng.length <= 50
                  ? item.description__eng
                  : item.description__eng.substring(0, 50) + "..."}
              </option>
            ))}
          </select>
          <p>Description (UA):</p>
          <select
            className={
              this.state.description__ua === "error-border"
                ? "data-field data-field__select error-border"
                : "data-field data-field__select"
            }
            onChange={this.handleChange("description__ua")}
          >
            <option defaultValue="-- select an option --" style={{ display: "none" }}>
              -- select an option --
            </option>
            {servicesArray.map(item => (
              <option key={item.description__ua} value={item.description__ua}>
                {item.description__ua.length <= 50
                  ? item.description__ua
                  : item.description__ua.substring(0, 50) + "..."}
              </option>
            ))}
          </select>
        </div>
      );
    }

    let currency;
    if (this.state.currency__new === "-- Add a new currency --") {
      currency = (
        <>
          <input
            className={
              this.state.currencyName__eng === "error-border"
                ? "data-field data-field__input error-border"
                : "data-field data-field__input"
            }
            type="text"
            placeholder="Сurrency (ENG)"
            onChange={this.handleChange("currencyName__eng")}
          />
          <input
            className={
              this.state.currencyName__ua === "error-border"
                ? "data-field data-field__input error-border"
                : "data-field data-field__input"
            }
            type="text"
            placeholder="Сurrency (UA)"
            onChange={this.handleChange("currencyName__ua")}
          />
        </>
      );
    } else if (this.state.currency__new === "-- Existing currency --") {
      currency = (
        <div className="container__big">
          <p>Currency (ENG):</p>
          <select
            className={
              this.state.currencyName__eng === "error-border"
                ? "data-field data-field__select error-border"
                : "data-field data-field__select"
            }
            onChange={this.handleChange("currencyName__eng")}
          >
            <option defaultValue="-- select an option --" style={{ display: "none" }}>
              -- select an option --
            </option>
            {currenciesArray.map(item => (
              <option key={item.currencyName__eng} value={item.currencyName__eng}>
                {item.currencyName__eng.length <= 50
                  ? item.currencyName__eng
                  : item.currencyName__eng.substring(0, 50) + "..."}
              </option>
            ))}
          </select>
          <p>Currency (UA):</p>
          <select
            className={
              this.state.currencyName__ua === "error-border"
                ? "data-field data-field__select error-border"
                : "data-field data-field__select"
            }
            onChange={this.handleChange("currencyName__ua")}
          >
            <option defaultValue="-- select an option --" style={{ display: "none" }}>
              -- select an option --
            </option>
            {currenciesArray.map(item => (
              <option key={item.currencyName__ua} value={item.currencyName__ua}>
                {item.currencyName__ua.length <= 50
                  ? item.currencyName__ua
                  : item.currencyName__ua.substring(0, 50) + "..."}
              </option>
            ))}
          </select>
        </div>
      );
    }

    let beneficiaryBank;
    if (this.state.beneficiaryBank__new === "-- Add a new bank --") {
      beneficiaryBank = (
        <>
          <input
            className={
              this.state.beneficiaryBank__eng === "error-border"
                ? "data-field data-field__input error-border"
                : "data-field data-field__input"
            }
            type="text"
            placeholder="Bank name (ENG)"
            onChange={this.handleChange("beneficiaryBank__eng")}
          />
          <textarea
            className={
              this.state.bankInformation === "error-border"
                ? "data-field__textarea error-border"
                : "data-field__textarea"
            }
            id="asd"
            value={this.state.value}
            onChange={this.handleChange("bankInformation")}
            placeholder="Bank information (ENG)"
          />
        </>
      );
    } else if (this.state.beneficiaryBank__new === "-- Existing bank information --") {
      beneficiaryBank = (
        <div className="container__big">
          <p>Bank name (ENG):</p>
          <select
            className={
              this.state.beneficiaryBank__eng === "error-border"
                ? "data-field data-field__select error-border"
                : "data-field data-field__select"
            }
            onChange={this.handleChange("beneficiaryBank__eng")}
          >
            <option defaultValue="-- select an option --" style={{ display: "none" }}>
              -- select an option --
            </option>
            {banksArray.map(item => (
              <option key={item.beneficiaryBank__eng} value={item.beneficiaryBank__eng}>
                {item.beneficiaryBank__eng.length <= 50
                  ? item.beneficiaryBank__eng
                  : item.beneficiaryBank__eng.substring(0, 50) + "..."}
              </option>
            ))}
          </select>
          <p>Bank information (ENG):</p>
          <select
            className={
              this.state.bankInformation === "error-border"
                ? "data-field data-field__select error-border"
                : "data-field data-field__select"
            }
            onChange={this.handleChange("bankInformation")}
          >
            <option defaultValue="-- select an option --" style={{ display: "none" }}>
              -- select an option --
            </option>
            {banksArray.map(item => (
              <option style={{ width: 300 }} key={item.bankInformation} value={item.bankInformation}>
                {item.bankInformation.length <= 50
                  ? item.bankInformation
                  : item.bankInformation.substring(0, 50) + "..."}
              </option>
            ))}
          </select>
        </div>
      );
    }

    return (
      <form className="form__flex-container">
        <p className="section__title">Invoice number:</p>
        <input
          className={
            this.state.invoiceNumber === "error-border"
              ? "data-field data-field__input error-border"
              : "data-field data-field__input"
          }
          type="text"
          placeholder={invoicesArray.length + 1}
          onChange={this.handleChange("invoiceNumber")}
        />
        <input
          className={
            this.state.invoiceDate === "error-border"
              ? "data-field data-field__time error-border"
              : "data-field data-field__time"
          }
          type="date"
          placeholder="Invoice date: DD.MM.YYYY hh:mm"
          onChange={this.handleChange("invoiceDate")}
        />

        <p className="section__title">Supplier's information:</p>
        <select
          className={
            this.state.supplier__new === "error-border"
              ? "data-field data-field__select error-border"
              : "data-field data-field__select"
          }
          onChange={this.handleChange("supplier__new")}
        >
          <option defaultValue="-- select an option --" style={{ display: "none" }}>
            -- select an option --
          </option>
          <option defaultValue="-- Add a new supplier --">-- Add a new supplier --</option>
          <option defaultValue="-- Existing supplier --">-- Existing supplier --</option>
        </select>
        {supplierInformation}

        <p className="section__title">Customer's information:</p>
        <select
          className={
            this.state.customerInformation__new === "error-border"
              ? "data-field data-field__select error-border"
              : "data-field data-field__select"
          }
          onChange={this.handleChange("customerInformation__new")}
        >
          <option defaultValue="-- select an option --" style={{ display: "none" }}>
            -- select an option --
          </option>
          <option defaultValue="-- Add a new customer's information --">-- Add a new customer's information --</option>
          <option defaultValue="-- Existing customer's information --">-- Existing customer's information --</option>
        </select>
        {customerInformation}

        <p className="section__title">Description:</p>
        <select
          className={
            this.state.description__new === "error-border"
              ? "data-field data-field__select error-border"
              : "data-field data-field__select"
          }
          onChange={this.handleChange("description__new")}
        >
          <option defaultValue="-- select an option --" style={{ display: "none" }}>
            -- select an option --
          </option>
          <option defaultValue="-- Add a new description --">-- Add a new description --</option>
          <option defaultValue="-- Existing description --">-- Existing description --</option>
        </select>
        {description}

        <p className="section__title">Currency:</p>
        <select
          className={
            this.state.currency__new === "error-border"
              ? "data-field data-field__select error-border"
              : "data-field data-field__select"
          }
          onChange={this.handleChange("currency__new")}
        >
          <option defaultValue="-- select an option --" style={{ display: "none" }}>
            -- select an option --
          </option>
          <option defaultValue="-- Add a new currency --">-- Add a new currency --</option>
          <option defaultValue="-- Existing currency --">-- Existing currency --</option>
        </select>
        {currency}

        <p className="section__title">Price of the service: </p>
        <input
          className={
            this.state.totalPrice === "error-border"
              ? "data-field data-field__input error-border"
              : "data-field data-field__input"
          }
          type="text"
          placeholder="Price of the service"
          onChange={this.handleChange("totalPrice")}
        />
        <input
          className={
            this.state.totalPrice === "error-border"
              ? "data-field data-field__input error-border"
              : "data-field data-field__input"
          }
          type="text"
          placeholder="Set the quantity of the services"
          onChange={this.handleChange("quantity")}
        />
        <p>{(+this.state.totalPrice * +this.state.quantity).toFixed(2)}</p>
        <input
          className={
            this.state.totalPrice === "error-border"
              ? "data-field data-field__input error-border"
              : "data-field data-field__input"
          }
          type="text"
          placeholder="Total price of the service in english"
          onChange={this.handleChange("totalPriceText__eng")}
        />
        <input
          className={
            this.state.totalPrice === "error-border"
              ? "data-field data-field__input error-border"
              : "data-field data-field__input"
          }
          type="text"
          placeholder="Total price of the service in ukrainian"
          onChange={this.handleChange("totalPriceText__ua")}
        />

        <p className="section__title">Bank name (ENG):</p>
        <select
          className={
            this.state.beneficiaryBank__new === "error-border"
              ? "data-field data-field__select error-border"
              : "data-field data-field__select"
          }
          onChange={this.handleChange("beneficiaryBank__new")}
        >
          <option defaultValue="-- select an option --" style={{ display: "none" }}>
            -- select an option --
          </option>
          <option defaultValue="-- Add a new bank --">-- Add a new bank --</option>
          <option defaultValue="-- Existing bank information --">-- Existing bank information --</option>
        </select>
        {beneficiaryBank}

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

        {this.state.error ? (
          <>
            <p className="error">Заполните все поля! Спасибо за внимание!</p>
            <p className="error">Please, fill all the fields!</p>
          </>
        ) : (
          ""
        )}

        <button className="invoice-button" onClick={e => this.addNewInvoiceFunc(e)}>
          Create a new invoice
        </button>

        {this.state.success ? (
          <>
            <p className="success">Новый документ добавлен в базу данных!</p>
            <p className="success">New document has added to database.</p>
          </>
        ) : (
          ""
        )}
      </form>
    );
  }
}

export default InputsFormInModal;
