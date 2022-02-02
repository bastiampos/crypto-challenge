import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { MainStackNavigator } from './navigation/MainStackNavigator';

const App = () => {

  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
