import React from 'react';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import mainReducer from './redux/reducers/mainReducer'
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './navigation/MainStackNavigator';

const store = createStore(mainReducer, applyMiddleware(thunk))

const App = (): JSX.Element => (
  <Provider store={store}>
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  </Provider>
)

export default App;
