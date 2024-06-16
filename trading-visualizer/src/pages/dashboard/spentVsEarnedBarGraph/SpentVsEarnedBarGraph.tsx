import React from "react";

import LargeCard from "components/largeCard/LargeCard";
import { BarChart } from "@mui/x-charts";
import { Stack, Typography } from "@mui/material";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

type SpentVsEarnedBarGraphProps = {
  dataset: any[];
};

export default function SpentVsEarnedBarGraph(
  props: SpentVsEarnedBarGraphProps
) {
  const { dataset } = props;

  return (
    <LargeCard>
      <Stack spacing={3}>
        <Stack
          direction="row"
          sx={{ alignItems: "center", justifyContent: "center" }}
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography variant="h4" component="h4" align="center">
              Money Invested Vs Value of Shares
            </Typography>

            <BarChart
              dataset={dataset}
              xAxis={[
                {
                  label: "Months (2024)",
                  scaleType: "band",
                  dataKey: "Month",
                },
              ]}
              yAxis={[
                {
                  label: "British Pounds (£)",
                },
              ]}
              series={[
                { label: "Amount Invested", dataKey: "TotalAmountInvested" },
                { label: "Value of Shares", dataKey: "ValueOfShares" },
              ]}
              width={1000}
              height={500}
              borderRadius={8}
              margin={{ top: 30, bottom: 50, left: 70, right: 30 }}
              sx={{
                [`.${axisClasses.left} .${axisClasses.label}`]: {
                  transform: "translate(-20px, 0)",
                },
              }}
            />
          </Stack>
        </Stack>
      </Stack>
    </LargeCard>
  );
}
