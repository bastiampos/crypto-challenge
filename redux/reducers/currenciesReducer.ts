import { IGetCurrenciesAction, ICurrenciesState } from "../../interfaces"
import { GET_USER_CURRENCIES_FROM_ASYNC } from '../actionsTypes';

const initialState: ICurrenciesState = { 
  userCurrenciesList: [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 7215.68,
      pctg: 1.82
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      price: 146.83,
      pctg: 1.46
    },
    {
      name: 'XRP',
      symbol: 'XRP',
      price: 0.220568,
      pctg: -2.47
    },
  ]
}

const currenciesReducer = ( state: ICurrenciesState = initialState, action: IGetCurrenciesAction): ICurrenciesState => {
  switch (action.type) {
    case GET_USER_CURRENCIES_FROM_ASYNC: 
      return {
        ...state,
        userCurrenciesList: action.payload
      }
    default:
      return state
  }
}

export default currenciesReducer
