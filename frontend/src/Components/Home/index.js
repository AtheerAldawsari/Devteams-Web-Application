import * as React from "react";
import "./home.css";

import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { Link } from "react-router-dom";

import featuresHeaderDark from "../../img/DarkmodeImg/features-header-dark.png";
import teamHeaderDark1 from "../../img/DarkmodeImg/team-header-dark1.png";
import teamHeaderDark2 from "../../img/DarkmodeImg/team-header-dark2.png";
import teamHeaderDark3 from "../../img/DarkmodeImg/team-header-dark3.png";
import headerLogoDark from "../../img/DarkmodeImg/header-logo-dark.png";
import headerImgDark from "../../img/DarkmodeImg/header-img-dark.png";
import teamImgDark1 from "../../img/DarkmodeImg/teamImgDark1.png";
import teamImgDark2 from "../../img/DarkmodeImg/teamImgDark2.png";
import teamImgDark3 from "../../img/DarkmodeImg/teamImgDark3.png";
import darkIcon1 from "../../img/DarkmodeImg/dark-icon1.png";
import darkIcon2 from "../../img/DarkmodeImg/dark-icon2.png";
import darkIcon3 from "../../img/DarkmodeImg/dark-icon3.png";
import darkIcon4 from "../../img/DarkmodeImg/dark-icon4.png";
import featuresHeader from "../../img/features-header.png";
import teamHeader1 from "../../img/team-header1.png";
import teamHeader2 from "../../img/team-header2.png";
import teamHeader3 from "../../img/team-header3.png";
import headerLogo from "../../img/header-logo.png";
import headerImg from "../../img/header-img.png";
import teamImg1 from "../../img/team-img1.png";
import teamImg2 from "../../img/team-img2.png";
import teamImg3 from "../../img/team-img3.png";
import icon1 from "../../img/icon-availability.png";
import icon2 from "../../img/icon-location.png";
import icon3 from "../../img/icon-skill.png";
import icon4 from "../../img/icon-commitment.png";

