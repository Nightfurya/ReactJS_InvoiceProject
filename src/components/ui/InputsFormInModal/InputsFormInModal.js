import React, { Component } from "react";
import "./InputsFormInModal.scss";
import firebase from "../../../Firebase/firebase";

class InputsFormInModal extends Component {
  state = {
    invoiceNumber: "",
    invoiceDate: "",
    supplierName__eng: "-- select an option --",
    supplierAdress__eng: "",
    supplierName__ua: "",
    supplierAdress__ua: "",
    customerInformation: "-- select an option --",
    description__eng: "-- select an option --",
    description__ua: "",
    currencyName__eng: "-- select an option --",
    currencyName__ua: "",
    totalPrice: "",
    beneficiaryBank__eng: "-- select an option --",
    bankInformation: "",
    invoiceDescription:
      "Pay within 90 days. / Сплатити протягом 90 днів. All charges of correspondent banks are at the Supplier's expenses. / Усі комісіі банків-кореспондентів сплачує виконавець. Please note, that payment according to this invoice at the same time is the confirmation of performed works, delivered services and final mutual installments between Parties without any additional documents. Also it is to acknowledge that Parties have no claims to each other. / Оплата згідно цього Iнвойсу одночасно є підтвердженням виконаних робіт, наданих послуг, кінцевих розрахунків між Сторонами і того, що Сторони не мають взаємних претензій , і не вамагає підписання додаткових документів.",
    error: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value, error: false });
    console.log(this.state);
  };

  addNewInvoiceFunc = e => {
    e.preventDefault();
    for (let key in this.state) {
      if (this.state[key] === "" || this.state[key] === "-- select an option --") {
        console.log(this.state[key] === "" || "-- select an option --");
        this.setState({
          [key]: "error-border",
          error: true
        });
        return;
      }
    }

    // const db = firebase.firestore();
    // db.collection("INVOICES")
    //   .doc()
    //   .set({
    //     supplierName__eng: this.state.supplierName,
    //     customerInformation: this.state.customerInformation,
    //     description__eng: this.state.description,
    //     currencyName__eng: this.state.currency,
    //     beneficiaryBank__eng: this.state.bank
    //   })
    //   .then(() => console.log("Document successfully written!"))
    //   .catch(error => console.error("Error writing document: ", error));
  };

  render() {
    const {
      banksArray,
      currenciesArray,
      customersArray,
      invoicesArray,
      servicesArray,
      suppliersArray,
      closeMoladWindow
    } = this.props;
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
        {/*  */}
        <p className="section__title">Supplier's name (ENG):</p>
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
              {item.supplierName__eng}
            </option>
          ))}
        </select>
        {this.state.supplierName__eng === "-- select an option --" ||
        this.state.supplierName__eng === "error-border" ? (
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
                this.state.supplierAdress__eng === "error-border"
                  ? "data-field data-field__input error-border"
                  : "data-field data-field__input"
              }
              type="text"
              placeholder="Supplier's adress (ENG)"
              onChange={this.handleChange("supplierAdress__eng")}
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
                this.state.supplierAdress__ua === "error-border"
                  ? "data-field data-field__input error-border"
                  : "data-field data-field__input"
              }
              type="text"
              placeholder="Supplier's adress (UA)"
              onChange={this.handleChange("supplierAdress__ua")}
            />
          </>
        ) : (
          <>
            <p>Supplier's adress (ENG):</p>
            <select
              className={
                this.state.supplierAdress__eng === "error-border"
                  ? "data-field data-field__select error-border"
                  : "data-field data-field__select"
              }
              onChange={this.handleChange("supplierAdress__eng")}
            >
              <option defaultValue="-- select an option --" style={{ display: "none" }}>
                -- select an option --
              </option>
              {suppliersArray.map(item => (
                <option key={item.supplierAdress__eng} value={item.supplierAdress__eng}>
                  {item.supplierAdress__eng}
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
                  {item.supplierName__ua}
                </option>
              ))}
            </select>
            <p>Supplier's adress (UA):</p>
            <select
              className={
                this.state.supplierAdress__ua === "error-border"
                  ? "data-field data-field__select error-border"
                  : "data-field data-field__select"
              }
              onChange={this.handleChange("supplierAdress__ua")}
            >
              <option defaultValue="-- select an option --" style={{ display: "none" }}>
                -- select an option --
              </option>
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
              {item.customerInformation}
            </option>
          ))}
        </select>
        {this.state.customerInformation === "-- select an option --" ? (
          <input
            className={
              this.state.customerInformation === "error-border"
                ? "data-field data-field__input error-border"
                : "data-field data-field__input"
            }
            type="text"
            placeholder="Customer's information (ENG)"
          />
        ) : (
          ""
        )}
        {/*  */}
        <p className="section__title">Description (ENG):</p>
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
              {item.description__eng}
            </option>
          ))}
        </select>
        {this.state.description__eng === "-- select an option --" ? (
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
        ) : (
          <>
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
                  {item.description__ua}
                </option>
              ))}
            </select>
          </>
        )}
        {/*  */}
        <p className="section__title">Currency (ENG):</p>
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
              {item.currencyName__eng}
            </option>
          ))}
        </select>
        {this.state.currencyName__eng === "-- select an option --" ? (
          <>
            <input
              className={
                this.state.currencyName__eng === "error-border"
                  ? "data-field data-field__inputt error-border"
                  : "data-field data-field__inputt"
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
        ) : (
          <>
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
                  {item.currencyName__ua}
                </option>
              ))}
            </select>
          </>
        )}
        {/*  */}
        <p className="section__title">Price of the service: </p>
        <input
          className={
            this.state.totalPrice === "error-border"
              ? "data-field data-field__input error-border"
              : "data-field data-field__input"
          }
          type="number"
          placeholder="Price of the service"
          onChange={this.handleChange("totalPrice")}
        />
        {/*  */}
        <p className="section__title">Bank name (ENG):</p>
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
              {item.beneficiaryBank__eng}
            </option>
          ))}
        </select>
        {this.state.beneficiaryBank__eng === "-- select an option --" ? (
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
        ) : (
          <>
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
        {/* <button className="invoice-button" onClick={closeMoladWindow}>
          Create a new invoice
        </button> */}
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
      </form>
    );
  }
}

export default InputsFormInModal;
