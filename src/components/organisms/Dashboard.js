import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Avatar from 'components/atoms/Avatar';
import TabsMenu from 'components/molecules/TabsMenu';

const useStyles = makeStyles(theme => ({
  dashboardContainer: {
    color: theme.primaryColor,
    gap: 50,
    marginTop: 80,
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'column',
      maxWidth: '50%',
      margin: '80px auto',
      
      minHeight: '70vh',
      minWidth: 640

    }
  }
}))

function Dashboard() {
  const classes = useStyles();

  return (
    <Grid container  className={classes.dashboardContainer} justify='center' alignItems='center'>
      <Grid item xs={12} >
        <Avatar size='large'/>
      </Grid>

      <Grid item xs={12} >
        <TabsMenu />
      </Grid>
    </Grid>
  );
}

export default Dashboard;
