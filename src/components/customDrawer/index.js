import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {s, vs} from '@utils/sizeMatter';
import theme from '@theme';

const CustomDrawer = props => {
  const [showMenu, setShowMenu] = useState(false);
  const {height} = useWindowDimensions();

  let drawerData = [
    {
      name: 'Offline Sync Stats',
      navigateTo: 'OfflineSyncStats',
    },
    {
      name: 'Logs',
      navigateTo: 'Logs',
    },
    {
      name: 'Environment',
      navigateTo: 'Environment',
    },
  ];

  const closeDrawer = () => {
    props.navigation.closeDrawer()
  }

  const openMenu = () => {
    setShowMenu(true)
  }

  const onMenuItemPress = (screen) => {
    props.navigation.navigate(screen)
  }

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.closeBtn}
          onPress={closeDrawer}>
          <Ionicons color={theme.colors.black} name="close-outline" size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={openMenu}
          style={styles.invisibleDiv(height)}
        />
        {showMenu &&
          drawerData?.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.drawerItem}
                onPress={()=>onMenuItemPress(item?.navigateTo)}>
                <Text>{item?.name}</Text>
              </TouchableOpacity>
            );
          })}
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    marginLeft: s(40),
    flex: 1,
  },
  drawerItem: {
    paddingVertical: vs(26),
    flex: 1,
    marginLeft: s(6),
  },
  closeBtn: {
    marginVertical: vs(20),
  },
  invisibleDiv: height => ({
    position: 'absolute',
    width: s(6),
    height,
  }),
});
