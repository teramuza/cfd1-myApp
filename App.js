import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/Screens/Home/HomeScreen';
import DetailsScreen from './src/Screens/Detail/DetailScreen';
import {routes} from './src/routes';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={routes.HomeScreen} component={HomeScreen} />
        <Stack.Screen name={routes.DetailScreen} component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
