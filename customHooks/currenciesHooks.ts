import axios from 'axios'
import {useState} from 'react'

import { Currency } from "../interfaces";

const HOST = "https://data.messari.io/api"

export const useGetCurrencies = (): Currency[] | undefined => {
  const [currencies, setCurrencies] = useState<Currency[]>([])
  axios.get(`${HOST}/v2/assets?fields=id,name,symbol,metrics/market_data/price_usd,metrics/market_data/percent_change_usd_last_24_hours`)
    .then((res) => {
      console.log(res.data)
      setCurrencies(res.data)
    })
    .catch(e => {
      console.log(e)
    })
    return currencies
}

export const useGetCurrencyBySymbol = (symbol: string): Currency|undefined => {
  const [currency, setCurrency] = useState<Currency>()

  axios.get(`${HOST}/v1/assets/${symbol}/metrics?fields=id,symbol,name,market_data/price_usd,market_data/percent_change_usd_last_24_hours`)
    .then((res) => {
      console.log(res.data)
      setCurrency(res.data)
    })
    .catch(e => {
      console.log(e)
    })
    return currency
}