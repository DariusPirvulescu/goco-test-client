import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';

import NavTab from 'components/atoms/NavTab';
import NavPannel from 'components/atoms/NavPannel';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 0 10px rgb(0 0 0 / 10%)',
  },
  pannel: {
    height: 300
  }
}))

const TabsMenu = () => {
  const classes = useStyles()
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function passProps(index) {
    return {
      id: `nav-tab-${index}`,
      'aria-controls': `nav-tabpanel-${index}`,
    };
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Tabs
          indicatorColor='primary'
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <NavTab label="Notebook" {...passProps(0)} />
          <NavTab label="Statistics" {...passProps(1)} />
          <NavTab label="Events" {...passProps(2)} />
          <NavTab label="Friends" {...passProps(3)} />

        </Tabs>
      </AppBar>
      <NavPannel value={value} index={0} className={classes.pannel}>
        Notebook entries
      </NavPannel>
      <NavPannel value={value} index={1} className={classes.pannel}>
        Statistics
      </NavPannel>
      <NavPannel value={value} index={2} className={classes.pannel}>
        Events
      </NavPannel>
      <NavPannel value={value} index={3} className={classes.pannel}>
        Friends
      </NavPannel>
    </div>
  );
}

export default TabsMenu;