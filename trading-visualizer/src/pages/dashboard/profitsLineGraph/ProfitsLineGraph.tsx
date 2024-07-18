import React from "react";

import Mediumcard from "components/mediumCard/MediumCard";

import { CardHeader, Stack } from "@mui/material";
import { LineChart, axisClasses } from "@mui/x-charts";

type ProfitsLineGraphProps = {
  dataset: any[];
};

export default function ProfitsLineGraph(props: ProfitsLineGraphProps) {
  const { dataset } = props;

  return (
    <Mediumcard>
      <>
        <CardHeader title="Profits" />

        <Stack
          direction="row"
          sx={{ alignItems: "center", justifyContent: "center" }}
          spacing={3}
        >
          <LineChart
            dataset={dataset}
            xAxis={[
              {
                id: "Months",
                label: "Months",
                scaleType: "time",
                dataKey: "Date",
                valueFormatter: (date) =>
                  new Intl.DateTimeFormat("en-US", { month: "short" })
                    .format(date)
                    .toString(),
              },
            ]}
            yAxis={[
              {
                label: "British pounds (£)",
              },
            ]}
            series={[
              {
                id: "totalProfits",
                label: "Total profits (£)",
                dataKey: "TotalProfits",
                showMark: true,
              },
            ]}
            width={650}
            height={400}
            sx={{
              [`.${axisClasses.left} .${axisClasses.label}`]: {
                transform: "translate(-10px, 0)",
              },
            }}
          />
        </Stack>
      </>
    </Mediumcard>
  );
}
