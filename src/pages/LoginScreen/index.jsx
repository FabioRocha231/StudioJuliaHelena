import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { LoginWithFacebook } from '../../Provider/SignInFacebook';
import { WelcomeComponent } from '../../components/WelcomeComponent';

const LoginScreen = () => {
  return (
    <LinearGradient style={styles.container} colors={['#F2526E', '#F17A97']}>
      <WelcomeComponent />
      <View style={styles.wrapper}>
        <LoginWithFacebook />
      </View>
    </LinearGradient>
  );
};

export { LoginScreen };
