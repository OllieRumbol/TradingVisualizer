import React, { useState, useEffect } from "react";

import Mediumcard from "components/mediumCard/MediumCard";

import { CardHeader, Stack } from "@mui/material";
import { PieChart } from "@mui/x-charts";
import { GetShares } from "services/TradingService";
import { Shares } from "type.d";

export default function SharesPieChart() {
  const [shares, setShares] = useState<Shares[]>([]);

  useEffect(() => {
    setShares(GetShares());
  }, []);

  return (
    <Mediumcard>
      <>
        <CardHeader title="Shares breakdown" />

        <Stack
          direction="row"
          sx={{ alignItems: "center", justifyContent: "center" }}
          spacing={3}
        >
          <PieChart
            series={[
              {
                data: shares,
                innerRadius: 100,
                outerRadius: 150,
                paddingAngle: 5,
                cornerRadius: 5,
                cx: 300,
                cy: 220,
              },
            ]}
            width={650}
            height={400}
            slotProps={{
              legend: {
                padding: 10,
                direction: "row",
                position: { vertical: "top", horizontal: "left" },
              },
            }}
          />
        </Stack>
      </>
    </Mediumcard>
  );
}
