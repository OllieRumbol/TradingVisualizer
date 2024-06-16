import React from "react";

import Mediumcard from "components/mediumCard/MediumCard";

import { Stack, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts";

export default function SharesPieChart() {
  const data = [
    { id: 0, value: 8.8, label: "Vanguard S&P 500 (ACC)" },
    { id: 1, value: 2.0, label: "Vanguard" },
  ];
  return (
    <Mediumcard>
      <Stack spacing={3}>
        <Stack
          direction="row"
          sx={{ alignItems: "center", justifyContent: "center" }}
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography variant="h4" component="h4" align="center">
              Shares Breakdown
            </Typography>

            <PieChart
              dataset={data}
              series={[
                {
                  data,
                  outerRadius: 150,
                  cx: 170
                },
              ]}
              width={650}
              height={400}
              slotProps={{
                legend: {
                  padding: 20,
                },
              }}
            />
          </Stack>
        </Stack>
      </Stack>
    </Mediumcard>
  );
}
