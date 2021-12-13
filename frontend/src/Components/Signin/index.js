import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const theme = createTheme();

export default function Signin(props) {
  const [isError, setIsError] = useState(false);
  const [password, setPassword] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/user/signin", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        props.setLogin(true);
        navigate("/projects");
      })
      .catch((err) => {
        console.log(err.res);
      });
  };

  return (
    <>
      <Toolbar id="back-to-top-anchor" />
      <ThemeProvider theme={theme}>
        <Container
          component="main"
          maxWidth="xs"
          sx={{ paddingTop: "60px", marginBottom: "210px" }}
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
            <Avatar src="/broken-image.jpg" sx={{ m: 1, bgcolor: "#00468B" }} />
            <Typography
              sx={{
                fontFamily: "Comfortaa",
                color: props.dark ? "#00468B" : "white",
                fontWeight: "800",
                marginTop: "20px",
                fontSize: "40px",
              }}
              component="h1"
              variant="h5"
            >
              Sign in
            </Typography>
            <Box
              sx={{ mt: 3 }}
              component="form"
              noValidate
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
                <Grid item xs={12}>
                  <TextField
                    error={isError}
                    autoFocus
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
                Sign In
              </Button>
              <Grid container justifyContent="flex-start">
                <Grid item>
                  <Link
                    to="/signup"
                    style={{
                      color: props.dark ? "#00468B" : "white",
                      ":hover": {
                        color: props.dark ? "primary" : "#CDCDCC",
                      },
                      textDecoration: "none",
                      fontSize:"14px"
                    }}
                  >
                    <p> Don't have an account? Sign up</p>
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
