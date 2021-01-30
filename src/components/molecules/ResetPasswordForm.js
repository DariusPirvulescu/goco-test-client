import React, { useState, useContext, useEffect } from 'react';

import {
  Typography,
  Button,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import TextInput from 'components/atoms/TextInput';
import LoadSpinner from 'components/atoms/LoadSpinner';

import { usePostFetch } from 'customHooks/usePostFetch';
import { UserContext } from 'contexts/userContext';

const useStyles = makeStyles({
  authCard: {
    width: '50%',
    margin: 'auto',
  },
});

const ResetPasswordForm = () => {
  const { providedUser } = useContext(UserContext)

  const classes = useStyles();
  const [email, setEmail] = useState('');

  const [res, sendRequest] = usePostFetch();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const body = {email: email}

    sendRequest('/reset-password', body)
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
        <form onSubmit={handleSubmit}>
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

          <h3>{res.error && res.error.message}</h3>
          <h3>{res.data && res.data.message}</h3>
          <div>


          {res.loading ? 
            <LoadSpinner />
            :
            <Button type="submit" fullWidth variant="contained" color="primary">
              Reset my password
            </Button>
          }

          </div>
        </form>
      </div>
  );
};

export default ResetPasswordForm;
