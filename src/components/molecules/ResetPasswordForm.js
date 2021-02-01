import React, { useState, useContext, useEffect } from 'react';

import { Typography, Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import TextInput from 'components/atoms/TextInput';
import LoadSpinner from 'components/atoms/LoadSpinner';

import { usePostFetch } from 'customHooks/usePostFetch';
import { UserContext } from 'contexts/userContext';

const useStyles = makeStyles(theme => ({
  authCard: {
    width: '90%',
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
      maxWidth: 460
    }
  },
  resetFormContainer: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const ResetPasswordForm = () => {
  const { providedUser } = useContext(UserContext);

  const classes = useStyles();
  const [email, setEmail] = useState('');

  const [res, sendRequest] = usePostFetch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { email: email };

    sendRequest('/reset-password', body);
  };

  useEffect(() => {
    if (res.data) {
      localStorage.setItem('user', JSON.stringify(res.data.snapshot));
      providedUser.setUser(res.data.snapshot);
    }
  }, [res.data, providedUser]);

  return (
    <div className={classes.authCard}>
      <Typography component="h1" variant="h5">
        Password Reset
      </Typography>
      <form onSubmit={handleSubmit} className={classes.resetFormContainer}>
        <TextInput
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          variant="outlined"
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />

        {res.data && <Alert severity="success">{res.data.message}</Alert>}
        {res.error && <Alert severity="error">{res.error}</Alert>}
        <div className={classes.submit}>
          {res.loading ? (
            <LoadSpinner alignCenter />
          ) : (
            <Button type="submit" fullWidth variant="contained" color="primary">
              Reset my password
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
