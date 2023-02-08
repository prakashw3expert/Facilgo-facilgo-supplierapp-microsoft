import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ForgotPassword from '@screens/authentication/ForgotPassword.js';
import DrawerNavigation from '@navigation/drawer';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
