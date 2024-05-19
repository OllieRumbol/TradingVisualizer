import { MothlyTradingInfomrationForStatsCard } from "type.d";

function GetTradingInformationForDashboardStatsCard() {
  let firebaseTradingInformation = GetFirebaseTradingInformation();

  let AmountInvestedPercentageChange = 0;
  let ValueOfSharesPercentageChange = 0;
  let NumberOfSharesOwnedPercentageChange = 0;
  let DividendsEarnedPercentageChange = 0;

  let currentMonth =
    firebaseTradingInformation[firebaseTradingInformation.length - 1];

  if (firebaseTradingInformation.length > 1) {
    let preivousMonth =
      firebaseTradingInformation[firebaseTradingInformation.length - 2];

    AmountInvestedPercentageChange =
      Math.round(
        ((currentMonth.AmountInvested - preivousMonth.AmountInvested) /
          preivousMonth.AmountInvested) *
          100 *
          10
      ) / 10;

    ValueOfSharesPercentageChange =
      Math.round(
        ((currentMonth.ValueOfShares - preivousMonth.ValueOfShares) /
          preivousMonth.ValueOfShares) *
          100 *
          10
      ) / 10;

    NumberOfSharesOwnedPercentageChange =
      Math.round(
        ((currentMonth.NumberOfSharesOwned -
          preivousMonth.NumberOfSharesOwned) /
          preivousMonth.NumberOfSharesOwned) *
          100 *
          10
      ) / 10;

    if (
      currentMonth.DividendsEarned !== 0 &&
      preivousMonth.DividendsEarned !== 0
    ) {
      DividendsEarnedPercentageChange =
        Math.round(
          ((currentMonth.DividendsEarned - preivousMonth.DividendsEarned) /
            preivousMonth.DividendsEarned) *
            100 *
            10
        ) / 10;
    }
  }

  const monthlyTradingInformation: MothlyTradingInfomrationForStatsCard = {
    Month: "April",
    Year: 2024,
    AmountInvested: currentMonth.AmountInvested,
    AmountInvestedPercentageChange: AmountInvestedPercentageChange,
    ValueOfShares: currentMonth.ValueOfShares,
    ValueOfSharesPercentageChange: ValueOfSharesPercentageChange,
    NumberOfSharesOwned: currentMonth.NumberOfSharesOwned,
    NumberOfSharesOwnedPercentageChange: NumberOfSharesOwnedPercentageChange,
    DividendsEarned: currentMonth.DividendsEarned,
    DividendsEarnedPercentageChange: DividendsEarnedPercentageChange,
  };

  return monthlyTradingInformation;
}

function GetFirebaseTradingInformation() {
  return [
    {
      Month: "April",
      Year: 2024,
      AmountInvested: 260,
      ValueOfShares: 255,
      NumberOfSharesOwned: 3.2,
      DividendsEarned: 0,
    },
    {
      Month: "May",
      Year: 2024,
      AmountInvested: 160,
      ValueOfShares: 424,
      NumberOfSharesOwned: 5.3,
      DividendsEarned: 0,
    },
  ];
}

export { GetTradingInformationForDashboardStatsCard };
