import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ListCurrencies from '../views/ListCurrencies';

const Stack = createNativeStackNavigator()

export const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='list-currencies' 
                component={ListCurrencies} 
                options= {{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}
