export interface Currency {
  id:      string;
  name:    string;
  symbol:  string;
  metrics: Metrics;
}

export interface Metrics {
  market_data: MarketData;
}

export interface MarketData {
  price_usd:                        number;
  percent_change_usd_last_24_hours: number;
}
