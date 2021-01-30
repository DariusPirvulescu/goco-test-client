import React, { useState, useEffect, useContext } from 'react';

import { Avatar, Typography, Button, Grid } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import TextInput from 'components/atoms/TextInput';

import { UserContext } from 'contexts/userContext';
import { usePostFetch } from 'customHooks/usePostFetch';

const useStyles = makeStyles((theme) => ({
  authCard: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const LoginForm = () => {
  const classes = useStyles();

  const [inputValues, setInputValues] = useState({});
  const { providedUser } = useContext(UserContext);

  const [res, sendRequest] = usePostFetch();

  const handleChange = (event) => {
    let values = { ...inputValues };
    values[event.target.name] = event.target.value;
    setInputValues(values);
  };

  useEffect(() => {
    if (res.data) {
      localStorage.setItem('user', JSON.stringify(res.data.snapshot));
      providedUser.setUser(res.data.snapshot);
    }
  }, [res.data, providedUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = inputValues;

    sendRequest('/login', body);
  };

  return (
    <div className={classes.authCard}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Log In
      </Typography>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextInput
          onChange={handleChange}
          value={inputValues.email || ''}
          variant="outlined"
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
        />

        <TextInput
          onChange={handleChange}
          value={inputValues.password || ''}
          variant="outlined"
          id="password"
          label="Password Address"
          name="password"
          type="password"
        />

        <h3>{res.error && res.error.message}</h3>
        {res.loading ? (
          'LOADING...'
        ) : (
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log In
          </Button>
        )}
        <Grid container>
          <Grid item xs>
            <Link to="/reset">Forgot password?</Link>
          </Grid>
          <Grid item>
            <Link to="/register">{'Don\'t have an account? Sign Up'}</Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default LoginForm;
