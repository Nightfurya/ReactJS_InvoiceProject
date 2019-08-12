import React from "react";
import "./InputsFormInModal.scss";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";
import ActionButton from "../ActionButton/ActionButton";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex"
  },
  textField: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));

export default function InputsFormInModal(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({});
  const [selectedDate, handleDateChange] = React.useState(new Date());
  const [newCustomer, setNewCustomer] = React.useState("New customer");
  const [choosenBank, setChoosenBank] = React.useState(0);
  const { bankArray, invoicesArray, customersArray, servicesArray, supliersArray } = props;

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
    setNewCustomer(event.target.value);
  };

  return (
    <form className={[classes.container, "form__flex-container"].join(" ")} noValidate autoComplete="off">
      <TextField
        id="outlined-dense"
        label="Invoice №"
        className={clsx(classes.textField, classes.dense)}
        margin="normal"
        variant="outlined"
        defaultValue={invoicesArray.length + 1}
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DateTimePicker
          ampm={false}
          label="Invoice date"
          showTodayButton
          style={{ width: "97%", margin: "0 0 10px 8px" }}
          value={selectedDate}
          onChange={handleDateChange}
        />
      </MuiPickersUtilsProvider>
      <TextField
        id="outlined-select-currency"
        select
        label="Supplier"
        className={classes.textField}
        value={values.Supplier || supliersArray[0].name}
        onChange={handleChange("Supplier")}
        SelectProps={{
          MenuProps: {
            className: classes.menu
          }
        }}
        helperText="Please select your supplier"
        margin="normal"
        variant="outlined"
      >
        {supliersArray.map(item => (
          <MenuItem key={item.name} value={item.name}>
            {item.name}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-select-currency"
        select
        label="Customer"
        className={classes.textField}
        value={values.Customer || "New customer"}
        onChange={handleChange("Customer")}
        SelectProps={{
          MenuProps: {
            className: classes.menu
          }
        }}
        helperText="Please select your customer"
        margin="normal"
        variant="outlined"
      >
        <MenuItem value="New customer">New Customer</MenuItem>
        {customersArray.map(item => (
          <MenuItem key={item.name} value={item.name}>
            {item.name} ({item.address})
          </MenuItem>
        ))}
      </TextField>
      {newCustomer === "New customer" ? (
        <>
          <TextField
            id="outlined-dense"
            label="Customer name"
            className={clsx(classes.textField, classes.dense)}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-dense"
            label="Customer bank-info"
            className={clsx(classes.textField, classes.dense)}
            margin="normal"
            variant="outlined"
          />
        </>
      ) : (
        ""
      )}
      <TextField
        id="outlined-select-currency"
        select
        label="Service"
        className={classes.textField}
        value={values.Service || servicesArray[0].name}
        onChange={handleChange("Service")}
        SelectProps={{
          MenuProps: {
            className: classes.menu
          }
        }}
        helperText="Please select your service"
        margin="normal"
        variant="outlined"
      >
        {servicesArray.map(item => (
          <MenuItem key={item.name} value={item.name}>
            {item.name}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id="outlined-select-currency"
        select
        label="Bank"
        className={classes.textField}
        value={values.Bank || bankArray[0].name}
        onChange={handleChange("Bank")}
        SelectProps={{
          MenuProps: {
            className: classes.menu
          }
        }}
        helperText="Please select your customer"
        margin="normal"
        variant="outlined"
      >
        {bankArray.map(item => (
          <MenuItem key={item.name} value={item.name}>
            {item.name}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id="outlined-select-currency"
        select
        label="Currency"
        className={classes.textField}
        value={values.Currency || bankArray[0].currency[0]}
        onChange={handleChange("Currency")}
        SelectProps={{
          MenuProps: {
            className: classes.menu
          }
        }}
        helperText="Please select your currency"
        margin="normal"
        variant="outlined"
      >
        {bankArray[choosenBank].currency.map(item => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </TextField>

      <ActionButton color="primary" buttonName="Create a new invoice" />
    </form>
  );
}
