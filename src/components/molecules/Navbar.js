import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { HashLink as Link } from "react-router-hash-link";

import BurgerMenu from "components/atoms/BurgerMenu";
import TemporaryDrawer from "components/atoms/TemporaryDrawer";
import TextLink from "components/atoms/TextLink";

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
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
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  list: {
    width: 250,
    marginTop: 30,
  },
  fullList: {
    width: "auto",
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawerHandler = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const list = (
    <div className={classes.list} role="presentation" onClick={closeDrawer}>
      <List>
        {["About", "Pricing", "Contact"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem>
          <TextLink to="/login">
            <Button variant="contained" color="primary">
              Log In
            </Button>
          </TextLink>
        </ListItem>
        <ListItem>
          <TextLink to="/register">
            <Button variant="contained" color="primary">
              Sign Up
            </Button>
          </TextLink>
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
              <Link
                to="#about"
                style={{ textDecoration: "none", color: "#000" }}
              >
                About
              </Link>

              <Link
                to="/#pricing"
                style={{ textDecoration: "none", color: "#000" }}
              >
                Pricing
              </Link>

              <Link
                to="/#contact"
                style={{ textDecoration: "none", color: "#000" }}
              >
                Contacts
              </Link>

              <TextLink to="/register">
                <Button variant="outlined" color="primary">
                  Sign Up
                </Button>
              </TextLink>
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
