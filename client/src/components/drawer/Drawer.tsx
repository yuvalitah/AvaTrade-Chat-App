import React from "react";
import { Drawer as MuiDrawer, Box, Divider, Button } from "@mui/material";
import { DrawerTitle } from "./DrawerTitle";
import { ThemeToggle } from "../themeToggle";
import { useLocation, useNavigate } from "react-router-dom";

interface IDrawerProps {
  isOpen: boolean;
  handleDrawerToggle: () => void;
}

export const Drawer = ({ isOpen, handleDrawerToggle }: IDrawerProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const connectedUsername = query.get("username") || "";

  return (
    <MuiDrawer
      variant="temporary"
      open={isOpen}
      onClose={handleDrawerToggle}
      sx={{
        display: { xs: "block", sm: "none" },
      }}
    >
      <Box onClick={handleDrawerToggle} textAlign="center" flex={1}>
        <DrawerTitle />
        <Divider />
      </Box>
      <Box display="flex" flexDirection="column" gap={2} alignItems="center">
        {connectedUsername && (
          <Button
            onClick={() => navigate("/")}
            size="large"
            color="error"
            variant="contained"
          >
            Sign out
          </Button>
        )}
        <ThemeToggle />
      </Box>
    </MuiDrawer>
  );
};
