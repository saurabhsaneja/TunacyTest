//react components
import React from 'react';
//stack
import {createStackNavigator} from '@react-navigation/stack';
//global
//screens
import Welcome from './screens/Welcome';
import { ScreenNames } from '../global/Index';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import OneTimePassword from './screens/OneTimePassword';

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
      <Stack.Screen name={ScreenNames.LOGIN} component={Login} />
      <Stack.Screen name={ScreenNames.SIGN_UP} component={SignUp} />
      <Stack.Screen name={ScreenNames.ONE_TIME_PASSWORD} component={OneTimePassword} />
    </Stack.Navigator>
  );
};

export default MainStack;