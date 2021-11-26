import React, { useState } from 'react';
import { View } from 'react-native';
import * as Facebook from 'expo-facebook';
import { FacebookID } from '../../configs';
import { useNavigation } from '@react-navigation/native';

import { LoginButtonFacebook } from '../components/LoginButtonFacebook';
import { signInWithFacebookFunction } from '../controllers/facebookLoginController';
import { LoginAndAuthenticateInFirebaseWithGoogle } from './SignInGoogle';

const LoginWithFacebook = () => {
  const navigation = useNavigation();
  const signInFacebook = async () => {
    try {
      await Facebook.initializeAsync(FacebookID);
      const { token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile', 'email'],
      });
      const { user } = await signInWithFacebookFunction(token);
      const userSettings = {
        username: user.displayName,
        userPhoto: user.photoURL,
      };
      navigation.navigate('UserScreen', {
        user: userSettings,
      });
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };
  return (
    <View>
      <LoginButtonFacebook onPress={signInFacebook} />
      <LoginAndAuthenticateInFirebaseWithGoogle />
    </View>
  );
};

export { LoginWithFacebook };
