import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Currency } from '../interfaces';

const CurrencyCard = ({currency}: any) => {

  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftContainer}>
        <Image style={styles.icon} source={{uri: `https://messari.io/asset-images/${currency.id}/128.png?v=2`}} />
        <View>
          <Text style={styles.boldText}>{currency.name}</Text>
          <Text>{currency.symbol}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.boldText}>{`$${currency.market_data.price_usd}`}</Text>
        <Text style={[styles.span, {color: 'red'}]}>{currency.market_data.percent_change_usd_last_24_hours}%</Text>
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
    fontSize: 16
  },
  span: {
    textAlign: 'right',
  },
});
