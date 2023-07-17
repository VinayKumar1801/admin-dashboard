import React from "react";
import { Box, LinearProgress, Typography } from "@mui/material";

const ProgressLines = () => {
  return (
    <Box display="flex" flexDirection="column" gap="30px">
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="body3" color="text.secondary">
          Active
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <LinearProgress
            color="primary"
            style={{ height: "10px", margin: "5px 0px" }}
            variant="determinate"
            value={63}
            sx={{
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#16C098",
                borderRadius: 10, // Adjust the border radius
                height: 10, // Adjust the height
              },
              "& .MuiLinearProgress-root": {
                borderRadius: 10, // Adjust the border radius
              },
            }}
          />
        </Box>
        <Typography align="right" variant="body3" color="text.secondary" ml={2}>
          {`63%`}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="body3" color="text.secondary">
          Inactive
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <LinearProgress
            color="secondary"
            variant="determinate"
            style={{ height: "10px", margin: "5px 0px" }}
            value={88}
            sx={{
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#FF6B6B",
                borderRadius: 10, // Adjust the border radius
                height: 10, // Adjust the height
              },
              "& .MuiLinearProgress-root": {
                borderRadius: 10, // Adjust the border radius
              },
            }}
          />
        </Box>
        <Typography align="right" variant="body3" color="text.secondary" ml={2}>
          {`88%`}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProgressLines;
