//react components
import React from 'react';
//stack
import {createStackNavigator} from '@react-navigation/stack';
//global
//screens
import Welcome from './screens/Welcome';
import { ScreenNames } from '../global/Index';

const MainStack = () => {
  //variables
  const Stack = createStackNavigator();
  const initialRouteName = ScreenNames.WELCOME;
  const screenOptions = {
    headerShown: false,
  };
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={initialRouteName}>
      <Stack.Screen name={ScreenNames.WELCOME} component={Welcome} />
    </Stack.Navigator>
  );
};

export default MainStack;