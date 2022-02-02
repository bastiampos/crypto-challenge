import React, {useState, FC} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import currenciesActions from '../redux/actions/currenciesActions';

const NewCurrency: FC = () => {
  const dispatch = useDispatch()



  const [inputValue, setInputValue] = useState('')

  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.title}>Add a Cryptocurrency</Text>
        <TextInput
          style={[styles.input, {borderColor: '#B7C0C6'}]}
          placeholder='Use a name or ticker symbol...'
          placeholderTextColor={'#B7C0C6'}
          onChange={e => setInputValue(e.nativeEvent.text)}
          value={inputValue}
          autoFocus={true}
        />
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity style={styles.button} onPress={() => dispatch(currenciesActions.getCurrencyBySymbol(inputValue))}>
            <Text style={[styles.textButton, {color: '#385775'}]}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NewCurrency;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 24,
    flex: 1,
    paddingTop: '50%'
    // alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 24
  },
  input: {
    padding: 10,
    height: 56,
    width: '100%',
    borderRadius: 4,
    borderWidth: 1,
    marginBottom: 16,
  },
  button: {
    width: '45%',
    height: 48,
    backgroundColor: '#FBD24D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  },
  textButton: {
    fontSize: 18,
    fontWeight: '600',
  }
});
