import React, {FC} from 'react';
import { Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native';
import colors from '../../assets/stylesRoot/colors';
import { useAddNewCurrency } from '../../hooks/currenciesHooks';
import styles from './styles';

interface IAddCurrencyProps {
  navigation: any
}

const AddCurrency: FC<IAddCurrencyProps> = ({navigation}) => {

  const [inputValue, setInputValue, isFocused, setIsFocused, isButtonActive, addCurrency, error, textButton] = useAddNewCurrency()
  
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
          <TouchableOpacity onPress={navigation.goBack}>
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
            <Text style={[styles.textButton, {opacity: isButtonActive ? 1 : 0.2}]}>{textButton}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView> 
  );
};

export default AddCurrency;
