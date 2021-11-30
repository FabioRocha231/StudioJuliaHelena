import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import * as Facebook from 'expo-facebook';
import { FacebookID, googleIdClient } from '../../configs';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';
import { LoginButtonFacebook } from '../components/LoginButtonFacebook';
import { firebaseConfig } from '../configs/firebaseConfig';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const SignInWithFacebook = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const signInFacebook = async () => {
    setLoading(true);
    await Facebook.initializeAsync(FacebookID);
    const { token } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile', 'email'],
    });
    const facebookCredential =
      firebase.auth.FacebookAuthProvider.credential(token);
    try {
      firebase
        .auth()
        .signInWithCredential(facebookCredential)
        .then((userid) => {
          const { user } = userid;
          const userSettings = {
            userUid: user.uid,
            username: user.displayName,
            userPhoto: user.photoURL,
            userEmail: user.email,
          };
          navigation.navigate('UserScreen', {
            user: userSettings,
          });
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
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
        </View>
      )}
    </>
  );
};

export { SignInWithFacebook };
