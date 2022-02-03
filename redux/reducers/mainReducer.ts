import { combineReducers } from "redux"
import currenciesReducer from './currenciesReducer'
 
const mainReducer = combineReducers({currencies: currenciesReducer})
 
export default mainReducer

export type MainState = ReturnType<typeof mainReducer>