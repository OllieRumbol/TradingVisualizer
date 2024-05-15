import React from "react";

import StatsCard from "components/statsCard/StatsCard";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import "./Dashboard.css";

export default function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4} className="padding-30">
        <StatsCard
          title="Money Invested"
          value={260}
          iconType="currency"
          changeFromLastMonth={10}
        />
        <StatsCard
          title="Value of shares"
          value={255}
          iconType="value"
          changeFromLastMonth={-10}
        />
        <StatsCard
          title="Dividends"
          value={0}
          iconType="dividends"
          changeFromLastMonth={10}
        />
        <StatsCard
          title="Number of Shares"
          value={3}
          iconType="shares"
          changeFromLastMonth={-10}
        />
      </Grid>
    </Box>
  );
}
