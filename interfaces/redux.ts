import { Currency } from './currency';

export interface ThunkAction {
  type: string,
  payload?: any
}

export interface CurrenciesState {
  userCurrenciesList: Currency[]
}