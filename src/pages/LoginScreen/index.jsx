import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { LoginWithFacebookAndGoogle } from '../../Provider/SignInFacebookAndGoogle';
import { WelcomeComponent } from '../../components/WelcomeComponent';

const LoginScreen = () => {
  return (
    <LinearGradient style={styles.container} colors={['#F2526E', '#F17A97']}>
      <WelcomeComponent />
      <View style={styles.wrapper}>
        <LoginWithFacebookAndGoogle />
      </View>
    </LinearGradient>
  );
};

export { LoginScreen };
