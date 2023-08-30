import React from "react";
import { Box, Typography } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

export const DrawerTitle = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <ChatIcon fontSize="large" />
      <Typography variant="h5" ml={2} my={2}>
        Chat App!
      </Typography>
    </Box>
  );
};
