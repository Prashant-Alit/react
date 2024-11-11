import React from "react";
import { Typography, Box } from "@mui/material";

import { Button } from "../../components/button/Button";

export const Profile = () => {
  return (
    <Box textAlign="center" p={4}>
      <Typography variant="h5">Profile Page</Typography>
      <Typography variant="body1" mt={2}>
        This is the nested Profile page within the About section.
      </Typography>
      <Button color="primary" size="large">
        Primary Button
      </Button>

      <Button color="secondary" outlined>
        Outlined Secondary
      </Button>

      <Button>Default Button</Button>
    </Box>
  );
};

