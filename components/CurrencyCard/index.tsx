import { Text, View, Image } from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather'
import styles from './styles';
import colors from '../../assets/stylesRoot/colors';
Icon.loadFont()

interface Props {
  currency: any
}

const CurrencyCard: FC<Props> = ({currency}) => {
  const [isPositive, setIsPositive] = useState<Boolean>()

  useEffect(() => {
    setIsPositive(currency.pctg >= 0)
  }, [])

  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftContainer}>
        <Image style={styles.icon} source={{uri: currency.src}} />
        <View>
          <Text style={styles.boldText}>{currency.name}</Text>
          <Text>{currency.symbol}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.boldText}>{`$${currency.price.toFixed(2)}`}</Text>
        <View style={styles.percent}>
          <Icon 
            name={isPositive ? "arrow-up-right" : "arrow-down-left"} 
            size={17} 
            color={isPositive ? colors.green : colors.warning} 
          />
          <Text style={[styles.span, {color: isPositive ? colors.green : colors.warning}]}>
            {isPositive ? currency.pctg.toFixed(2) : currency.pctg.toFixed(2) *-1}%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CurrencyCard;
