import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import headerImg from "assets/images/main.png";
import ActionButton from "components/atoms/ActionButton";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "100vw",
  },
  gridContainer: {
    flexDirection: "column-reverse",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  vector: {
    width: "50%",
    margin: "auto",
    display: "block",
    [theme.breakpoints.up("sm")]: {
      width: "65%"
    },
  },
  titleContainer: {
    marginTop: 30,
    padding: '0 24px',
    [theme.breakpoints.up("sm")]: {
      marginTop: '15%'
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "25%",
      paddingRight: 144,
    }
  },
  centerMobile: {
    textAlign: 'center',
    [theme.breakpoints.up("sm")]: {
      textAlign: 'left'
    },
  },
  subtitle: {
    fontWeight: 200,
    marginTop: 10
  },
  cta: {
    marginTop: 50,
    width: 150,
    height: 50
  }
}));

const Header = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} sm={6}>
        <div className={classes.titleContainer}>
          <Typography className={`${classes.title} ${classes.centerMobile}`} variant="h4" component="h1" >
            Become the best that there ever was in this entire world
          </Typography>
          <Typography className={`${classes.subtitle} ${classes.centerMobile}`} variant="body2" component="h3" >
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
