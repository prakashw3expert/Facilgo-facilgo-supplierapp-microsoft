import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {Button, ImageComponent, InputText} from '@components';
import {vs} from '@utils/sizeMatter';
import styles from './Styles';

const {width, height} = Dimensions.get('window');

const ForgotPassword = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <ImageComponent
          canGoBack
          type="offline"
          resizeMode={'cover'}
          path={require('@assets/background.png')}
        />
      </View>
      <View style={styles.loginForm}>
        <Text style={styles.heading}>Forgot Password</Text>
        <Text style={styles.labelText}>Email Address</Text>
        <InputText placeholder="Email Address" />

        <Button
          varient={'primary'}
          title={'Submit'}
          extraStyle={[styles.button, styles.extraMargin('marginTop', vs(30))]}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default ForgotPassword;
