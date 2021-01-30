import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import headerImg from 'assets/images/main.png';
import ActionButton from 'components/atoms/ActionButton';

const useStyle = makeStyles((theme) => ({
  root: {
    width: '100vw',
    paddingBottom: 50,
  },
  gridContainer: {
    flexDirection: 'column-reverse',
    [theme.breakpoints.up('sm')]: {
      height: '70vh',
      flexDirection: 'row',
    },
    [theme.breakpoints.up('md')]: {
      height: '80vh',
    },
  },
  vector: {
    width: '50%',
    margin: 'auto',
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      width: '65%',
      marginTop: 30,
    },
  },
  titleContainer: {
    marginTop: 30,
    padding: '0 24px',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      marginTop: '15%',
      textAlign: 'left',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '25%',
      paddingRight: 144,
    },
  },
  subtitle: {
    fontWeight: 200,
    marginTop: 10,
  },
  cta: {
    marginTop: 30,
    width: 100,
    height: 45,
    [theme.breakpoints.up('md')]: {
      marginTop: 70,
      width: 150,
      height: 50,
    },
  },
}));

const Header = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} sm={6}>
          <div className={classes.titleContainer}>
            <Typography className={classes.title} variant="h4" component="h1">
              Become the best that there ever was in this entire world
            </Typography>
            <Typography
              className={classes.subtitle}
              variant="subtitle1"
              component="h3"
              color="textSecondary"
            >
              Get tracking your progress with the this amazing SaaS platform
            </Typography>
            <ActionButton style={classes.cta} />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img
            src={headerImg}
            alt="basketball player vector"
            className={classes.vector}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
