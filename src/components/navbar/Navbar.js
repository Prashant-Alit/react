import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
            </Menu>
          </>
        ) : (
          <Box display="flex" gap={2}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/post">Post</Button>
            <Button color="inherit" component={Link} to="/contact">Contact</Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

