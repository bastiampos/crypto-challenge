import { ICurrency } from './currency';

export interface IGetCurrenciesAction {
  type: string;
  payload: ICurrency[];
}
export type ICurrenciesState = {
  userCurrencyList: ICurrency[];
}

export enum AsyncKeys {
  userCurrencyList = '@userCurrencyList'
}
