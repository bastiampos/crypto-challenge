import { IGetCurrenciesAction, ICurrenciesState } from "../../interfaces"
import { ADD_NEW_CRYPTOCURRENCY, GET_USER_CURRENCIES_FROM_ASYNC } from '../actionsTypes';

const initialState: ICurrenciesState = { 
  allCurrencies: [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 7215.68,
      pctg: 1.82,
      src: 'https://i.imgur.com/uiou8xz.png'
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      price: 146.83,
      pctg: 1.46,
      src: 'https://i.imgur.com/Ph5Ebne.png'
    },
    {
      name: 'XRP',
      symbol: 'XRP',
      price: 0.220568,
      pctg: -2.47,
      src: 'https://i.imgur.com/cDrojKx.png'
    },
    {
      name: 'Litecoin',
      symbol: 'LTC',
      price: 45.94,
      pctg: 1.47,
      src: 'https://i.imgur.com/NJmNFlP.png'
    },
  ],
  userCurrenciesList: []
}

const currenciesReducer = ( state: ICurrenciesState = initialState, action: IGetCurrenciesAction): ICurrenciesState => {
  switch (action.type) {
    case GET_USER_CURRENCIES_FROM_ASYNC: 
      return {
        ...state,
        userCurrenciesList: action.payload
      }
    case ADD_NEW_CRYPTOCURRENCY:
      return {
        ...state,
        userCurrenciesList: action.payload
      }
    default:
      return state
  }
}

export default currenciesReducer
