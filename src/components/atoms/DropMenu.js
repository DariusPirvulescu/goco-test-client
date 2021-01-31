import React from 'react';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from 'react-router-dom';

const DropMenu = ({onClose, anchorEl, logoutHandler }) => {
  const history = useHistory()

  return (
    <Menu
    id="simple-menu"
    anchorEl={anchorEl}
    keepMounted
    open={anchorEl}
    onClose={onClose}
  >
    <MenuItem >Profile</MenuItem>
    <MenuItem >My account</MenuItem>
    <MenuItem onClick={() => history.push('/dashboard')} >Dashboard</MenuItem>
    <MenuItem onClick={logoutHandler}>Logout</MenuItem>
  </Menu>
  );
}

export default DropMenu;