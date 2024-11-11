import React from "react";
import { Typography, Box } from "@mui/material";
import { Outlet, Link } from "react-router-dom";

export const About = () => {
  return (
    <Box textAlign="center" p={4}>
      <Typography variant="h4">About Us</Typography>
      <Typography variant="body1" mt={2}>
        Welcome to the About page.
      </Typography>
      <Box mt={2}>
        <Link to="profile">Go to Profile</Link>
      </Box>
      <Outlet />
    </Box>
  );
};

