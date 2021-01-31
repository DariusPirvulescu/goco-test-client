import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import TextLink from 'components/atoms/TextLink';

import { footers } from 'assets/data/footerInfo';
import logo from 'assets/images/logo.png';

const useStyle = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    padding: 24,
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  logoContainer: {
    textAlign: 'center',
  },
  logo: {
    width: 35,
    margin: 'auto',
  },
}));

const Footer = () => {
  const classes = useStyle();

  return (
    <div id="contact" className={classes.footer}>
      <Grid container spacing={4} justify="space-between">
        <Grid item container sm={9}>
          {footers.map((footer) => (
            <Grid item xs={6} sm={4} key={footer.title}>
              <Typography variant="h5" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <TextLink
                      to="/#"
                      variant="subtitle2"
                      color="textSecondary"
                    >
                      {item}
                    </TextLink>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Grid item sm={3}>
          <Typography variant="h5" color="textPrimary" gutterBottom>
            Contact
          </Typography>

          <Typography>01234 567890</Typography>
          <Typography>
            <TextLink to="/#">Contact us</TextLink>
          </Typography>
          <Typography>Street, City, County, Country</Typography>
        </Grid>

        <Grid item xs={12}>
          <p>
            Photo by{' '}
            <a href="https://unsplash.com/@montylov?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
              MontyLov
            </a>{' '}
            on{' '}
            <a href="https://unsplash.com/s/photos/basketball?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
              Unsplash
            </a>
          </p>
          <p>
            Illustration by <a href="undefined">Maria Shukshina</a> from{' '}
            <a href="https://icons8.com/">Icons8</a>
          </p>
          <p>
            Illustration by <a href="undefined">Icons 8</a> from{' '}
            <a href="https://icons8.com/">Icons8</a>
          </p>
        </Grid>

        <Grid
          item
          xs={12}
          className={classes.logoContainer}
        >
          <img src={logo} alt="basket ball logo" className={classes.logo} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
