import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  AiOutlineFileText,
  AiOutlineTool,
  AiOutlineSetting,
} from "react-icons/ai";
import logo from "../assets/logo.png";

const drawerWidth = 240;

const SidebarDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
  },
}));

const LogoContainer = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
}));

const Sidebar = () => {
  return (
    <SidebarDrawer variant="permanent">
      <div className="MuiToolbar-root" />
      <LogoContainer>
        <img src={logo} alt="Logo" />
      </LogoContainer>
      <List>
        <ListItem>
          <ListItemIcon sx={{ fontSize: 24 }}>
            <AiOutlineFileText />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
        <ListItem >
          <ListItemIcon sx={{ fontSize: 24 }}>
            <AiOutlineTool />
          </ListItemIcon>
          <ListItemText primary="Workspace" />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ fontSize: 24 }}>
            <AiOutlineSetting />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </SidebarDrawer>
  );
};

export default Sidebar;
