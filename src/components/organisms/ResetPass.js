import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import ResetPasswordForm from 'components/molecules/ResetPasswordForm';

const useStyles = makeStyles((theme) => ({
  resetContainer: {
    marginTop: '25%',
    [theme.breakpoints.up('sm')]: {
      marginTop: '10%',
    },
  },
}));

const ResetPass = () => {
  const classes = useStyles();

  return (
    <div className={classes.resetContainer}>
      <ResetPasswordForm />
    </div>
  );
};

export default ResetPass;
