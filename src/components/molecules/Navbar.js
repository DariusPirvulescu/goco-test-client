import React, { useState, useContext, useEffect } from 'react';

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
import UserAvatar from 'components/atoms/Avatar';
import DropMenu from 'components/atoms/DropMenu';

import { UserContext } from 'contexts/userContext';
import { usePostFetch } from 'customHooks/usePostFetch';

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    marginBottom: 20,
  },
  grow: {
    flexGrow: 1,
  },
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
  listText: {
    fontSize: theme.typography.subtitle2.fontSize,
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
  const [menuAnchor, setMenuAnchor] = useState(null);

  const history = useHistory();

  /*eslint-disable no-unused-vars */
  const [res, sendRequest] = usePostFetch();
  /*eslint-eable no-unused-vars */

  const { providedUser } = useContext(UserContext);

  useEffect(() => {
    setMenuAnchor(null);
  }, []);

  const openDrawerHandler = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleMenuOpen = (e) => {
    setMenuAnchor(e.currentTarget);
  };

  const handleLogOut = () => {
    sendRequest('/sign-out', {});
    providedUser.setUser(null);
    localStorage.clear();
    history.push('/');
  };

  const list = (
    <div className={classes.list} onClick={closeDrawer}>
      <List>
        {providedUser.user && providedUser.user.name && (
          <ListItem className={classes.avatarContainer}>
            <TextLink to="/dashboard">
              <UserAvatar size="medium" />
            </TextLink>
          </ListItem>
        )}

        <ListItem>
          <TextLink hash to="/#about">
            <ListItemText primary={<Typography variant="subtitle1">About</Typography>} />
          </TextLink>
        </ListItem>

        <ListItem>
          <TextLink hash to="/#pricing">
            <ListItemText primary={<Typography variant="subtitle1">Pricing</Typography>} />
          </TextLink>
        </ListItem>

        <ListItem>
          <TextLink hash to="/#contact">
            <ListItemText primary={<Typography variant="subtitle1">Contacts</Typography>} />
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
          <TextLink to="/" variant="h3" >Baller</TextLink>          
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <div className={classes.navLinks}>
              <TextLink
                hash
                to="/#about"
                variant='subtitle2' >
                About
              </TextLink>

              <TextLink
                hash
                to="/#pricing" 
                variant='subtitle2' >
                Pricing
              </TextLink>

              <TextLink
                hash
                to="/#contact"
                variant='subtitle2' >
                Contact
              </TextLink>

              {providedUser.user && providedUser.user.name ? (
                <div>
                  <UserAvatar size="small" onClick={handleMenuOpen} />
                  <DropMenu
                    onClose={handleMenuClose}
                    anchorEl={menuAnchor}
                    logoutHandler={handleLogOut}
                  />
                </div>
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
