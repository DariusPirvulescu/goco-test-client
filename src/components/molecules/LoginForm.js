import React, { useState, useEffect, useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Typography, Button, Grid } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link, useHistory } from 'react-router-dom';

import TextInput from 'components/atoms/TextInput';
import LoadSpinner from 'components/atoms/LoadSpinner';

import { UserContext } from 'contexts/userContext';
import { usePostFetch } from 'customHooks/usePostFetch';

const useStyles = makeStyles((theme) => ({
  authCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(5, 2),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(5),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const history = useHistory()
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
      history.push('/dashboard')
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
        {res.error && <Alert severity="error">{res.error && res.error}</Alert>}

        {res.loading ? (
          <LoadSpinner alignCenter />
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
            <Link to="/reset">Forgot password ?</Link>
          </Grid>
          <Grid item>
            <span>{'Don\'t have an account?'}</span>{' '}
            <Link to="/register">{'Sign Up'}</Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default LoginForm;
