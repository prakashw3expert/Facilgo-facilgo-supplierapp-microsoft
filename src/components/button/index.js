import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {s, vs, ms} from '@utils/sizeMatter';
import theme from '@theme';

const Button = ({title, onPress, varient, extraStyle}) => {
  let newStyle = {};
  let textStyle = {};
  switch (varient) {
    case 'plain':
      newStyle = {
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: vs(8),
        marginBottom: vs(20),
      };
      textStyle = {
        color: theme.colors.blue,
        textAlign: 'right',
        paddingHorizontal: 0,
        paddingVertical: 0,
      };
      break;
    case 'primary':
      newStyle = {
        backgroundColor: theme.colors.blue,
        textAlign: 'center',
      };
      textStyle = {
        color: theme.colors.white,
      };
      break;
    case 'invisible':
      newStyle = {
        width: s(150),
        alignSelf: 'flex-end',
      };
      break;
    default:
      newStyle = {
        color: theme.colors.blue,
        width: s(400),
        alignSelf: 'flex-end',
      };
      break;
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonStyle, newStyle, extraStyle]}>
      <Text style={[styles.title, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ms(2),
  },
  title: {
    paddingHorizontal: s(60),
    paddingVertical: vs(10),
  },
});
