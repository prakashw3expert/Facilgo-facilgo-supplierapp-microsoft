import React from 'react';
import {Text, View} from 'react-native';
import Button from '@components/button';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button title={'Login'} onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default Home;
