export interface MothlyTradingInfomration {
  Month: string;
  Year: number;
  AmountInvested: number;
  ValueOfShares: number;
  DividendsEarned: number;
  NumberOfSharesOwned: number;
};

export interface MothlyTradingInfomrationForStatsCard extends MothlyTradingInfomration{
  AmountInvestedPercentageChange: number
  ValueOfSharesPercentageChange: number
  NumberOfSharesOwnedPercentageChange: number
  DividendsEarnedPercentageChange: number
}
