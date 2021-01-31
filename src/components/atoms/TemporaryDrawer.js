import React from 'react';

import Drawer from '@material-ui/core/Drawer';

const TemporaryDrawer = ({ children, open, handleDrawerClose }) => {

  return (
    <Drawer anchor='left' open={open} variant='temporary' onClose={handleDrawerClose} >
      { children }
    </Drawer>
  )
}

export default TemporaryDrawer;