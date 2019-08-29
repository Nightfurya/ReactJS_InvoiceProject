import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import PrintIcon from "@material-ui/icons/Print";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function ButtonSizes() {
  const classes = useStyles();

  return (
    <Fab size="small" color="secondary" aria-label="add" className={classes.margin}>
      <PrintIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
    </Fab>
  );
}
