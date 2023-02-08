import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {s, vs, ms} from '@utils/sizeMatter';
import theme from '@theme';

const RadioButton = ({data, environment, setEnvironment}) => {
  return (
    <View>
      {data?.map((item, index) => {
        return (
          <View key={index} style={styles.mainContainer}>
            <TouchableOpacity
              style={styles.container}
              onPress={() => setEnvironment(item.name)}>
              <View style={styles.radioButtonSubContainer}>
                <View style={styles.radioButtonContainer}>
                  <View
                    style={environment === item.name ? styles.radioButton : {}}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <Text
              onPress={() => setEnvironment(item.name)}
              style={styles.itemStyle}>
              {item.name}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    marginTop: vs(10),
    marginBottom: vs(10),
    marginLeft: s(30),
    alignItems: 'center',
  },
  radioButtonContainer: {
    backgroundColor: theme.colors.white,
    borderRadius: ms(100),
    width: ms(24),
    height: ms(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButton: {
    backgroundColor: theme.colors.selectedRadio,
    width: ms(20),
    height: ms(20),
    borderRadius: ms(100),
    alignSelf: 'center',
  },
  radioButtonSubContainer: {
    borderWidth: s(1),
    borderColor: theme.colors.labelText,
    borderRadius: ms(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemStyle: {
    paddingLeft: s(20),
  },
});
