import React from "react";
import Button from "@material-ui/core/Button";

export default function ContainedButtons(props) {
  const { buttonName, color, onHandleClick } = props;

  return (
    <>
      <Button variant="contained" onClick={onHandleClick} color={color}>
        {buttonName}
      </Button>
    </>
  );
}
