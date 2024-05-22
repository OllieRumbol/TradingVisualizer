import React, { useEffect, useState } from "react";

import LargeCard from "components/largeCard/LargeCard";
import StatsCard from "components/statsCard/StatsCard";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { GetTradingInformationForDashboardStatsCard } from "services/TradingService";
import { MothlyTradingInfomrationForStatsCard } from "type.d";

import "./Dashboard.css";
import SpentVsEarnedBarGraph from "./spentVsEarnedBarGraph/SpentVsEarnedBarGraph";
import NumberOfSharesBarGraph from "./numberOfSharesBarGraph/NumberOfSharesBarGraph";


export default function Dashboard() {
  const [statsCardTradingInformation, setStatsCardTradingInformation] =
    useState<MothlyTradingInfomrationForStatsCard>();

  useEffect(() => {
    let tradingInformation = GetTradingInformationForDashboardStatsCard();
    setStatsCardTradingInformation(tradingInformation);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4} className="padding-30">
        <StatsCard
          title="Money Invested"
          value={`£${statsCardTradingInformation?.AmountInvested}`}
          iconType="currency"
          changeFromLastMonth={
            statsCardTradingInformation?.AmountInvestedPercentageChange ?? 0
          }
        />
        <StatsCard
          title="Value of shares"
          value={`£${statsCardTradingInformation?.ValueOfShares}`}
          iconType="value"
          changeFromLastMonth={
            statsCardTradingInformation?.ValueOfSharesPercentageChange ?? 0
          }
        />
        <StatsCard
          title="Dividends"
          value={`£${statsCardTradingInformation?.DividendsEarned}`}
          iconType="dividends"
          changeFromLastMonth={
            statsCardTradingInformation?.DividendsEarnedPercentageChange ?? 0
          }
        />
        <StatsCard
          title="Number of Shares"
          value={`${statsCardTradingInformation?.NumberOfSharesOwned}`}
          iconType="shares"
          changeFromLastMonth={
            statsCardTradingInformation?.NumberOfSharesOwnedPercentageChange ??
            0
          }
        />
        <SpentVsEarnedBarGraph />
        <NumberOfSharesBarGraph />
      </Grid>
    </Box>
  );
}
