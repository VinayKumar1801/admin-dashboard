import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import { AiOutlinePlus } from "react-icons/ai";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3", // Set the primary color to your desired blue
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none", // Remove the box shadow from the AppBar
          borderBottom: "1px solid #ccc", // Add a bottom border
        },
      },
    },
  },
});

const NavbarAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.common.white, // Set the background color to white
}));

const NavbarButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
}));

const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavbarAppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "text.primary" }}
          >
            Orders
          </Typography>
          <Box>
            <NavbarButton
              variant="contained"
              startIcon={<AiOutlinePlus />}
              disableElevation
            >
              Add Orders
            </NavbarButton>
          </Box>
        </Toolbar>
      </NavbarAppBar>
    </ThemeProvider>
  );
};

export default Navbar;
