/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {

  StatusBar,
  useColorScheme,

} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import MainNavigator from './Navigators/MainNavigator';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import getRootReducer from './Reducer/CommonReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//Try 1:
const store = configureStore({
  reducer: getRootReducer(),
});


// const store = configureStore({
//   reducer: getRootReducer(),
//   middleware:(getDefaultMiddleware) =>
//   getDefaultMiddleware().concat(thunk, logger),
// });

import { enableScreens } from 'react-native-screens';

enableScreens();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <MainNavigator />
      </SafeAreaProvider>
     
    </Provider>
  );
}

export default App;
