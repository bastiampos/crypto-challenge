import axios from 'axios';
import { Dispatch } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UPDATE_USER_CURRENCY_LIST } from '../actionsTypes';
import { IGetCurrenciesAction } from '../../types';
import { IState } from '../reducers/mainReducer';
import { AsyncKeys } from '../../types';
import { HOST } from "@env"
import { ICurrency } from '../../types/currency';

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
    const response = await axios.get(`${HOST}/v1/assets/${valueSearched.toLowerCase()}/${fields}`)

    if(response.data.data) {
      dispatch({ type: UPDATE_USER_CURRENCY_LIST, payload: [...userCurrencyList, response.data.data] }) 

      try {
        await AsyncStorage.setItem(AsyncKeys.userCurrencyList, JSON.stringify(response.data.data))
      } catch (error) {
        console.log(error)
      }
    }

    return response.data
  } catch (error) {
    console.log(error)
    return error
  }
}

export const updateCurrencyList = () => async (dispatch: Dispatch<IGetCurrenciesAction>, getState: () => IState) => {
  const fields = 'metrics?fields=id,symbol,name,market_data/price_usd,market_data/percent_change_usd_last_24_hours'
  const {userCurrencyList} = getState().currencies
  let temporaryList: ICurrency[] = []

  const storeCurrencyList = async () => {
    try {
      await AsyncStorage.setItem(AsyncKeys.userCurrencyList, JSON.stringify(temporaryList))
    } catch (error) {
      console.log(error)
    }
  }

  if(userCurrencyList.length > 0) {
    userCurrencyList.map( currency => {
      axios.get(`${HOST}/v1/assets/${currency.symbol.toLowerCase()}/${fields}`)
        .then( response => {
          if(response.data.data) temporaryList = [ ...temporaryList, response.data.data ]

          if(userCurrencyList.length == temporaryList.length) {
            dispatch({ type: UPDATE_USER_CURRENCY_LIST, payload: temporaryList }) 
            storeCurrencyList()
          }
        })
        .catch(error => console.log(error))
    })
  }
}
