import { Currency } from "../../interfaces"
import AsyncStorage from '@react-native-async-storage/async-storage';

const authentication = (state = { appCurrenciesList: currencies, userCurrenciesList: userCurrencies }, action: any) => {

  switch (action.type) {
    default:
      return state
  }

}

export default authentication

const currencies = [
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
]

const userCurrencies = [
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

// const storeData = async (value: any, key: string) => {
//   try {
//     const jsonValue = JSON.stringify(value)
//     await AsyncStorage.setItem(key, jsonValue)
//   } catch (e) {
//     console.log(e)
//   }
// }