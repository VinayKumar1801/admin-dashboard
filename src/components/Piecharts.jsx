import React from "react";
import { Box, Typography } from "@mui/material";
import { PieChart } from "react-minimal-pie-chart";

const PieCharts = () => {
  const data = [
    { title: "Current Customers", value: 85, color: "#5F27CD" },
    { title: "New Customers", value: 66, color: "#16C098" },
    { title: "Target Customers", value: 90, color: "#FF6B6B" },
    { title: "Retarget Customers", value: 30, color: "#FFC5C5" },
  ];

  return (
    <Box display="flex" justifyContent="space-between" gap={8}>
      {data.map((item) => (
        <Box key={item.title} textAlign="center">
          <PieChart
            data={[
              { value: 100, color: "#ffffff" },
              { value: item.value, color: item.color },
            ]}
            lineWidth={15}
            rounded
            startAngle={270}
            totalValue={100}
            animate
            animateText
            animationDuration={500}
            style={{ width: "80px", height: "80px" }}
          />
          <Typography
            color={item.color}
            variant="h6"
          >{`${item.value}%`}</Typography>
          <Typography color={"gray"} variant="subtitle2">
            {item.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default PieCharts;
