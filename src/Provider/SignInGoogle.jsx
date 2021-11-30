import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { ActivityIndicator, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Google from 'expo-auth-session/providers/google';

import { googleIdClient } from '../../configs';
import { firebaseConfig } from '../configs/firebaseConfig';
import { LoginButtonGoogle } from '../components/LoginButtonGoogle';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const SignInWithGoogle = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: googleIdClient,
  });

  useEffect(() => {
    if (response?.type === 'success') {
      setLoading(true);
      const { id_token } = response.params;
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = provider.credential(id_token);
      firebase
        .auth()
        .signInWithCredential(credential)
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
    }
  }, [response]);

  return (
    <>
      {loading ? (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator
            style={{ justifyContent: 'center', alignItems: 'center' }}
            size="large"
            color="#0000ff"
          />
        </View>
      ) : (
        <View>
          <LoginButtonGoogle onPress={() => promptAsync()} />
        </View>
      )}
    </>
  );
};

export { SignInWithGoogle };
