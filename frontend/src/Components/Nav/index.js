import * as React from "react";

import { useNavigate } from "react-router";
import { useState } from "react";

import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import AccountCircle from "@mui/icons-material/AccountCircle";
import logoDark from "../../img/DarkmodeImg/logo-dark.png";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import InputBase from "@mui/material/InputBase";
import SendIcon from "@mui/icons-material/Send";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";

import logo from "../../img/logo.png";

export default function Nav(props) {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const mobileMenuId = "primary-search-account-menu-mobile";
  const menuId = "primary-search-account-menu";

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    props.setSearch(false);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMenuCloseSignup = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    navigate("/signup");
  };

  const handleMenuCloseSignin = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    navigate("/signin");
  };

  const handleMenuCloseProjects = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    navigate("/myprojects");
  };

  const handleMenuCloseSignout = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    navigate("/");
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuCloseSignin}>Sign In</MenuItem>
      <MenuItem onClick={handleMenuCloseSignup}>Sign Up</MenuItem>
    </Menu>
  );

  const renderMenuLogin = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuCloseProjects}>My Projects</MenuItem>
      <MenuItem
        onClick={() => {
          props.setLogin(false);
          handleMenuCloseSignout();
        }}
      >
        Sign Out
      </MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge>
            <HomeIcon />
          </Badge>
        </IconButton>
        <p style={{ paddingTop: "16px" }}>Requests</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p style={{ paddingTop: "16px" }}>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: props.dark ? "#00468B" : "#062440" }}
      >
        <Toolbar>
          {(props.dark && (
            <img
              src={logo}
              alt=""
              width="10%"
              style={{ margin: "10px 0px 10px 20px" }}
            />
          )) || (
            <img
              src={logoDark}
              alt=""
              width="10%"
              style={{ margin: "10px 0px 10px 20px" }}
            />
          )}
          {(props.search && (
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => props.setSearchTerm(e.target.value)}
              />
            </Search>
          )) ||
            null}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {(props.login && (
              <Tooltip title="Home">
                <IconButton
                  size="large"
                  onClick={() => {
                    props.setSearch(false);
                    navigate("/projects");
                  }}
                  sx={{ color: "inherit" }}
                >
                  <Badge color="error">
                    <HomeIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
            )) || (
              <Tooltip title="Home">
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  sx={{ color: "inherit" }}
                  onClick={() => navigate("/")}
                >
                  <Badge color="error">
                    <HomeIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
            )}
            {(props.login && (
              <Tooltip title="Add project">
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  sx={{ color: "inherit" }}
                  onClick={() => navigate("/myprojects/add")}
                >
                  <AddCircleOutlineOutlinedIcon />
                </IconButton>
              </Tooltip>
            )) ||
              null}
            {(props.dark && (
              <Tooltip title="Dark mode">
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                  sx={{ color: "inherit" }}
                  onClick={() => props.setDark(false)}
                >
                  <Badge color="error">
                    <DarkModeIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
            )) || (
              <Tooltip title="Light mode">
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                  sx={{ color: "inherit" }}
                  onClick={() => props.setDark(true)}
                >
                  <Badge color="error">
                    <WbSunnyIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
            )}
            {(props.login && (
              <Tooltip title="Requests">
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  sx={{ color: "inherit" }}
                >
                  <Badge color="error" badgeContent={props.request}>
                    <SendIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
            )) ||
              null}
            <Tooltip title="User">
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                sx={{ color: "inherit" }}
              >
                <AccountCircle />
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              sx={{ color: props.dark ? "inherit" : "#00468B" }}
              onClick={handleMobileMenuOpen}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {props.login ? renderMenuLogin : renderMenu}
    </Box>
  );
}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "37ch",
      "&:focus": {
        width: "50ch",
      },
    },
  },
}));
