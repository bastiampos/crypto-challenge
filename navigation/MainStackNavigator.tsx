import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CurrenciesList from '../views/CurrenciesList';
import { Routes } from './routes';
import AddCurrency from '../views/AddCurrency';

const Stack = createNativeStackNavigator();

const MainStackNavigator = (): JSX.Element => (
    <Stack.Navigator screenOptions= {{
        headerShown: false
    }}>
        <Stack.Screen 
            name={Routes.CURRENCY_LIST}
            component={CurrenciesList}
        />
        <Stack.Screen 
            name={Routes.ADD_CURRENCY}
            component={AddCurrency}
        />
    </Stack.Navigator>
)

export default MainStackNavigator
