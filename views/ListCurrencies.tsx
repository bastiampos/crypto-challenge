import React, {useState, useEffect, FC} from 'react';
import axios from 'axios';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';

// import { useGetCurrencies } from '../customHooks/currenciesHooks';
import CurrencyCard from '../components/CurrencyCard';
import { Currency } from '../interfaces';

const Home: FC = ({navigation}: any) => {
  const [currenciesList, setCurrenciesList] = useState<Currency[]>([])

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>CryptoTracker Pro</Text>
        <Image style={styles.userPhoto} source={{uri: 'https://i.imgur.com/kregEJT.png'}} />
      </View>
      <View style={{paddingHorizontal: 24}}>
        {!currenciesList && <View style={styles.noCryptoContainer}>
            <Text style={styles.noCryptoText}>You haven't added cryptocurrencies yet</Text>
          </View>
        }
        {currenciesList && currenciesList.slice(0, 3).map(currency => <CurrencyCard key={currency.id} currency={currency} />)}
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('new-currency')}>
            <Text style={styles.button}>{`+ Add a Cryptocurrency`}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    paddingBottom: 50
  },
  headerContainer: {
    width: '100%',
    height: 130,
    backgroundColor: '#385775',
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingBottom: 42,
    marginBottom: 18
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700'
  },
  userPhoto: {
    borderRadius: 24,
    height: 48,
    width: 48,
    backgroundColor: 'white'
  },
  noCryptoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 4,
    borderColor: 'rgba(0,0,0,0.2)',
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1
  },
  noCryptoText: {
    color: 'rgba(0,0,0,0.5)'
  },
  button: {
    textAlign: 'center',
    color: '#385775',
    fontSize: 16,
    marginTop: 50
  }
});

// const HOST = "https://data.messari.io/api"

// useEffect(() => {
//   axios.get(`${HOST}/v2/assets?fields=id,name,symbol,metrics/market_data/price_usd,metrics/market_data/percent_change_usd_last_24_hours`)
//   .then((res) => {
//     console.log('LIST CURRENCIES')
//     setCurrenciesList(res.data.data)
//   })
//   .catch(error => {
//     console.log(`No se pudo obtener el listado de cryptos porque ${error}`)
//   })
// }, [])

// console.log('listado de' + currenciesList.length)