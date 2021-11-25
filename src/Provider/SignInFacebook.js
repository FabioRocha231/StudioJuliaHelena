import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import * as Facebook from 'expo-facebook';
import { FacebookID } from '../../configs';
import { useNavigation } from '@react-navigation/native';

import { firebaseConfig } from '../configs/firebaseConfig';
import { LoginButtonGoogle } from '../components/LoginButtonGoogle';
import { LoginButtonFacebook } from '../components/LoginButtonFacebook';
import { signInWithFacebookFunction } from '../controllers/facebookLoginController';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const LoginWithFacebook = () => {
  //const [user, setUser] = useState({});

  const navigation = useNavigation();
  const signInFacebook = async () => {
    try {
      await Facebook.initializeAsync({ FacebookID });
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
      <LoginButtonGoogle />
    </View>
  );
};

export { LoginWithFacebook };
