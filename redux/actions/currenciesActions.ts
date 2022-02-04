import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch } from 'redux';
import { IGetCurrenciesAction } from '../../interfaces';
import { GET_USER_CURRENCIES_FROM_ASYNC } from '../actionsTypes';

export const getUserCurrenciesFromAsync = () => {
  return async (dispatch: Dispatch<IGetCurrenciesAction>) => {
    try {
      const userCurrenciesList = await AsyncStorage.getItem('@userCurrenciesList')
      if (userCurrenciesList != null ) {
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
