import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {RadioButton} from '@components';
import {vs} from '@utils/sizeMatter';

const Environment = () => {
  const [environment, setEnvironment] = useState('Production');
  const data = [
    {
      name: 'Staging',
    },
    {
      name: 'Training',
    },
    {
      name: 'Production',
    },
    {
      name: 'Preview',
    },
    {
      name: 'Exp',
    },
  ];

  return (
    <View styles={styles.container}>
      <RadioButton
        data={data}
        setEnvironment={setEnvironment}
        environment={environment}
      />
    </View>
  );
};

export default Environment;

const styles = StyleSheet.create({
  container: {
    marginTop: vs(20),
  },
});
