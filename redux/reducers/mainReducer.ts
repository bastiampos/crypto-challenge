import { combineReducers } from "redux"
import currenciesReducer from './currenciesReducer'
 
const mainReducer = combineReducers({currencies: currenciesReducer})
 
export default mainReducer

export type IState = ReturnType<typeof mainReducer>