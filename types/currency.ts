export interface IAxiosResponseCurrency {
  status: IStatus;
  data?: ICurrency;
}

export interface IStatus {
  elapsed: number;
  timestamp: Date;
  error_code?: number;
  error_message?: string;
}

export interface ICurrency {
  id: string;
  name: string;
  symbol: string;
  market_data: IMarketData;
}

export interface IMarketData {
  price_usd: number;
  percent_change_usd_last_24_hours: number;
}
