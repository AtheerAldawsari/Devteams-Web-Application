import { useNavigate } from "react-router-dom";
import { useState } from "react";

import axios from "axios";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const theme = createTheme();

export default function Signup(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/user/signup", {
        firstName,
        lastName,
        email,
        password,
      })
      .then((res) => {
        navigate("/signin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Toolbar id="back-to-top-anchor" />
        <Container
          component="main"
          maxWidth="xs"
          sx={{ paddingTop: "20px", marginBottom: "180px" }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#00468B" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              sx={{
                fontFamily: "Comfortaa",
                color: props.dark ? "#00468B" : "white",
                fontWeight: "800",
                marginTop: "20px",
                fontSize: "40px",
              }}
            >
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 3 }}
              onSubmit={(e) => {
                if (isEmpty) {
                  e.preventDefault();
                  setIsEmpty(true);
                  setIsError(true);
                } else {
                  setIsEmpty(false);
                  handleSubmit(e);
                }
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error={isError}
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    variant="filled"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                      if (firstName.length !== 0) {
                        setIsEmpty(false);
                      }
                    }}
                    sx={{
                      bgcolor: props.dark ? "transparent" : "white",
                      borderRadius: 1,
                      borderColor: "red",
                    }}
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error={isError}
                    variant="filled"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    onChange={(e) => {
                      setLastName(e.target.value);
                      if (lastName.length !== 0) {
                        setIsEmpty(false);
                      }
                    }}
                    sx={{
                      bgcolor: props.dark ? "transparent" : "white",
                      borderRadius: 1,
                      borderColor: "red",
                    }}
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={isError}
                    variant="filled"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (email.length !== 0) {
                        setIsEmpty(false);
                      }
                    }}
                    sx={{
                      bgcolor: props.dark ? "transparent" : "white",
                      borderRadius: 1,
                      borderColor: "red",
                    }}
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={isError}
                    variant="filled"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (password.length !== 0) {
                        setIsEmpty(false);
                      }
                    }}
                    sx={{
                      bgcolor: props.dark ? "transparent" : "white",
                      borderRadius: 1,
                      borderColor: "red",
                    }}
                  ></TextField>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  ":hover": { bgcolor: "#e4a300" },
                  mt: 3,
                  mb: 2,
                  backgroundColor: "#FFB703",
                }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-start">
                <Grid item>
                  <Link
                    to="/signin"
                    style={{
                      color: props.dark ? "#00468B" : "white",
                      ":hover": {
                        color: props.dark ? "primary" : "#CDCDCC",
                      },
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    <p>Already have an account? Sign in</p>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
