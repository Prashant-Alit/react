import React, { useState } from "react";
import { TextField, Button, Box, useMediaQuery, useTheme } from "@mui/material";

export const Form = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      gap={2}
      width={isMobile ? "90%" : "400px"}
      margin="auto"
      mt={4}
      p={2}
      borderRadius={2}
      boxShadow={2}
    >
      <TextField
        label="Name"
        variant="outlined"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Email"
        variant="outlined"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
      />
      <Button variant="contained" color="primary" type="submit" fullWidth>
        Submit
      </Button>
    </Box>
  );
};

