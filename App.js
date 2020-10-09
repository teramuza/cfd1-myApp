// @flow

import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider as StoreProvider} from 'react-redux';
import {COLORS} from './src/Themes';
import {AppStatusBar} from './src/Components';
import {getStore} from './src/Redux/Store';
import RootNavigation from './src/Routes/Navigation';

const store = getStore();

const App: () => React$Node = () => {
  const APP_THEME = COLORS.BLACK;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: APP_THEME}}>
      <AppStatusBar backgroundColor={APP_THEME} barStyle="light-content" />
      <StoreProvider store={store}>
        <RootNavigation />
      </StoreProvider>
    </SafeAreaView>
  );
};

export default App;
