import {
  EnhancedFireBaseTradingInformation,
  FireBaseTradingInformation,
  GraphTradingInformation,
  MothlyTradingInfomrationForStatsCard,
} from "type.d";

function GetTradingInformationForDashboardStatsCard(): MothlyTradingInfomrationForStatsCard {
  let firebaseTradingInformation = GetEnhancedFirebaseTradingInformation();

  let amountInvestedPercentageChange = 0;
  let valueOfSharesPercentageChange = 0;
  let numberOfSharesOwnedPercentageChange = 0;
  let interestPercentageChange = 0;

  let currentMonth =
    firebaseTradingInformation[firebaseTradingInformation.length - 1];

  let interest =
    Math.round(
      (currentMonth.ValueOfShares / currentMonth.TotalAmountInvested) * 100
    ) / 100;


  if (firebaseTradingInformation.length > 1) {
    let preivousMonth =
      firebaseTradingInformation[firebaseTradingInformation.length - 2];

    amountInvestedPercentageChange =
      Math.round(
        ((currentMonth.AmountInvested - preivousMonth.AmountInvested) /
          preivousMonth.AmountInvested) *
          100 *
          10
      ) / 10;

    valueOfSharesPercentageChange =
      Math.round(
        ((currentMonth.ValueOfShares - preivousMonth.ValueOfShares) /
          preivousMonth.ValueOfShares) *
          100 *
          10
      ) / 10;

    numberOfSharesOwnedPercentageChange =
      Math.round(
        ((currentMonth.NumberOfSharesOwned -
          preivousMonth.NumberOfSharesOwned) /
          preivousMonth.NumberOfSharesOwned) *
          100 *
          10
      ) / 10;

      let preivousInterest = Math.round(
        (preivousMonth.ValueOfShares / preivousMonth.TotalAmountInvested) * 100
      ) / 100;

      interestPercentageChange = 
      Math.round(
        ((interest -
          preivousInterest) /
          preivousInterest) *
          100 *
          10
      ) / 10;
  }

  const monthlyTradingInformation: MothlyTradingInfomrationForStatsCard = {
    Month: currentMonth.Month,
    Year: currentMonth.Year,
    AmountInvested: currentMonth.AmountInvested,
    AmountInvestedPercentageChange: amountInvestedPercentageChange,
    ValueOfShares: currentMonth.ValueOfShares,
    ValueOfSharesPercentageChange: valueOfSharesPercentageChange,
    NumberOfSharesOwned: currentMonth.NumberOfSharesOwned,
    NumberOfSharesOwnedPercentageChange: numberOfSharesOwnedPercentageChange,
    Interest: interest,
    InterestPercentageChange: interestPercentageChange
  };

  return monthlyTradingInformation;
}

function GetGraphInfomration(): GraphTradingInformation[] {
  let enhancedFirebaseTradingInformation =
    GetEnhancedFirebaseTradingInformation();
  let graphInformation: GraphTradingInformation[] = [];

  enhancedFirebaseTradingInformation.forEach((firebaseTradingInformation) => {
    graphInformation.push({
      ...firebaseTradingInformation,
      TotalProfits:
        firebaseTradingInformation.ValueOfShares -
        firebaseTradingInformation.TotalAmountInvested,
      Date: new Date(
        `${firebaseTradingInformation.Month} 1, ${firebaseTradingInformation.Year}`
      ),
    });
  });

  return graphInformation;
}

function GetEnhancedFirebaseTradingInformation(): EnhancedFireBaseTradingInformation[] {
  let firebaseTradingInformationList = GetFirebaseTradingInformation();
  let totalInvested = 0;
  let enhancedFirebaseTradingInformation: EnhancedFireBaseTradingInformation[] =
    [];

  firebaseTradingInformationList.forEach((firebaseTradingInformation) => {
    totalInvested = totalInvested + firebaseTradingInformation.AmountInvested;

    enhancedFirebaseTradingInformation.push({
      ...firebaseTradingInformation,
      TotalAmountInvested: totalInvested,
    });
  });

  return enhancedFirebaseTradingInformation;
}

function GetFirebaseTradingInformation(): FireBaseTradingInformation[] {
  return [
    {
      Month: "April",
      Year: 2024,
      AmountInvested: 260,
      ValueOfShares: 255,
      NumberOfSharesOwned: 3.2,
    },
    {
      Month: "May",
      Year: 2024,
      AmountInvested: 160,
      ValueOfShares: 417,
      NumberOfSharesOwned: 5.3,
    },
    {
      Month: "June",
      Year: 2024,
      AmountInvested: 240,
      ValueOfShares: 667,
      NumberOfSharesOwned: 8.4,
    },
  ];
}

export { GetTradingInformationForDashboardStatsCard, GetGraphInfomration };
