import React from "react";

import LargeCard from "components/largeCard/LargeCard";
import { BarChart } from "@mui/x-charts";
import { Button, CardHeader, Stack } from "@mui/material";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import LoopIcon from "@mui/icons-material/Loop";

type SpentVsEarnedBarGraphProps = {
  dataset: any[];
};

export default function SpentVsEarnedBarGraph(
  props: SpentVsEarnedBarGraphProps
) {
  const { dataset } = props;

  return (
    <LargeCard>
      <>
        <CardHeader
          action={
            <Button
              color="inherit"
              size="small"
              startIcon={<LoopIcon />}
              onClick={() => console.log("Hello")}
            >
              Sync
            </Button>
          }
          title="Money invested vs value of shares"
        />

        <Stack
          direction="row"
          sx={{ alignItems: "center", justifyContent: "center" }}
          spacing={3}
        >
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
      </>
    </LargeCard>
  );
}
