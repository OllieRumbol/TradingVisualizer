export interface FireBaseTradingInformation {
  Month: string;
  Year: number;
  AmountInvested: number;
  ValueOfShares: number;
  NumberOfSharesOwned: number;
}

export interface EnhancedFireBaseTradingInformation
  extends FireBaseTradingInformation {
  TotalAmountInvested: number;
}

export interface MothlyTradingInfomrationForStatsCard
  extends FireBaseTradingInformation {
  AmountInvestedPercentageChange: number;
  ValueOfSharesPercentageChange: number;
  NumberOfSharesOwnedPercentageChange: number;
  Interest: number;
  InterestPercentageChange: number;
}

export interface GraphTradingInformation extends FireBaseTradingInformation {
  TotalProfits: number;
  Date: object;
}
