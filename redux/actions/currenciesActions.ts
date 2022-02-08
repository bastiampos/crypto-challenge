import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch } from 'redux';
import { ICurrency, IGetCurrenciesAction } from '../../types';
import { ADD_NEW_CRYPTOCURRENCY, GET_USER_CURRENCIES_FROM_ASYNC } from '../actionsTypes';
import { IState } from '../reducers/mainReducer';
import { AsyncKeys } from '../../types';

export const getUserCurrenciesFromAsync = () => async (dispatch: Dispatch<IGetCurrenciesAction>) => {
  try {
    const userCurrencyList = await AsyncStorage.getItem(AsyncKeys.userCurrencyList)
    
    if (userCurrencyList) {
      dispatch({
        type: GET_USER_CURRENCIES_FROM_ASYNC, 
        payload: JSON.parse(userCurrencyList)
      })
    }
  } catch(e) {
    console.log(e)
  }
}

// 1. Buscar si el usuario ya lo ha agregado a su lista
// 2. Buscar si existe en la lista de cryptos disponibles
// 3. Agregarlo a la lista si no lo ha agregado y sí existe en la lista

export const addCurrencyBySymbol = (valueSearched: string) => async (dispatch: Dispatch, getState: () => IState) => {
  const {allCurrencies, userCurrencyList} = getState().currencies

  const newCrypto: ICurrency | undefined  = allCurrencies.find( ({symbol, name}) => {
    return symbol.toLowerCase() === valueSearched.toLowerCase() ||  name.toLowerCase() === valueSearched.toLowerCase()
  })

  const isAdded: ICurrency | undefined  = userCurrencyList.find(({symbol}) => {
    return symbol.toLowerCase()  === newCrypto?.symbol
  })

  if (newCrypto && !isAdded) {
    const updatedUserCurrencies: ICurrency[] = [...userCurrencyList, newCrypto]

    dispatch({type: ADD_NEW_CRYPTOCURRENCY, payload: updatedUserCurrencies})

    try {
      const updatedList: string = JSON.stringify(updatedUserCurrencies)
      await AsyncStorage.setItem(AsyncKeys.userCurrencyList, updatedList)
    } catch (e) {
      console.log(e)
    }

    return true
  } 
  
  return false
}