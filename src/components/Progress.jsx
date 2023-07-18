import React from 'react'
import PieCharts from './Piecharts';
import ProgressLines from './ProgressLines';

const Progress = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        marginTop: "20px",
        padding: "15px",
        // backgroundColor:"white"
      }}
    >
      <div
        style={{
          flex: "2",
          borderRadius: "20px",
          padding: "25px",
          backgroundColor: "white",
        }}
      >
        <h2 style={{ marginBottom: "30px" }}>All Customers</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            textAlign: "center",
          }}
        >
          <PieCharts />
        </div>
      </div>
      <div
        style={{
          flex: "1",

          borderRadius: "20px",
          padding: "25px",
          backgroundColor: "white",
        }}
      >
        <div>
          <div>
            <h2 style={{ marginBottom: "30px" }}>Stats Overview</h2>
          </div>
          <div>
            <ProgressLines />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress
