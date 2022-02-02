import { Currency } from "../../interfaces"

const authentication = (state = { 

    appCurrenciesList: [
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
      {
        name: 'Litecoin',
        symbol: 'LTC',
        price: 45.94,
        pctg: 1.47
      }
    ],
    userCurrenciesList: []

  }, action: any) => {

    switch (action.type) {
        case 'GET_CURRENCIES':
          return {
            appCurrenciesList: action.payload
          }
        case 'ADD_USER_CURRENCY':
          return {
            userCurrenciesList: action.payload
          }
        default:
            return state
    }
}

export default authentication
