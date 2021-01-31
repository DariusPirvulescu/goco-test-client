import React from 'react';

import Tab from '@material-ui/core/Tab';

const NavTab = (props) => {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
};

export default NavTab;
