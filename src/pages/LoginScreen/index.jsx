import React, { useState } from 'react';
import { Text, View, ImageBackground } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { SignInWithFacebook } from '../../Provider/SignInFacebook';
import { WelcomeComponent } from '../../components/WelcomeComponent';
import { SignInWithGoogle } from '../../Provider/SignInGoogle';

const LoginScreen = () => {
  return (
    <ImageBackground style={styles.container} source={require('../../assets/hair.jpg')} >
      <WelcomeComponent />
      <View style={styles.wrapper}>
        <SignInWithFacebook />
        <SignInWithGoogle />
      </View>
    </ImageBackground>
  );
};

export { LoginScreen };
