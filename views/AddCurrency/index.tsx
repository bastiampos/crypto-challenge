import { useDispatch } from 'react-redux'
import React, {useState, useEffect, FC} from 'react';
import { Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native';
import {addCurrencyBySymbol} from '../../redux/actions/currenciesActions';
import colors from '../../assets/stylesRoot/colors';
import { Routes } from '../../navigation/routes';
import styles from './styles';

interface IAddCurrencyProps {
  navigation: any
}

const AddCurrency: FC<IAddCurrencyProps> = ({navigation}) => {
  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [isButtonActive, setIsButtonActive] = useState(false)
  const [error, setError ] = useState<any>('')

  useEffect(() => {
    setIsButtonActive(inputValue.length > 2)
  }, [inputValue])

  const addCurrency = async () => {
    if (isButtonActive) {
      const response = await dispatch(addCurrencyBySymbol(inputValue))
      if(!response) {
        setError(`${inputValue} has been added or doesn't exist`)
        setInputValue('')
      } else {
        navigation.navigate(Routes.CURRENCIES_LIST)
        setError('')
      }
    }
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
          <TouchableOpacity onPress={navigation.goBack.bind(null)}>
            <Text style={styles.textBackButton}>&#60; Back to list</Text>
          </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.title}>Add a Cryptocurrency</Text>
        <TextInput
          style={[styles.input, {borderColor: isFocused ? colors.primaryYellow : colors.fourthGray}]}
          placeholder='Use a name or ticker symbol...'
          placeholderTextColor={colors.fourthGray} 
          onChange={ ({nativeEvent: {text}}) => setInputValue(text)}
          value={inputValue}
          onFocus={setIsFocused.bind(null, true) }
          onBlur={setIsFocused.bind(null, false) }
        />
        <Text style={styles.alert} >{error && error}</Text>
        <TouchableOpacity style={styles.buttonContainer} disabled={!isButtonActive} onPress={addCurrency}>
          <View style={styles.button}>
            <Text style={[styles.textButton, {opacity: isButtonActive ? 1 : 0.2}]}>Add</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView> 
  );
};

export default AddCurrency;
