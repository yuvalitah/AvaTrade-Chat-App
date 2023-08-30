import React, { useState } from "react";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { HeaderTitle } from "./HeaderTitle";
import { Drawer, DrawerIcon } from "../drawer";
import { ThemeToggle } from "../themeToggle";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const connectedUsername = query.get("username") || "";

  const handleDrawerToggle = () =>
    setIsDrawerOpen((prevIsDrawerOpen) => !prevIsDrawerOpen);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box display="flex" justifyContent="space-between" flexGrow={1}>
            <DrawerIcon handleDrawerToggle={handleDrawerToggle} />
            <HeaderTitle />
            <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
              {connectedUsername && (
                <Button
                  onClick={() => navigate("/")}
                  color="error"
                  size="large"
                  variant="contained"
                >
                  Sign out
                </Button>
              )}
              <ThemeToggle />
            </Box>
            <Drawer
              isOpen={isDrawerOpen}
              handleDrawerToggle={handleDrawerToggle}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};
