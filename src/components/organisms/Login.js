import React, { useState, useContext, useEffect } from "react";

import {
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Button,
  Grid,
  Checkbox,
} from "@material-ui/core";

import { Link } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";

import { UserContext } from "contexts/userContext";
import { usePostFetch } from "customHooks/usePostFetch"

const useStyles = makeStyles({
  authCard: {
    width: "50%",
    margin: "auto",
  },
});

const Register = () => {
  const classes = useStyles();
  const [inputValues, setInputValues] = useState({});
  const { providedUser } = useContext(UserContext);

  const [res, sendRequest] = usePostFetch()

  const handleChange = (event) => {
    let values = { ...inputValues };
    values[event.target.name] = event.target.value;
    setInputValues(values);
  };

  useEffect(() => {
    if (res.data) {
      localStorage.setItem('user', JSON.stringify(res.data.snapshot))
      providedUser.setUser(res.data.snapshot)
    }

  }, [res.data, providedUser])

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = inputValues;

    sendRequest("/login", body)

  };

  return (
    <div>
      <div className={classes.authCard}>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={handleChange}
            value={inputValues.email || ""}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            onChange={handleChange}
            value={inputValues.password || ""}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <h3>{res.error}</h3>
          {res.loading ? "LOADING..." :
            <Button type="submit" fullWidth variant="contained" color="primary">
              Log In
            </Button>
          }
          <Grid container>
            <Grid item xs>
              <Link to="/reset">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link to='/register'>{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default Register;
