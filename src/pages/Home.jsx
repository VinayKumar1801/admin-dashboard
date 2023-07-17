import React from "react";
import { Box, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Progress from "../components/Progress";
import MyDataGrid from "../components/MyDataGrid";


const Home = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Grid container direction="column" sx={{ flexGrow: 1, backgroundColor: "#f5f5f5" }}>
        <Navbar />
        <Progress/>
    <MyDataGrid/>
            
      </Grid>
    </Box>
  );
};

export default Home;
