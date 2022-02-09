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
  const [isPositive, setIsPositive] = useState(false)
  const [price, setPrice] = useState('')
  const [percentage, setPercentage] = useState(0)

  const {id, name, symbol, market_data: {price_usd, percent_change_usd_last_24_hours}} = currency

  useEffect(() => {
    const priceFormat = new Intl.NumberFormat('en-US')
    setIsPositive(percent_change_usd_last_24_hours >= 0)
    setPrice(priceFormat.format(price_usd.toFixed(2)))
    setPercentage(Math.abs(percent_change_usd_last_24_hours.toFixed(2)))
  }, [])

  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftContainer}>
          <Image style={styles.icon} source={{uri: `https://messari.io/asset-images/${id}/128.png?v=2` }} />
        <View>
          <Text style={styles.boldText}>{name}</Text>
          <Text>{symbol}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.boldText}>{`$${price}`}</Text>
        <View style={styles.percent}>
          <Icon 
            name={isPositive ? "arrow-up-right" : "arrow-down-left"} 
            size={17} 
            color={isPositive ? colors.darkGreen : colors.warning} 
          />
          <Text style={{color: isPositive ? colors.darkGreen : colors.warning}}>
            {percentage}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CurrencyCard;
