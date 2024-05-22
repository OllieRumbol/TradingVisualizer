import React, { useEffect, useState } from "react";

import LargeCard from "components/largeCard/LargeCard";
import { BarChart } from "@mui/x-charts";
import { Stack, Typography } from "@mui/material";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

export default function SpentVsEarnedBarGraph() {
  return (
    <LargeCard>
      <Stack spacing={3}>
        <Stack
          direction="row"
          sx={{ alignItems: "flex-start", justifyContent: "space-between" }}
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography variant="h4" component="h4" align="center">
              Money Invested Vs Value of Shares
            </Typography>

            <BarChart
              xAxis={[
                {
                  label: "Months (2024)",
                  scaleType: "band",
                  data: ["April", "May", "June"],
                },
              ]}
              yAxis={[
                {
                  label: "British Pounds (£)",
                },
              ]}
              series={[
                { label: "Amount Invested", data: [260, 420, 580] },
                { label: "Value of Shares", data: [255, 427, 592] },
              ]}
              width={1000}
              height={500}
              margin={{ top: 30, bottom: 50, left: 70, right: 30 }}
              sx={{
                [`.${axisClasses.left} .${axisClasses.label}`]: {
                  transform: "translate(-20px, 0)",
                },
              }}
              borderRadius={8}
            />
          </Stack>
        </Stack>
      </Stack>
    </LargeCard>
  );
}
