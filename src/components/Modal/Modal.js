import React from "react";
import "./Modal.scss";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import InputsFormInModal from "../ui/InputsFormInModal/InputsFormInModal";

function getModalStyle() {
  return {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 600,
    height: "90vh",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
    outline: "none"
  }
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const { open, handleClose } = props;
  const { INVOICES, BANKS, CUSTOMERS, SERVICES, SUPLIERS } = props;

  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onBackdropClick={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="modal-title" className="text__center">
            Create a new invoice
          </h2>
          <p id="simple-modal-description" className="text__center">
            Please, fill out all required fields to create and save a new invoice.
          </p>
          <InputsFormInModal
            bankArray={BANKS}
            invoicesArray={INVOICES}
            customersArray={CUSTOMERS}
            servicesArray={SERVICES}
            supliersArray={SUPLIERS}
          />
        </div>
      </Modal>
    </div>
  );
}
