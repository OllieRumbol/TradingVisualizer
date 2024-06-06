import React from "react";

import Mediumcard from "components/mediumCard/MediumCard";

import { Stack, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts";

export default function SharesPieChart() {
  return (
    <Mediumcard>
      <Stack spacing={3}>
        <Stack
          direction="row"
          sx={{ alignItems: "flex-start", justifyContent: "space-between" }}
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography variant="h4" component="h4" align="center">
              Shares Breakdown
            </Typography>

            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 100, label: "Vanguard S&P 500 (Dist)" },
                  ],
                  innerRadius: 90,
                  outerRadius: 180,
                  paddingAngle: 30,
                  cornerRadius: 50,
                  cx: 180
                },
              ]}
              width={600}
              height={400}
              slotProps={{
                legend: {
                  padding: -10,
                },
              }}
            />
          </Stack>
        </Stack>
      </Stack>
    </Mediumcard>
  );
}
