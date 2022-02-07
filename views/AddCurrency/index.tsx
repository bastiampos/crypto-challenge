import { useDispatch } from 'react-redux'
import React, {useState, useEffect, FC} from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import {addCurrencyBySymbol} from '../../redux/actions/currenciesActions';
import colors from '../../assets/stylesRoot/colors';
import styles from './styles';

const AddCurrency: FC = () => {
  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState<string>('')
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [isButtonActive, setIsButtonActive] = useState<boolean>(false)

  const handleFocus = () => setIsFocused(true) 
  const handleBlur = () => setIsFocused(false) 

  useEffect(() => {
    setIsButtonActive(inputValue.length > 2)
  }, [inputValue])

  const addCurrency = () => {
    if (isButtonActive) dispatch(addCurrencyBySymbol(inputValue))
  }

  return (
    <View style={styles.mainContainer}>
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
        <TouchableOpacity style={styles.buttonContainer} disabled={!isButtonActive} onPress={addCurrency}>
          <View style={styles.button}>
            <Text style={[styles.textButton, {opacity: isButtonActive ? 1 : 0.2}]}>Add</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View> 
  );
};

export default AddCurrency;
