import axios from 'axios';
import { Dispatch } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UPDATE_USER_CURRENCY_LIST } from '../actionsTypes';
import { IGetCurrenciesAction } from '../../types';
import { IState } from '../reducers/mainReducer';
import { AsyncKeys } from '../../types';
import { HOST } from "@env"
import { ICurrency } from '../../types/currency';

const fields = 'metrics?fields=id,symbol,name,market_data/price_usd,market_data/percent_change_usd_last_24_hours'

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

  try {
    const response = await axios.get(`${HOST}/v1/assets/${valueSearched.toLowerCase()}/${fields}`)

    if(response.data.data) {
      dispatch({ type: UPDATE_USER_CURRENCY_LIST, payload: [...userCurrencyList, response.data.data] }) 

      try {
        await AsyncStorage.setItem(AsyncKeys.userCurrencyList, JSON.stringify([]))
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
  const {userCurrencyList} = getState().currencies
  let temporaryList: ICurrency[] = []

  const storeCurrencyList = async () => {
    dispatch({ type: UPDATE_USER_CURRENCY_LIST, payload: temporaryList }) 

    try {
      await AsyncStorage.setItem(AsyncKeys.userCurrencyList, JSON.stringify(temporaryList))
    } catch (error) {
      console.log(error)
    }
  }
  
  userCurrencyList.map( ({symbol})=> {
    axios.get(`${HOST}/v1/assets/${symbol.toLowerCase()}/${fields}`)
      .then( response => {
        if(response.data.data) temporaryList.push(response.data.data)

        if(userCurrencyList.length === temporaryList.length) storeCurrencyList()
      })
      .catch(error => console.log(error))
  })
}