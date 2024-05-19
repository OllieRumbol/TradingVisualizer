import React from "react";

import Banner from "components/banner/Banner";
import Dashboard from "pages/dashboard/Dashboard";

import "./App.css";
import { Typography } from "@mui/material";

function App() {
  return (
    <div>
      <Banner>
        <Typography style={{ padding: "9px" }} color="white" variant="h4" component="h3">
          Trading Visualizer
        </Typography>
      </Banner>
      <Dashboard />
    </div>
  );
}

export default App;
