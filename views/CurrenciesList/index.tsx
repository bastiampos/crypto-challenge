import React, {useEffect} from 'react';
import { Text, TouchableOpacity, View, Image, FlatList, ListRenderItem} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { IState } from '../../redux/reducers/mainReducer';
import CurrencyCard from '../../components/CurrencyCard';
import { Routes } from '../../navigation/routes';
import { ICurrency } from '../../types';
import styles from './styles';
import { updateCurrencyList, getUserCurrenciesFromAsync } from '../../redux/actions/currenciesActions';

const Home = ({navigation: {navigate}}: any): JSX.Element => {
  const userCurrencyList = useSelector( (state: IState)=> state.currencies.userCurrencyList)
  const isLoading = useSelector( (state: IState)=> state.currencies.isLoading)
  const {ADD_CURRENCY} = Routes

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserCurrenciesFromAsync())
  }, [])

  useEffect(() => {
    if(isLoading) {
      if(userCurrencyList.length > 0) {
        const intervalID = setInterval(() => {
          dispatch(updateCurrencyList())
         }, 25000)

        return () => clearInterval(intervalID)
      }
    }
  }, [isLoading, userCurrencyList])

  

  const orderCurrencyList = (a: ICurrency, b: ICurrency) => a.name.localeCompare(b.name)

  const renderCurrencies: ListRenderItem<ICurrency> = ({item}) => <CurrencyCard key={item.symbol} currency={item} />
  
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}> 
        <Text style={styles.headerTitle}>CryptoTracker Pro</Text>
        <Image style={styles.userPhoto} source={{uri: 'https://i.imgur.com/kregEJT.png'}} />
      </View>
      <View style={styles.currenciesContainer}>
        {userCurrencyList.length > 0 
          ? <FlatList
              data={userCurrencyList.sort(orderCurrencyList)}
              keyExtractor={({symbol}) => symbol}
              renderItem={renderCurrencies}
          />
          : <View style={styles.noCryptoContainer}>
            <Text style={styles.noCryptoText}>You haven't added cryptocurrencies yet</Text>
          </View>
        }
        <View>
          <TouchableOpacity onPress={() => navigate(ADD_CURRENCY)}>
            <Text style={styles.button}>+ Add a Cryptocurrency</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;