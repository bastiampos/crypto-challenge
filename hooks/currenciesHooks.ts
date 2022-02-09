import { useDispatch, useSelector } from 'react-redux'
import {useState, useEffect, Dispatch, SetStateAction} from 'react';
import {addCurrency as addCurrencyAction} from '../redux/actions/currenciesActions';
import { IState } from '../redux/reducers/mainReducer';
import { useNavigation } from '@react-navigation/native';
import { ICurrency } from '../types';

type IReturnAddNewCurrency = [string, Dispatch<SetStateAction<string>>, boolean, Dispatch<SetStateAction<boolean>>, boolean, () => Promise<void>, string, string ]

export const useAddNewCurrency = (): IReturnAddNewCurrency => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const userCurrencyList = useSelector( (state: IState)=> state.currencies.userCurrencyList)

  const [inputValue, setInputValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [isButtonActive, setIsButtonActive] = useState(false)
  const [error, setError ] = useState('')
  const [textButton, setTextButton] = useState('Add')

  useEffect(() => {
    setIsButtonActive(inputValue.length > 2)
  }, [inputValue])

  const addCurrency = async () => {
    if (isButtonActive) {
      setInputValue('')
      setTextButton('Searching...')
      const isAdded: ICurrency | undefined  = userCurrencyList.find( ({symbol, name}) => (
        symbol.toLowerCase() === inputValue.toLowerCase() ||  name.toLowerCase() === inputValue.toLowerCase()
      ))

      if (isAdded) {
        setError(`${inputValue} has been added`)
        setTextButton('Add')
      } else {
        setTextButton('Validating...')
        const response = await dispatch(addCurrencyAction(inputValue))

        if(response.data) {
          setError('')
          setTextButton('Add')
          navigation.goBack()
        } else if(response.response.status === 404) {
          setError(`The cryptocurrency ${inputValue} doesn't exist`)
          setTextButton('Add')
        } else {
          setError(`We are having issues with our server, try again later`)
          setTextButton('Add')
        }
      }
    }
  }

  return [inputValue, setInputValue, isFocused, setIsFocused, isButtonActive, addCurrency, error, textButton]
}