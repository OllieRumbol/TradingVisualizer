import React, { useEffect, useState } from "react";

import StatsCard from "components/statsCard/StatsCard";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import {
  GetGraphInfomration,
  GetTradingInformationForDashboardStatsCard,
} from "services/TradingService";
import {
  GraphTradingInformation,
  MothlyTradingInfomrationForStatsCard,
} from "type.d";

import SpentVsEarnedBarGraph from "pages/dashboard/spentVsEarnedBarGraph/SpentVsEarnedBarGraph";
import NumberOfSharesBarGraph from "pages/dashboard/numberOfSharesBarGraph/NumberOfSharesBarGraph";
import ProfitsLineGraph from "pages/dashboard/profitsLineGraph/ProfitsLineGraph";
import SharesPieChart from "pages/dashboard/sharesPieChart/SharesPieChart";

import "./Dashboard.css";

export default function Dashboard() {
  const [statsCardTradingInformation, setStatsCardTradingInformation] =
    useState<MothlyTradingInfomrationForStatsCard>();

  const [graphTradngInformation, setGraphTradngInformation] = useState<
    GraphTradingInformation[]
  >([]);

  useEffect(() => {
    let tradingInformationForStatsCard =
      GetTradingInformationForDashboardStatsCard();
    setStatsCardTradingInformation(tradingInformationForStatsCard);

    let graphInformation = GetGraphInfomration();
    setGraphTradngInformation(graphInformation);
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
          title="Interest"
          value={`${statsCardTradingInformation?.Interest}%`}
          iconType="interest"
          changeFromLastMonth={
            statsCardTradingInformation?.InterestPercentageChange ?? 0
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
        <SpentVsEarnedBarGraph dataset={graphTradngInformation} />
        <NumberOfSharesBarGraph dataset={graphTradngInformation} />
        <ProfitsLineGraph dataset={graphTradngInformation} />
        <SharesPieChart />
      </Grid>
    </Box>
  );
}
