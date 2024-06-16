import React from "react";

import Mediumcard from "components/mediumCard/MediumCard";

import { Stack, Typography } from "@mui/material";
import { LineChart, axisClasses } from "@mui/x-charts";

type ProfitsLineGraphProps = {
  dataset: any[];
};

export default function ProfitsLineGraph(props: ProfitsLineGraphProps) {
  const { dataset } = props;

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
              Profits
            </Typography>

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
                  label: "British Pounds (£)",
                },
              ]}
              series={[
                {
                  id: "totalProfits",
                  label: "Total Profits (£)",
                  dataKey: "TotalProfits",
                  showMark: true,
                },
              ]}
              width={650}
              height={400}
              sx={{
                [`.${axisClasses.left} .${axisClasses.label}`]: {
                  transform: "translate(-10px, 0)",
                }
              }}
            />
          </Stack>
        </Stack>
      </Stack>
    </Mediumcard>
  );
}
