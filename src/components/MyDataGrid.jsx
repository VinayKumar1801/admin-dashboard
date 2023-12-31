import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import rows from "../assets/dummyData.json";
import { Button } from "@mui/material";

const columns = [
//   { field: "id", headerName: "ID", width: 50 },
  { field: "customerName", headerName: "Customer Name", width: 150 },
  { field: "company", headerName: "Company", width: 200 },
  { field: "phoneNumber", headerName: "Phone Number", width: 150 },
  { field: "email", headerName: "Email", width: 250 },
  { field: "country", headerName: "Country", width: 100 },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    renderCell: (params) => {
      const status = params.value;
      const backgroundColor = status === true ? "#16C098" : "#FF6B6B";
      const statusText = status ? "Active" : "Inactive";
      return (
        <Button
          variant="contained"
          style={{
            backgroundColor,
            color: "#FFFFFF",
            // fontWeight: "bold",
            textTransform: "none",
            borderRadius: "10px",
            // border:"2px solid red"
          }}
        >
          {statusText}
        </Button>
      );
    },
  },
];

const MyDataGrid = () => {
  return (
    <div
      style={{
        height: 410,
        // width: "100%",
        margin: "20px",
        backgroundColor: "white",
        padding: "20px",

        borderRadius: "20px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems:"center" }}>
        <div>
          <p style={{ color: "#16C098" }}>Active Members</p>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <div>
            <input
              type="text"
              placeholder="Search"
              style={{
                borderRadius: "5px",
                border: "none",
                padding: "5px 10px",
                backgroundColor: "#f5f5f5",
                fontSize:"19px"
              }}
            />
          </div>
          <div
            style={{
              backgroundColor: "#f5f5f5",
              borderRadius: "5px",
              border: "none",
              padding: "5px 10px",
            }}
          >
            <label htmlFor="" style={{ color: "gray", marginRight: "5px" }}>
              {" "}
              Sort by :
            </label>
            <select
              name=""
              id=""
              style={{
                borderRadius: "10px",
                border: "none",
                padding: "2px 5px",
                color: "gray",
              }}
            >
              <option value="">Newest</option>
              <option value="">Oldest</option>
            </select>
          </div>
        </div>
      </div>

      <DataGrid
        rows={rows}
        columns={columns}
        components={{
          Toolbar: GridToolbar,
        }}
        sx={{
          border: "none",
          height:"400px"
        }}
      />
    </div>
  );
};

export default MyDataGrid;
