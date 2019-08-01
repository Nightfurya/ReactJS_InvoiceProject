import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
    position: "absolute",
    left: "calc(50% - 20px)",
    top: "calc(50% - 20px)"
  }
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <>
      <CircularProgress className={classes.progress} color="secondary" />
    </>
  );
}
