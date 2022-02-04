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
    setIsPositive(currency.pctg >= 0 ? true : false)
  })

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
        <Text style={styles.boldText}>{`$${currency.price.toFixed(0)}`}</Text>
        <View style={styles.percent}>
          {currency.pctg >= 0 
            ? <Icon name="arrow-up-right" size={17} color={colors.green} /> 
            : <Icon name="arrow-down-left" size={17} color={colors.warning} />
          }
          <Text style={[styles.span, {color: isPositive ? colors.green : colors.warning}]}>
            {isPositive ? currency.pctg.toFixed(2) : currency.pctg.toFixed(2) *-1}%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CurrencyCard;