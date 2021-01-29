import React, { useState } from "react";

import {
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  authCard: {
    width: "50%",
    margin: "auto",
  },
});

const ResetPass = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const body = {email: email}

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    // http://localhost:5000/login
    // https://goco-test-api.herokuapp.com/login
    fetch("http://localhost:5000/reset-password", requestOptions, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if (data.type === "succes") {
          setStatus(data.message)
        } else {
          setStatus(data.message);
        }
        setLoading(false)
      });
  };

  return (
    <div>
      <div className={classes.authCard}>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Password Reset
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            value={email}
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
          <h3>{status}</h3>
          {loading ? "LOADING..." :
            <Button type="submit" fullWidth variant="contained" color="primary">
            Reset my password
            </Button>
          }
        </form>
      </div>
    </div>
  );
};

export default ResetPass;
