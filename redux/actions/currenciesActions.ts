import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch } from 'redux';
import { ICurrency, IGetCurrenciesAction } from '../../interfaces';
import { ADD_NEW_CRYPTOCURRENCY, GET_USER_CURRENCIES_FROM_ASYNC } from '../actionsTypes';

export const getUserCurrenciesFromAsync = () => {
  return async (dispatch: Dispatch<IGetCurrenciesAction>) => {
    try {
      const userCurrenciesList = await AsyncStorage.getItem('@userCurrenciesList')
      if (userCurrenciesList) {
        dispatch({
          type: GET_USER_CURRENCIES_FROM_ASYNC, 
          payload: JSON.parse(userCurrenciesList)
        })
      }
    } catch(e) {
      console.log(e)
    }
  }
}

export const addCurrencyBySymbol = (valueSearched: string) => {
  return async (dispatch: Dispatch, getState: any) => {
    const {allCurrencies, userCurrenciesList} = getState().currencies

    const newCrypto: ICurrency = allCurrencies.find( (currency: ICurrency) => {
      return ( currency.symbol.toLowerCase() || currency.name.toLowerCase()) === valueSearched.toLowerCase()
    })

    const isAdded: boolean | ICurrency = userCurrenciesList.find((currency: ICurrency) => {
      return ( currency.symbol.toLowerCase() || currency.name.toLowerCase()) === valueSearched.toLowerCase()
    })

    if (newCrypto && !isAdded) {
      const updatedUserCurrencies: ICurrency[] = [...userCurrenciesList, newCrypto]

      dispatch({type: ADD_NEW_CRYPTOCURRENCY, payload: updatedUserCurrencies})

      try {
        const updatedList = JSON.stringify(updatedUserCurrencies)
        await AsyncStorage.setItem('@userCurrenciesList', updatedList)
      } catch (e) {
        console.log(e)
      }
    } else {
      console.log('No hay coincidencias')
    }
  }
}
