import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Button, ImageComponent, InputText} from '@components';
import {useNavigation} from '@react-navigation/native';
import theme from '@theme';
import styles from './Styles';

const Login = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

  const handleInvisibleButton = () => {
    navigation?.openDrawer();
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <ImageComponent
          type="offline"
          resizeMode={'cover'}
          path={require('@assets/background.png')}
        />
      </View>
      <ScrollView style={styles.loginForm}>
        <Text style={styles.heading}>Sign in</Text>
        <Text style={styles.labelText}>Email Address</Text>
        <InputText placeholder="Email Address" color={theme.colors.labelText} />
        <Text style={styles.labelText}>Password</Text>
        <InputText
          placeholder="Password"
          secureTextEntry={!showPassword}
          icon={true}
          setShowPassword={setShowPassword}
          showPassword={showPassword}
        />
        <Button
          varient={'plain'}
          title={'Forgot Password ?'}
          onPress={() => {
            navigation.closeDrawer();
            navigation.navigate('ForgotPassword');
          }}
        />
        <Button
          varient={'primary'}
          title={'Sign in'}
          extraStyle={styles.button}
          onPress={() => {}}
        />
        <Button varient={'invisible'} onPress={handleInvisibleButton} />
      </ScrollView>
    </View>
  );
};

export default Login;
