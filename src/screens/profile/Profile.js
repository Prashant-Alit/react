import React from "react";
import { Typography, Box } from "@mui/material";

import { CustomButton } from "../../components/button/Button";

export const Profile = () => {
  return (
    <Box textAlign="center" p={4}>
      <Typography variant="h5">Profile Page</Typography>
      <Typography variant="body1" mt={2}>
        This is the nested Profile page within the About section.
      </Typography>
      <CustomButton color="primary" size="large">
        Primary CustomButton
      </CustomButton>

      <CustomButton color="secondary" outlined>
        Outlined Secondary
      </CustomButton>

      <CustomButton>Default CustomButton</CustomButton>
    </Box>
  );
};

