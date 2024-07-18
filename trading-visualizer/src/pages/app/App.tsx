import React from "react";

import Dashboard from "pages/dashboard/Dashboard";
import { AppBar, Toolbar, Typography } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";

export default function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Trading Visualizer {<ShowChartIcon />}
          </Typography>
        </Toolbar>
      </AppBar>
      <Dashboard />
    </>
  );
}