export default function Home(props) {
  return (
    <>
      {(props.dark && (
        <>
          <div className="header">
            <React.Fragment>
              <CssBaseline />
              <Toolbar id="back-to-top-anchor" />
              <Grid
                container
                spacing={2}
                sx={{ marginTop: "100px", backgroundColor: "#e0eff5" }}
              >
                <Grid xs={6}>
                  <img src={headerLogo} alt="" className="header-logo"></img>
                  <h3 className="header-h3">
                    Quickly and Easily Discover Developers Like You, Connect
                    With Your Ideal Teammates and Coding Better Together.
                  </h3>
                  <Button
                    type="submit"
                    variant="contained"
                    underline="none"
                    sx={{
                      ":hover": {
                        bgcolor: "#e4a300",
                      },
                      mt: 3,
                      mb: 2,
                      backgroundColor: "#FFB703",
                      marginLeft: "200px",
                    }}
                  >
                    <Link
                      to="/signup"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Sign up
                    </Link>
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      marginLeft: "15px",
                      backgroundColor: "#00468B",
                      ":hover": {
                        bgcolor: "#00366b",
                      },
                    }}
                    onClick={() => {}}
                  >
                    <a
                      href="#about"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      What is Devteams
                    </a>
                  </Button>
                  <p className="header-p">
                    Already a member?
                    <Link to="/signin" className="header-link">
                      Log in here
                    </Link>
                  </p>
                </Grid>
                <Grid xs={6}>
                  <img src={headerImg} alt="" className="header-img"></img>
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ marginTop: "100px" }}></Grid>
            </React.Fragment>
          </div>

          <div className="features" id="about">
            <img
              className="features-head-img"
              src={featuresHeader}
              alt=""
            ></img>
            <p className="features-p">
              Find like-minded developers that match your…
            </p>
            <div className="features-div">
              <div className="features-subdiv">
                <img className="features-img" src={icon1} alt=""></img>
                <h2 className="features-h1-1">Availability</h2>
                <p className="features-p-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="features-subdiv">
                <img className="features-img" src={icon4} alt=""></img>
                <h2 className="features-h1-1">Commitment</h2>
                <p className="features-p-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="features-subdiv">
                <img className="features-img" src={icon3} alt=""></img>
                <h2 className="features-h1-1">Skill</h2>
                <p className="features-p-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua..
                </p>
              </div>
              <div className="features-subdiv">
                <img className="features-img" src={icon2} alt=""></img>
                <h2 className="features-h1-1">Location</h2>
                <p className="features-p-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: "50px",
              marginBottom: "50px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                marginLeft: "220px",
                marginRight: "180px",
              }}
            >
              <img src={teamImg2} alt=""></img>
              <div>
                <img
                  src={teamHeader1}
                  alt=""
                  width="100%"
                  style={{ marginLeft: "50px", marginTop: "200px" }}
                ></img>
                <h5
                  style={{
                    marginLeft: "60px",
                    marginTop: "50px",
                    color: "#979797",
                    fontSize: "20px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h5>
              </div>
            </div>
            <div
              className="features"
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr",
                backgroundColor: "white",
              }}
            >
              <div>
                <img
                  src={teamHeader2}
                  alt=""
                  width="65%"
                  style={{ marginTop: "200px", marginLeft: "170px" }}
                ></img>

                <h5
                  style={{
                    marginTop: "50px",
                    color: "#979797",
                    fontSize: "20px",
                    marginLeft: "170px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod <br /> tempor incididunt ut labore et dolore magna
                  aliqua.
                </h5>
              </div>
              <img src={teamImg1} alt="" style={{ marginRight: "200px" }}></img>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                marginLeft: "220px",
                marginRight: "180px",
              }}
            >
              <img src={teamImg3} alt=""></img>
              <div>
                <img
                  src={teamHeader3}
                  alt=""
                  width="95%"
                  style={{ marginLeft: "60px", marginTop: "200px" }}
                ></img>
                <h5
                  style={{
                    marginLeft: "60px",
                    marginTop: "50px",
                    color: "#979797",
                    fontSize: "20px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h5>
              </div>
            </div>
          </div>
        </>
      )) || (
        <>
          <div className="header-dark">
            <React.Fragment>
              <CssBaseline />
              <Toolbar id="back-to-top-anchor" />
              <Grid
                container
                spacing={2}
                sx={{ marginTop: "100px", backgroundColor: "#00468B" }}
              >
                <Grid xs={6}>
                  <img
                    src={headerLogoDark}
                    alt=""
                    className="header-logo"
                  ></img>
                  <h3 className="header-h3-dark">
                    Quickly and Easily Discover Developers Like You, Connect
                    With Your Ideal Teammates and Coding Better Together.
                  </h3>
                  <Button
                    type="submit"
                    variant="contained"
                    underline="none"
                    sx={{
                      ":hover": {
                        bgcolor: "#e4a300",
                      },
                      mt: 3,
                      mb: 2,
                      backgroundColor: "#FFB703",
                      marginLeft: "200px",
                    }}
                  >
                    <Link
                      to="/signup"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Sign up
                    </Link>
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      marginLeft: "15px",
                      backgroundColor: "white",
                      ":hover": {
                        bgcolor: "#d4d4d4",
                      },
                    }}
                    onClick={() => {}}
                  >
                    <a
                      href="#about"
                      style={{ color: "#00468B", textDecoration: "none" }}
                    >
                      What is Devteams
                    </a>
                  </Button>
                  <p className="header-p-dark">
                    Already a member?
                    <Link
                      to="/signin"
                      className="header-link"
                      style={{ color: "white" }}
                    >
                      Log in here
                    </Link>
                  </p>
                </Grid>
                <Grid xs={6}>
                  <img src={headerImgDark} alt="" className="header-img"></img>
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ marginTop: "100px" }}></Grid>
            </React.Fragment>
          </div>

          <div
            className="features"
            id="about"
            style={{ backgroundColor: "#4C87C2" }}
          >
            <img
              className="features-head-img"
              src={featuresHeaderDark}
              alt=""
            ></img>
            <p className="features-p" style={{ color: "white" }}>
              Find like-minded developers that match your…
            </p>
            <div className="features-div">
              <div
                className="features-subdiv"
                style={{ backgroundColor: "white" }}
              >
                <img className="features-img" src={darkIcon1} alt=""></img>
                <h2 className="features-h1-1">Availability</h2>
                <p className="features-p-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div
                className="features-subdiv"
                style={{ backgroundColor: "white" }}
              >
                <img className="features-img" src={darkIcon4} alt=""></img>
                <h2 className="features-h1-1">Commitment</h2>
                <p className="features-p-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div
                className="features-subdiv"
                style={{ backgroundColor: "white" }}
              >
                <img className="features-img" src={darkIcon3} alt=""></img>
                <h2 className="features-h1-1">Skill</h2>
                <p className="features-p-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua..
                </p>
              </div>
              <div
                className="features-subdiv"
                style={{ backgroundColor: "white" }}
              >
                <img className="features-img" src={darkIcon2} alt=""></img>
                <h2 className="features-h1-1">Location</h2>
                <p className="features-p-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "50px",
              marginBottom: "50px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                marginLeft: "220px",
                marginRight: "180px",
              }}
            >
              <img src={teamImgDark1} alt=""></img>
              <div>
                <img
                  src={teamHeaderDark1}
                  alt=""
                  width="100%"
                  style={{ marginLeft: "50px", marginTop: "200px" }}
                ></img>
                <h5
                  style={{
                    marginLeft: "60px",
                    marginTop: "50px",
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h5>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr",
                backgroundColor: "#4C87C2",
              }}
            >
              <div>
                <img
                  src={teamHeaderDark2}
                  alt=""
                  width="65%"
                  style={{ marginTop: "200px",marginLeft: "170px", }}
                ></img>

                <h5
                  style={{
                    marginTop: "50px",
                    color: "white",
                    fontSize: "20px",
                    marginLeft: "170px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h5>
              </div>
              <img src={teamImgDark2} alt="" style={{marginRight: "200px"}}></img>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                marginLeft: "220px",
                marginRight: "180px",
              }}
            >
              <img src={teamImgDark3} alt=""></img>
              <div>
                <img
                  src={teamHeaderDark3}
                  alt=""
                  width="95%"
                  style={{ marginLeft: "60px", marginTop: "200px" }}
                ></img>
                <h5
                  style={{
                    marginLeft: "60px",
                    marginTop: "50px",
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h5>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
