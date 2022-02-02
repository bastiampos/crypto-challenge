import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
// import { Currency } from '../interfaces';

const CurrencyCard = ({currency}: any) => {

  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftContainer}>
        <Image style={styles.icon} source={{uri: `https://messari.io/asset-images/${currency.id && currency.id}/128.png?v=2`}} />
        <View>
          <Text style={styles.boldText}>{currency.name && currency.name}</Text>
          <Text>{currency.symbol && currency.symbol}</Text>
        </View>
      </View>
      <View>
        <Text style={[styles.boldText]}>{`$${currency.metrics.market_data.price_usd && currency.metrics.market_data.price_usd.toFixed(0)}`}</Text>
        <Text style={[
          styles.span, 
          {color: (currency.metrics.market_data.percent_change_usd_last_24_hours && currency.metrics.market_data.percent_change_usd_last_24_hours >= 0) ? 'green' : 'red'}
        ]}>
          {currency.metrics.market_data.percent_change_usd_last_24_hours && currency.metrics.market_data.percent_change_usd_last_24_hours.toFixed(2)}%
        </Text>
      </View>
    </View>
  );
};

export default CurrencyCard;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    padding: '1%',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 24,
    borderBottomWidth: 0.6,
    borderBottomColor: 'gray',
    alignItems: 'center'
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    height: 48,
    width: 48,
    borderRadius: 20,
    // backgroundColor: 'gray',
    marginRight: 7
  },
  boldText: {
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'right'
  },
  span: {
    textAlign: 'right',
  },
});
