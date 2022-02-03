import { StyleSheet, Text, View, Image } from 'react-native';
import React, {FC, ReactElement, ReactNode} from 'react';

import Icon from 'react-native-vector-icons/Feather'
Icon.loadFont()

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
        <Text style={[styles.boldText]}>{`$${currency.price && currency.price.toFixed(0)}`}</Text>
        <View style={styles.percent}>
          {(currency.pctg && currency.pctg >= 0) ? <Icon name="arrow-up-right" size={17} color="green" /> : <Icon name="arrow-down-left" size={17} color= 'red' />}
          <Text style={[styles.span, {color: (currency.pctg && currency.pctg >= 0) ? 'green' : 'red'}]}>
            {currency.pctg && (currency.pctg >= 0) ? currency.pctg.toFixed(2) *1 : currency.pctg.toFixed(2) *-1}%
          </Text>
        </View>
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
    borderBottomWidth: 0.4,
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
    borderRadius: 24,
    backgroundColor: 'gray',
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
  percent: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
