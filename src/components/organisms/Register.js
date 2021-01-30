import React, { useState, useContext, useEffect } from "react";

import {
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Button,
  Checkbox,
} from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";

import { UserContext } from "contexts/userContext";
import { usePostFetch } from "customHooks/usePostFetch";

const useStyles = makeStyles({
  authCard: {
    width: "50%",
    margin: "auto",
  },
});

const Register = () => {
  const classes = useStyles();
  const [inputValues, setInputValues] = useState({});
  const [error, setError] = useState("");
  const { providedUser } = useContext(UserContext);
  const [res, sendRequest] = usePostFetch();

  useEffect(() => {
    if (res.data) {
      localStorage.setItem("user", JSON.stringify(res.data.snapshot));
      providedUser.setUser(res.data.snapshot);
      setInputValues({});
    }
  }, [res.data, providedUser]);

  const handleChange = (event) => {
    let values = { ...inputValues };
    values[event.target.name] = event.target.value;

    setInputValues(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (inputValues.password !== inputValues.passwordConfirm) {
      setError("Passwords don't match");
      return;
    }

    const body = inputValues;

    sendRequest("/register", body);
  };

  return (
    <div>
      <div className={classes.authCard}>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={handleChange}
            value={inputValues.name || ""}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
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
            autoComplete="current-password"
          />
          <TextField
            onChange={handleChange}
            value={inputValues.passwordConfirm || ""}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="passwordConfirm"
            label="Repeat Password"
            type="password"
            id="password-confirm"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <h3>{res.error}</h3>
          <h3>{error}</h3>
          {res.loading ? (
            "LOADING..."
          ) : (
            <Button type="submit" fullWidth variant="contained" color="primary">
              Sign Up
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
