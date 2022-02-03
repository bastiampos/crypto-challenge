import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch } from 'react';

import { ThunkAction } from '../../interfaces';
import { GET_USER_CURRENCIES_FROM_ASYNC } from '../actionsTypes';

const currenciesActions = {
    getUserCurrenciesFromAsync: () => {
      return async (dispatch: Dispatch<ThunkAction>) => {
          try {
            const userCurrenciesList = await AsyncStorage.getItem('@userCurrenciesList')
            if (userCurrenciesList != null ) {
              dispatch({
                type: GET_USER_CURRENCIES_FROM_ASYNC, 
                payload: JSON.parse(userCurrenciesList)
              })
              console.log('envie payload currencies desde async')
            }
          } catch(e) {
            console.log(e)
          }
      }
    }
}
 
export default currenciesActions
