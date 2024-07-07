import React from "react";

import SmallCard from "components/smallCard/SmallCard";

import { CardHeader, Stack } from "@mui/material";
import { BarChart, axisClasses } from "@mui/x-charts";

type NumberOfSharesBarGraphProps = {
  dataset: any[];
};

export default function NumberOfSharesBarGraph(
  props: NumberOfSharesBarGraphProps
) {
  const { dataset } = props;

  return (
    <SmallCard>
      <>
        <CardHeader title="Number of shares" />
        <Stack
          direction="row"
          sx={{ alignItems: "center", justifyContent: "center" }}
          spacing={3}
        >
          <BarChart
            dataset={dataset}
            xAxis={[
              {
                label: "Share count",
              },
            ]}
            yAxis={[
              {
                label: "Months (2024)",
                scaleType: "band",
                dataKey: "Month",
              },
            ]}
            series={[
              { label: "Number of shares", dataKey: "NumberOfSharesOwned" },
            ]}
            layout="horizontal"
            width={300}
            height={500}
            borderRadius={8}
            margin={{ top: 30, bottom: 50, left: 70, right: 30 }}
            slotProps={{
              legend: {
                padding: -4,
              },
            }}
            sx={{
              [`.${axisClasses.left} .${axisClasses.label}`]: {
                transform: "translate(-20px, 0)",
              },
            }}
          />
        </Stack>
      </>
    </SmallCard>
  );
}
