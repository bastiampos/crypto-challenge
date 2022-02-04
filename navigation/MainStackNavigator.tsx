import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CurrenciesList from '../views/CurrenciesList';
import { Routes } from './routes';

const Stack = createNativeStackNavigator();

const MainStackNavigator = (): JSX.Element => {
    return (
        <Stack.Navigator screenOptions= {{
            headerShown: false
        }}>
            <Stack.Screen 
                name={Routes.CURRENCIES_LIST}
                component={CurrenciesList}
                options= {{
                    headerBackTitleVisible: false,
                }}
            />
        </Stack.Navigator>
    )
};

export default MainStackNavigator