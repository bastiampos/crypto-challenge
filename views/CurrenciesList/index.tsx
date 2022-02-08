import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TouchableOpacity, View, Image, FlatList, ListRenderItem} from 'react-native';
import {getUserCurrenciesFromAsync} from '../../redux/actions/currenciesActions';
import { IState } from '../../redux/reducers/mainReducer';
import CurrencyCard from '../../components/CurrencyCard';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { ICurrency } from '../../types';
import { Routes } from '../../navigation/routes';

const Home = (): JSX.Element => {
  const dispatch = useDispatch();
  const {navigate}: any = useNavigation();
  const {ADD_CURRENCY} = Routes

  useEffect(() => {
    dispatch(getUserCurrenciesFromAsync())
  }, [])
  
  const userCurrencyList = useSelector( (state: IState) => state.currencies.userCurrencyList );

  const renderCurrencies: ListRenderItem<ICurrency> = ({item}) => <CurrencyCard key={item.symbol} currency={item} />
  
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>CryptoTracker Pro</Text>
        <Image style={styles.userPhoto} source={{uri: 'https://i.imgur.com/kregEJT.png'}} />
      </View>
      <View style={styles.currenciesContainer}>
        {userCurrencyList?.length === 0 && <View style={styles.noCryptoContainer}>
            <Text style={styles.noCryptoText}>You haven't added cryptocurrencies yet</Text>
          </View>
        }
        <FlatList
          data={userCurrencyList}
          keyExtractor={(currency) => currency.symbol}
          renderItem={renderCurrencies}
        />
        <View>
          <TouchableOpacity onPress={navigate.bind(null, ADD_CURRENCY)}>
            <Text style={styles.button}>+ Add a Cryptocurrency</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;
