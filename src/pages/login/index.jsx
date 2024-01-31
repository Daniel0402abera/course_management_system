import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    localStorage.setItem("userEmail", username);
    window.location.href = "/";

  
  };
  const paperStyle = {
    paddingTop: 100,
    height: "100vh",
    width: '30%',
    margin: 'auto',
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  const styles = {
    paperContainer: {
      backgroundColor: '#F5F5F5',
    },
  };
  return (
    <Grid style={ styles.paperContainer} width="100%" height="100%">
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2 style={{ margin: "5px auto" }}>Sign In</h2>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            placeholder="Enter Email"
            variant="outlined"
            fullWidth
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextField
            style={{ margin: "10px 0" }}
            label="Password"
            placeholder="Enter password"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Sign in
          </Button>
        </form>
        <Typography>
          <Link color="#fff" href="#">
            Forgot password ?
          </Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ?
          <Link color="#fff" href="#">
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
