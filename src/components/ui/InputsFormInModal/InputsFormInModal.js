import React from "react";
import "./InputsFormInModal.scss";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import ActionButton from "../ActionButton/ActionButton";

const currencies = [
  {
    value: "USD",
    label: "$"
  },
  {
    value: "EUR",
    label: "€"
  },
  {
    value: "BTC",
    label: "฿"
  },
  {
    value: "JPY",
    label: "¥"
  }
];

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
  padding: {
    paddingTop: "18.5px",
    paddingRight: "24px",
    paddingBottom: "18.5px",
    paddingLeft: "14px"
  },
  menu: {
    width: 200
  }
}));

export default function InputsFormInModal() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={[classes.container, "form__flex-container"].join(" ")} noValidate autoComplete="off">
      {/* <TextField
        error
        id="outlined-error"
        label="Error"
        defaultValue="Hello World"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      /> */}
      <TextField
        id="outlined-dense"
        label="Invoice №"
        className={clsx(classes.textField, classes.dense)}
        margin="padding"
        variant="outlined"
      />
      <TextField
        id="datetime-local"
        label="Invoice date"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        id="outlined-select-currency"
        select
        label="Supplier"
        className={classes.textField}
        value={values.currency}
        onChange={handleChange("currency")}
        SelectProps={{
          MenuProps: {
            className: classes.menu
          }
        }}
        helperText="Please select your supplier"
        margin="normal"
        variant="outlined"
      >
        {currencies.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-select-currency"
        select
        label="Customer"
        className={classes.textField}
        value={values.currency}
        onChange={handleChange("currency")}
        SelectProps={{
          MenuProps: {
            className: classes.menu
          }
        }}
        helperText="Please select your customer"
        margin="normal"
        variant="outlined"
      >
        {currencies.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-dense"
        label="Customer name"
        className={clsx(classes.textField, classes.dense)}
        margin="padding"
        variant="outlined"
      />
      <TextField
        id="outlined-dense"
        label="Customer bank-info"
        className={clsx(classes.textField, classes.dense)}
        margin="padding"
        variant="outlined"
      />
      <TextField
        id="outlined-select-currency"
        select
        label="Service"
        className={classes.textField}
        value={values.currency}
        onChange={handleChange("currency")}
        SelectProps={{
          MenuProps: {
            className: classes.menu
          }
        }}
        helperText="Please select your service"
        margin="normal"
        variant="outlined"
      >
        {currencies.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-select-currency"
        select
        label="Currency"
        className={classes.textField}
        value={values.currency}
        onChange={handleChange("currency")}
        SelectProps={{
          MenuProps: {
            className: classes.menu
          }
        }}
        helperText="Please select your currency"
        margin="normal"
        variant="outlined"
      >
        {currencies.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-select-currency"
        select
        label="Bank"
        className={classes.textField}
        value={values.currency}
        onChange={handleChange("currency")}
        SelectProps={{
          MenuProps: {
            className: classes.menu
          }
        }}
        helperText="Please select your customer"
        margin="normal"
        variant="outlined"
      >
        {currencies.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <ActionButton color="primary" buttonName="Create a new invoice" />
    </form>
  );
}
