import { useDispatch } from 'react-redux'
import React, {useState, useEffect, FC} from 'react';
import { Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native';
import {addCurrencyBySymbol} from '../../redux/actions/currenciesActions';
import colors from '../../assets/stylesRoot/colors';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/routes';
import styles from './styles';

const AddCurrency= (): JSX.Element => {
  const dispatch = useDispatch()
  const navigation: any = useNavigation();
  const routes = useNavigation().getState()?.routes
  const prevRoute = routes[routes.length - 2]

  const [inputValue, setInputValue] = useState<string>('')
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [isButtonActive, setIsButtonActive] = useState<boolean>(false)
  const [error, setError ] = useState<string>('')

  const handleFocus = () => setIsFocused(true) 
  const handleBlur = () => setIsFocused(false) 

  useEffect(() => {
    setIsButtonActive(inputValue.length > 2)
  }, [inputValue])

  const addCurrency = async () => {
    if (isButtonActive) {
      const res = await dispatch(addCurrencyBySymbol(inputValue))
      if(!res) {
        setError(`Ya has agregado ${inputValue} o no existe`)
        setInputValue('')
      } else {
        navigation.navigate(Routes.CURRENCIES_LIST)
        setError('')
      }
    }
  }

  const goBack = () => navigation.goBack()

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={goBack}>
            <Text style={styles.textBackButton}>{`< Back to ${prevRoute.name}`}</Text>
          </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.title}>Add a Cryptocurrency</Text>
        <TextInput
          style={[styles.input, {borderColor: isFocused ? colors.primaryYellow : colors.fourthGray}]}
          placeholder='Use a name or ticker symbol...'
          placeholderTextColor={colors.fourthGray} 
          onChange={e => setInputValue(e.nativeEvent.text)}
          value={inputValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <Text style={styles.error} >{error && error}</Text>
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
