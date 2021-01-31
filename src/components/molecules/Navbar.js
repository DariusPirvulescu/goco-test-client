import React, { useState, useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

import BurgerMenu from 'components/atoms/BurgerMenu';
import TemporaryDrawer from 'components/atoms/TemporaryDrawer';
import TextLink from 'components/atoms/TextLink';
import ButtonLink from 'components/atoms/ButtonLink';
import Avatar from 'components/atoms/Avatar';

import { UserContext } from 'contexts/userContext';
import { usePostFetch } from 'customHooks/usePostFetch';

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  // title: {
  //   display: "none",
  //   [theme.breakpoints.up("sm")]: {
  //     display: "block"
  //   }
  // },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  list: {
    width: 250,
    marginTop: 30,
  },
  fullList: {
    width: 'auto',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  avatarContainer: {
    '& a': {
      margin: 'auto',
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const history = useHistory();

  const [res, sendRequest] = usePostFetch();
  const { providedUser } = useContext(UserContext);

  const openDrawerHandler = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleLogOut = () => {
    sendRequest('/sign-out', {});
    providedUser.setUser(null);
    localStorage.clear();
    history.push('/');
    res;
  };

  const list = (
    <div className={classes.list} onClick={closeDrawer}>
      <List>
        {providedUser.user && providedUser.user.name && (
          <ListItem className={classes.avatarContainer}>
            <TextLink to="/dashboard">
              <Avatar size="medium" />
            </TextLink>
          </ListItem>
        )}
        <ListItem>
          <TextLink hash to="/#about">
            <ListItemText primary="About" />
          </TextLink>
        </ListItem>

        <ListItem>
          <TextLink hash to="/#pricing">
            <ListItemText primary="Pricing" />
          </TextLink>
        </ListItem>

        <ListItem>
          <TextLink hash to="/#contact">
            <ListItemText primary="Contacts" />
          </TextLink>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          {providedUser.user && providedUser.user.name ? (
            <ButtonLink to="/dashboard" variant="contained" color="primary">
              Dashboard
            </ButtonLink>
          ) : (
            <ButtonLink to="/login" variant="contained" color="primary">
              Log In
            </ButtonLink>
          )}
        </ListItem>
        <ListItem>
          {providedUser.user && providedUser.user.name ? (
            <Button onClick={handleLogOut} variant="contained" color="primary">
              Log Out
            </Button>
          ) : (
            <ButtonLink to="/register" variant="contained" color="primary">
              Sign Up
            </ButtonLink>
          )}
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.grow}>
      <AppBar color="inherit" className={classes.appBar} position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h4" noWrap>
            <TextLink to="/">Baller</TextLink>
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <div className={classes.navLinks}>
              <TextLink
                hash
                to="/#about"
                style={{ textDecoration: 'none', color: '#000' }}
              >
                About
              </TextLink>

              <TextLink
                hash
                to="/#pricing"
                style={{ textDecoration: 'none', color: '#000' }}
              >
                Pricing
              </TextLink>

              <TextLink
                hash
                to="/#contact"
                style={{ textDecoration: 'none', color: '#000' }}
              >
                Contacts
              </TextLink>

              {providedUser.user && providedUser.user.name ? (
                <TextLink to="/dashboard">
                  <Avatar size="small" />
                </TextLink>
              ) : (
                <ButtonLink to="register" variant="contained" color="primary">
                  Sign Up
                </ButtonLink>
              )}
            </div>
          </div>
          <div className={classes.sectionMobile}>
            <BurgerMenu openDrawer={openDrawerHandler} />
            <TemporaryDrawer
              open={isDrawerOpen}
              handleDrawerClose={closeDrawer}
            >
              {list}
            </TemporaryDrawer>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
