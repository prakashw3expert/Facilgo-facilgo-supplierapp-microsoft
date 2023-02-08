import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {s} from '@utils/sizeMatter';
import theme from '@theme';

const GoBack = props => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      <Ionicons
        name="arrow-back-outline"
        size={26}
        color={theme.colors.white}
      />
    </TouchableOpacity>
  );
};

export default GoBack;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: s(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
