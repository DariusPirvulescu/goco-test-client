import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import aboutImg from "assets/images/about.jpg";

const useStyle = makeStyles((theme) => ({
  root: {
    paddingBottom: 40,
    // background: '#f2f2f2'
  },
  gridContainer: {
    flexDirection: "column-reverse",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "initial",
      alignItems: "center",
    },
  },
  imgAbout: {
    width: "80%",
    margin: "20px auto",
    borderRadius: 10,
    display: "block",
    [theme.breakpoints.up("md")]: {
      width: "60%",
      boxShadow: "0 0 10px rgb(0 0 0 / 10%)",
    },
  },
  titleContainer: {
    padding: 24,
    textAlign: "center",
    "& h2": {
      marginBottom: 30,
    },
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
    },
  },
}));

const About = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} sm={6}>
          <img src={aboutImg} alt="basket net" className={classes.imgAbout} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.titleContainer}>
            <Typography className={classes.title} variant="h4" component="h2">
              About Us
            </Typography>
            <Typography
              className={classes.subtitle}
              variant="body2"
              component="p"
            >
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </Typography>
          </div>
        </Grid>
        <br />
        {/* <span>Photo by <a href="https://unsplash.com/@montylov?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">MontyLov</a> on <a href="https://unsplash.com/s/photos/basketball?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> */}
      </Grid>
    </div>
  );
};

export default About;
