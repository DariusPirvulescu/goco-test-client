import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Avatar from 'components/atoms/Avatar';
import TabsMenu from 'components/molecules/TabsMenu';

import { UserContext } from 'contexts/userContext';

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
  },
  dashboardHeader: {
    textAlign: 'center',
    '& h5': {
      marginTop: 20
    }
  }
}))

function Dashboard() {
  const classes = useStyles();
  const { providedUser } = useContext(UserContext);

  return (
    <Grid container spacing={1} className={classes.dashboardContainer} justify='center' alignItems='center'>
      <Grid item xs={12} className={classes.dashboardHeader}>
        <Avatar size='large'/>
        <Typography variant="h5">
          Hi {providedUser.user && providedUser.user.name}
        </Typography>
      </Grid>

      <Grid item xs={12} >
        <TabsMenu />
      </Grid>
    </Grid>
  );
}

export default Dashboard;
