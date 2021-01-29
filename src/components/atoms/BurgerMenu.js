import React from "react";

import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";


const BurgerMenu = ({ openDrawer}) => {
  return (
    <div>
      <IconButton
        onClick={openDrawer}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
    </div>
  );
}

export default BurgerMenu;
