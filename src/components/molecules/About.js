import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import aboutImg from 'assets/images/about.jpg';

const useStyle = makeStyles((theme) => ({
  root: {
    paddingBottom: 40,
    // background: '#f2f2f2'
  },
  gridContainer: {
    flexDirection: 'column-reverse',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'initial',
      alignItems: 'center',
    },
  },
  imgAbout: {
    // width: "80%",
    padding: '0 24px',
    margin: '20px auto',
    borderRadius: 10,
    display: 'block',
    [theme.breakpoints.up('md')]: {
      padding: 0,
      width: '60%',
      boxShadow: '0 0 10px rgb(0 0 0 / 10%)',
    },
  },
  titleContainer: {
    padding: 24,
    textAlign: 'center',
    '& h2': {
      marginBottom: 30,
    },
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
    },
  },
}));

const About = () => {
  const classes = useStyle();

  return (
    <div className={classes.root} id="about">
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} md={6}>
          <img src={aboutImg} alt="basket net" className={classes.imgAbout} />
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.titleContainer}>
            <Typography className={classes.title} variant="h3" component="h2">
              About Us
            </Typography>
            <Typography
              className={classes.subtitle}
              variant="subtitle1"
              component="p"
            >
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of `&quot;`de Finibus Bonorum et
              Malorum`&quot;` (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, `&quot;`Lorem
              ipsum dolor sit amet..`&quot;`, comes from a line in section 1.10.32.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
