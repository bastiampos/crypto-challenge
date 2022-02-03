import React from 'react';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import mainReducer from './redux/reducers/mainReducer'
import { NavigationContainer } from '@react-navigation/native';

import {
  StyleSheet,
} from 'react-native';
import { MainStackNavigator } from './navigation/MainStackNavigator';

const globalStore = createStore(mainReducer, applyMiddleware(thunk))

const App = () => {

  return (
    <Provider store={globalStore}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
