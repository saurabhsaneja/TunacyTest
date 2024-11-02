import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigation/MainStack';

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor={'black'} />
        <MainStack />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
