import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import * as Facebook from 'expo-facebook';
import { FacebookID } from '../../configs';
import { useNavigation } from '@react-navigation/native';

import { LoginButtonFacebook } from '../components/LoginButtonFacebook';
import { signInWithFacebookFunction } from '../controllers/facebookLoginController';
import { LoginAndAuthenticateInFirebaseWithGoogle } from './SignInGoogleAlgoritm';

const LoginWithFacebookAndGoogle = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const signInFacebook = async () => {
    try {
      setLoading(true);
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
    setLoading(false);
  };
  return (
    <>
      {loading ? (
        <ActivityIndicator
          style={{ justifyContent: 'center', alignItems: 'center' }}
          size="large"
          color="#0000ff"
        />
      ) : (
        <View>
          <LoginButtonFacebook onPress={signInFacebook} />
          <LoginAndAuthenticateInFirebaseWithGoogle setLoading={setLoading} />
        </View>
      )}
    </>
  );
};

export { LoginWithFacebookAndGoogle };
