import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ListCurrencies from '../views/ListCurrencies';
import NewCurrency from '../views/NewCurrency';

const Stack = createNativeStackNavigator()

export const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='list-currencies' 
                component={ListCurrencies} 
                options= {{
                    title: '',
                    headerBackTitleVisible: false
                }}
            />
            <Stack.Screen 
                name='new-currency' 
                component={NewCurrency} 
                options= {{
                    title: '',
                }}
            />
        </Stack.Navigator>
    )
}
