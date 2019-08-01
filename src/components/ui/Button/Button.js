import React from "react";
import Button from "@material-ui/core/Button";

export default function ContainedButtons(props) {
  const { buttonName, color } = props;

  return (
    <>
      <Button variant="contained" color={color}>
        {buttonName}
      </Button>
    </>
  );
}
