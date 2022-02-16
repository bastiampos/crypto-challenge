import { IGetCurrenciesAction, ICurrenciesState } from "../../types"
import { UPDATE_USER_CURRENCY_LIST } from '../actionsTypes';

const initialState: ICurrenciesState = { 
  userCurrencyList: [],
  isLoading: false
}

const currenciesReducer = ( state: ICurrenciesState = initialState, {type, payload}: IGetCurrenciesAction): ICurrenciesState => {  
  switch (type) {
    case UPDATE_USER_CURRENCY_LIST: 
      return {
        ...state,
        userCurrencyList: payload,
        isLoading: true
      }
    default:
      return state
  }
}

export default currenciesReducer
