import 'react-native-gesture-handler';
import * as React from 'react';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from '@navigation';

enableScreens();

function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

export default App;
