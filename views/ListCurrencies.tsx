import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useGetCurrencies } from '../customHooks/currenciesHooks';
import CurrencyCard from '../components/CurrencyCard';
import { Currency } from '../interfaces';

const Home = ({navigation}: any) => {
  const [currenciesList, setCurrenciesList] = useState<Currency[]>([])

  return (
    <View style={styles.mainContainer}>
      {(currenciesList && currenciesList.length > 0) && currenciesList.map(currency => <CurrencyCard key={currency.id} currency={currency} />)}
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('new-currency')}>
          <Text style={styles.button}>{`+ Add a Cryptocurrency`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 24,
    backgroundColor: 'white'
  },
  button: {
    textAlign: 'center',
    color: '#385775',
    fontSize: 16,
    marginTop: 50
  }
});
