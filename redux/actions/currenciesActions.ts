import axios from 'axios';
import { Dispatch } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ADD_NEW_CRYPTOCURRENCY, GET_USER_CURRENCIES_FROM_ASYNC } from '../actionsTypes';
import { ICurrency, IGetCurrenciesAction } from '../../types';
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

export const addCurrencyBySymbol = (valueSearched: string) => async (dispatch: Dispatch<IGetCurrenciesAction>, getState: () => IState) => {
  const {userCurrencyList} = getState().currencies

  const host = 'https://data.messari.io/api/v1/assets'
  const fields = 'metrics?fields=id,symbol,name,market_data/price_usd,market_data/percent_change_usd_last_24_hours'

  try {
    const response = await axios.get(`${host}/${valueSearched.toLocaleLowerCase()}/${fields}`)
    
    if(response.data.data) {
      const isAdded: ICurrency | undefined  = userCurrencyList.find( ({symbol, name}) => (
        symbol.toLowerCase() === valueSearched.toLowerCase() ||  name.toLowerCase() === valueSearched.toLowerCase()
      ))

      if (!isAdded) {
        const updatedList = [...userCurrencyList, response.data.data]
        dispatch({ type: ADD_NEW_CRYPTOCURRENCY, payload: updatedList }) 

        try {
          await AsyncStorage.setItem(AsyncKeys.userCurrencyList, JSON.stringify(updatedList))
        } catch (e) {
          console.log(e)
        }

        return true
      }
    }
  } catch (error) {
    console.log(error)
  }
  
  return false
}
