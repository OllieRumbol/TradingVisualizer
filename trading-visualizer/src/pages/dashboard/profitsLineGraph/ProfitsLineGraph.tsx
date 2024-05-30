import React from "react";

import Mediumcard from "components/mediumCard/MediumCard";

import { Stack, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";

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
          sx={{ alignItems: "flex-start", justifyContent: "space-between" }}
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
                  id: "profitsfromShares",
                  label: "Profits from Shares",
                  dataKey: "ValueOfShares",
                  showMark: true,
                },
                {
                  id: "dividends",
                  label: "Dividends",
                  dataKey: "DividendsEarned",
                  showMark: true,
                },
                {
                  id: "totalProfits",
                  label: "Total Profits (£)",
                  dataKey: "TotalProfits",
                  showMark: true,
                },
              ]}
              width={600}
              height={500}
            />
          </Stack>
        </Stack>
      </Stack>
    </Mediumcard>
  );
}
