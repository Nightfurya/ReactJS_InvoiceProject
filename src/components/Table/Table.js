import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>№ Invoice</TableCell>
            <TableCell>Date of creation:</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>Sum</TableCell>
            <TableCell>Save pdf</TableCell>
            <TableCell>Print</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {array.map(item => (
            <TableRow key={item.invoiceNumber}>
              <TableCell component="th" scope="row">
                {item.invoiceNumber}
              </TableCell>
              <TableCell>{item.dateOfInvoice}</TableCell>
              <TableCell>{item.customer}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>save pdf</TableCell>
              <TableCell>print</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
