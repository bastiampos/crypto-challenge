import React, {useEffect, FC} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TouchableOpacity, View, Image, FlatList, ListRenderItem} from 'react-native';
import {getUserCurrenciesFromAsync} from '../../redux/actions/currenciesActions';
import { IState } from '../../redux/reducers/mainReducer';
import CurrencyCard from '../../components/CurrencyCard';
import styles from './styles';
import { ICurrency } from '../../interfaces';

interface Props {
  navigation: any
}

const Home: FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserCurrenciesFromAsync());
  }, []);
  
  const userCurrenciesList = useSelector( (state: IState) => state.currencies.userCurrenciesList );

  const renderCurrencies: ListRenderItem<ICurrency> = ({item}) => <CurrencyCard key={item.symbol} currency={item} />
  
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>CryptoTracker Pro</Text>
        <Image style={styles.userPhoto} source={{uri: 'https://i.imgur.com/kregEJT.png'}} />
      </View>
      <View style={styles.currenciesContainer}>
        {userCurrenciesList?.length === 0 && <View style={styles.noCryptoContainer}>
            <Text style={styles.noCryptoText}>You haven't added cryptocurrencies yet</Text>
          </View>
        }
        <FlatList
          data={userCurrenciesList}
          keyExtractor={(currency) => currency.symbol}
          renderItem={renderCurrencies}
        />
        <View>
          <TouchableOpacity>
            <Text style={styles.button}>+ Add a Cryptocurrency</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;