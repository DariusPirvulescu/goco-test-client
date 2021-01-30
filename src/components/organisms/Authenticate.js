import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import LoginForm from 'components/molecules/LoginForm';
import RegisterForm from 'components/molecules/RegisterForm';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '90vh',
  },

  image: {
    backgroundImage: 'url(https://source.unsplash.com/Ue5MJoavkIc)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));

const Authenticate = ({ action }) => {
  const classes = useStyles();

  return (
    
      <Grid container component="main" className={classes.root}>
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} elevation={6} square>
         { action === 'login' ?
          <LoginForm />
          :
          <RegisterForm />}
        </Grid>
      </Grid>
  );
};

export default Authenticate;
