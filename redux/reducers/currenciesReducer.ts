import { IGetCurrenciesAction, ICurrenciesState } from "../../types"
import { ADD_NEW_CRYPTOCURRENCY, GET_USER_CURRENCIES_FROM_ASYNC } from '../actionsTypes';

const initialState: ICurrenciesState = { 
  userCurrencyList: []
}

const currenciesReducer = ( state: ICurrenciesState = initialState, {type, payload}: IGetCurrenciesAction): ICurrenciesState => {
  switch (type) {
    case ADD_NEW_CRYPTOCURRENCY: 
    case GET_USER_CURRENCIES_FROM_ASYNC:
      return {
        ...state,
        userCurrencyList: payload
      }
    default:
      return state
  }
}

export default currenciesReducer
