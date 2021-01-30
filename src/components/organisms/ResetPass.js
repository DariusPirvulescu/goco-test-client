import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import ResetPasswordForm from 'components/molecules/ResetPasswordForm';

const useStyles = makeStyles({
  formContainer: {
    marginTop: '25%'
  }
});

const ResetPass = () => {
  const classes = useStyles();

  return (
    <div className={classes.formContainer}>
      <ResetPasswordForm />
    </div>
  );
};

export default ResetPass;
