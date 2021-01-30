import React from "react";

import Button from "@material-ui/core/Button";

import TextLink from "./TextLink";

const ActionButton = ({ style }) => {
  return (
    <TextLink to="/register">
      <Button className={style} variant="contained" color="primary">
        Sign Up
      </Button>
    </TextLink>
  );
};

export default ActionButton;
