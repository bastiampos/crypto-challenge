import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';

const NewCurrency = () => {
  const [inputValue, setInputValue] = useState('')
  console.log(inputValue)

  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.title}>Add a Cryptocurrency</Text>
        <TextInput
          style={[styles.input]}
          placeholder='Use a name or ticker symbol...'
          onChange={e => setInputValue(e.nativeEvent.text)}
          value={inputValue}
        />
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Add</Text>
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
    color: '#385775'
  }
});
