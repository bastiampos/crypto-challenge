import axios, {AxiosResponse, AxiosError} from 'axios';
import { Dispatch } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UPDATE_USER_CURRENCY_LIST } from '../actionsTypes';
import { ICurrency, IGetCurrenciesAction } from '../../types';
import { IState } from '../reducers/mainReducer';
import { AsyncKeys } from '../../types';
import { HOST } from "@env"

export const getUserCurrenciesFromAsync = () => async (dispatch: Dispatch<IGetCurrenciesAction>) => {
  try {
    const userCurrencyList = await AsyncStorage.getItem(AsyncKeys.userCurrencyList)
    if (userCurrencyList) {
      dispatch({
        type: UPDATE_USER_CURRENCY_LIST, 
        payload: JSON.parse(userCurrencyList)
      })
    }
  } catch(e) {
    console.log(e)
  }
}

export const addCurrency = (valueSearched: string) => async (dispatch: Dispatch<IGetCurrenciesAction>, getState: () => IState) => {
  const {userCurrencyList} = getState().currencies
  const fields = 'metrics?fields=id,symbol,name,market_data/price_usd,market_data/percent_change_usd_last_24_hours'

  try {
    const response: AxiosResponse = await axios.get(`${HOST}/v1/assets/${valueSearched.toLowerCase()}/${fields}`)

    if(response.data.data) {
      dispatch({ type: UPDATE_USER_CURRENCY_LIST, payload: [...userCurrencyList, response.data.data] }) 

      try {
        await AsyncStorage.setItem(AsyncKeys.userCurrencyList, JSON.stringify([...userCurrencyList, response.data.data]))
      } catch (e) {
        console.log(e)
      }
    }

    return response.data
  } catch (error) {
    console.log(error)
    return error
  }
}
