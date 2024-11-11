import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  // const [user,setUser] = useState(false)

  const navigate = useNavigate();

  // useEffect(() => {
  //   const formdata = JSON.parse(localStorage.getItem('items'));
  //   console.log(formdata)
  //   if(formdata){
  //     setUser(formdata)
  //   }
  // },[])

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("items")
    setTimeout(() => {},1000)
     navigate("/")
  }

  return (
    <AppBar position="static">
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton edge="start" color="inherit" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem component={Link} to="/" onClick={handleMenuClose}>
                Home
              </MenuItem>
              <MenuItem component={Link} to="/about" onClick={handleMenuClose}>
                About
              </MenuItem>
              <MenuItem component={Link} to="/post" onClick={handleMenuClose}>
                Post
              </MenuItem>
              <MenuItem component={Link} to="/contact" onClick={handleMenuClose}>
                Contact
              </MenuItem>
             {/* {user ? <MenuItem component={Link} to="/contact" onClick={handleMenuClose}>
                Logout
              </MenuItem> :""} */}
            </Menu>
          </>
        ) : (
          <Box display="flex" gap={2}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/post">Post</Button>
            <Button color="inherit" component={Link} to="/contact">Contact</Button>
            {/* {user ? <Button color="inherit" onClick={handleLogout}>Logout</Button> : ""} */}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

