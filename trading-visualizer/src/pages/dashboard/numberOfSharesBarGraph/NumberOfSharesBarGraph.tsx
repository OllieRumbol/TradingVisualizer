import React, { useEffect, useState } from "react";

import SmallCard from "components/smallCard/SmallCard";
import { Stack, Typography } from "@mui/material";
import { BarChart, axisClasses } from "@mui/x-charts";

export default function NumberOfSharesBarGraph() {
  return (
    <SmallCard>
      <Stack spacing={3}>
        <Stack
          direction="row"
          sx={{ alignItems: "flex-start", justifyContent: "space-between" }}
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography variant="h4" component="h4" align="center">
              Number of Shares
            </Typography>

            <BarChart
              layout="horizontal"
              xAxis={[
                {
                  label: "share count",
                },
              ]}
              yAxis={[
                {
                  label: "Months (2024)",
                  scaleType: "band",
                  data: ["April", "May", "June"],
                },
              ]}
              series={[{ label: "Number of shares", data: [3.2, 5.3, 7.5] }]}
              width={300}
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
    </SmallCard>
  );
}
