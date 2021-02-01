import React, { useState, useContext, useEffect } from 'react';

import {
  Avatar,
  Typography,
  Button,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link, useHistory } from 'react-router-dom';

import LoadSpinner from 'components/atoms/LoadSpinner';
import TextInput from 'components/atoms/TextInput';

import { UserContext } from 'contexts/userContext';
import { usePostFetch } from 'customHooks/usePostFetch';

const useStyles = makeStyles((theme) => ({
  authCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(2, 2),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(2, 5),
    }
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

const RegisterForm = () => {
  const classes = useStyles();
  const [inputValues, setInputValues] = useState({});
  const [error, setError] = useState('');
  const history = useHistory()

  const { providedUser } = useContext(UserContext);
  const [res, sendRequest] = usePostFetch();

  useEffect(() => {
    if (res.data) {
      localStorage.setItem('user', JSON.stringify(res.data.snapshot));
      providedUser.setUser(res.data.snapshot);
      setInputValues({});
      history.push('/dashboard')
    }
  }, [res.data, providedUser]);

  const handleChange = (event) => {
    let values = { ...inputValues };
    values[event.target.name] = event.target.value;

    setInputValues(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (inputValues.password !== inputValues.passwordConfirm) {
      setError('Passwords don\'t match');
      return;
    }

    const body = inputValues;

    sendRequest('/register', body);
  };

  return (
      <div className={classes.authCard}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <TextInput
            onChange={handleChange}
            value={inputValues.name || ''}
            variant="outlined"
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextInput
            onChange={handleChange}
            value={inputValues.email || ''}
            variant="outlined"
            id="email"
            label="Email Address"
            name="email"
            type="email"
            autoComplete="email"
          />
          <TextInput
            onChange={handleChange}
            value={inputValues.password || ''}
            variant="outlined"
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextInput
            onChange={handleChange}
            value={inputValues.passwordConfirm || ''}
            variant="outlined"
            name="passwordConfirm"
            label="Repeat Password"
            type="password"
            id="password-confirm"
            autoComplete="current-password"
          />
          {res.error && 
            <Alert severity="error">
              {res.error}
            </Alert>
          }
          {error && 
            <Alert severity="info">
              {error}
            </Alert>
          }
          {res.loading ? (
            <LoadSpinner alignCenter />
          ) : (
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              Sign Up
            </Button>
          )}
          <Grid container>
            <Grid item>
              <Typography>Already have an account?</Typography> <Link to="/login">{'Log In'}</Link>
            </Grid>
          </Grid>
        </form>
      </div>
  );
};

export default RegisterForm;
