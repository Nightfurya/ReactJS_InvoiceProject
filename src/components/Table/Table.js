import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ButtonSizes from "../ui/ButtonSizes/ButtonSizes";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
}));

export default function SimpleTable(props) {
  const classes = useStyles();
  const { array } = props;

  const tableBody = array.map(item => (
    <TableRow key={item.invoiceNumber}>
      <TableCell component="th" scope="row">
        {item.invoiceNumber}
      </TableCell>
      <TableCell>{item.invoiceDate}</TableCell>
      <TableCell>{item.supplierName__eng}</TableCell>
      <TableCell className="table-cell__width">{item.customerInformation}</TableCell>
      <TableCell>
        {item.totalPrice} {item.currencyName__eng}
      </TableCell>
      <TableCell align="center">
        <Link to={"/invoice/" + item.invoiceNumber}>
          <ButtonSizes />
        </Link>
      </TableCell>
    </TableRow>
  ));

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>№ Invoice</TableCell>
            <TableCell>Date of creation:</TableCell>
            <TableCell>Supplier</TableCell>
            <TableCell className="table-cell__width">Customer</TableCell>
            <TableCell>Sum</TableCell>
            <TableCell align="center">PDF</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{tableBody}</TableBody>
      </Table>
    </Paper>
  );
}
