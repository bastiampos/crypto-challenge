import { ICurrency } from './currency';

export interface IGetCurrenciesAction {
  type: string;
  payload: ICurrency[];
}
export type ICurrenciesState = {
  allCurrencies: ICurrency[]
  userCurrenciesList: ICurrency[];
}
