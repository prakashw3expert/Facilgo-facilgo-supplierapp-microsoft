import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {s, ms} from '@utils/sizeMatter';
import theme from '@theme';

const HeaderRight = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <AntDesign name="check" size={ms(26)} color={theme.colors.white} />
    </TouchableOpacity>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({
  container: {
    marginRight: s(20),
  },
});
