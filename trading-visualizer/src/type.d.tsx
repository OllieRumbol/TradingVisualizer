export interface MonthlyTradingInfomration {
  Month: string;
  Year: number;
  AmountInvested: number;
  ValueOfShares: number;
  DividendsEarned: number;
  NumberOfSharesOwned: number;
};

export interface MothlyTradingInfomrationForStatsCard extends MonthlyTradingInfomration{
  AmountInvestedPercentageChange: number
  ValueOfSharesPercentageChange: number
  NumberOfSharesOwnedPercentageChange: number
  DividendsEarnedPercentageChange: number
}

export interface GraphTradingInformation extends MonthlyTradingInfomration{
  TotalAmountInvested: number
}