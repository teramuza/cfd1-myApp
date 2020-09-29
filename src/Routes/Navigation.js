//@flow

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from './routes';
import {HomeScreen, DetailsScreen} from '../Routes/ScreenConfig';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={routes.HomeScreen}>
      <Stack.Screen name={routes.HomeScreen} component={HomeScreen} />
      <Stack.Screen name={routes.DetailScreen} component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default () => (
  <NavigationContainer>
    <MainStack />
  </NavigationContainer>
);
