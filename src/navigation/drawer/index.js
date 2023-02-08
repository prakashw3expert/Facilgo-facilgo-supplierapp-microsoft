import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {GoBack, CustomDrawer, HeaderRight} from '@components';
import Login from '@screens/authentication/Login';
import Home from '@screens/Home';
import OfflineSync from '@screens/authentication/OfflineSync';
import Logs from '@screens/authentication/Logs';
import Environment from '@screens/authentication/Environment';
import theme from '@theme';

const Drawer = createDrawerNavigator();
const token = true;

const DrawerNavigation = props => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerLeft: () => <GoBack {...props} />,
        headerStyle: {backgroundColor: 'blue'},
        headerTintColor: theme.colors.white,
      }}>
      {token ? (
        <Drawer.Group>
          <Drawer.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Drawer.Screen
            name="OfflineSyncStats"
            component={OfflineSync}
            options={{headerTitle: 'Offline Sync Stats'}}
          />
          <Drawer.Screen name="Logs" component={Logs} />
          <Drawer.Screen
            name="Environment"
            component={Environment}
            options={{
              headerRight: () => <HeaderRight />,
              headerTitle: 'Select Environment',
            }}
          />
        </Drawer.Group>
      ) : (
        <Drawer.Group>
          <Drawer.Screen name="Home" component={Home} />
        </Drawer.Group>
      )}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
