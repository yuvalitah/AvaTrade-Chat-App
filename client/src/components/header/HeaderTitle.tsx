import React from "react";
import { Box, Typography } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

export const HeaderTitle = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{ display: { xs: "none", sm: "flex" } }}
    >
      <ChatIcon fontSize="large" />
      <Typography variant="h4" marginLeft={1} noWrap>
        Chat App!
      </Typography>
    </Box>
  );
};
