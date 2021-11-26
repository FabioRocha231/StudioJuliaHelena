import React, { useEffect } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { googleIdClient } from '../../configs';
import { useNavigation } from '@react-navigation/native';

//import { ResponseType } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';

import { firebaseConfig } from '../configs/firebaseConfig';
import { LoginButtonGoogle } from '../components/LoginButtonGoogle';
import { getTheAcessTokenFromGoogleFirebase } from '../controllers/googleLoginController';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const LoginAndAuthenticateInFirebaseWithGoogle = () => {
  const navigation = useNavigation();
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: googleIdClient,
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const provider = getTheAcessTokenFromGoogleFirebase();
      const credential = provider.credential(id_token);
      firebase
        .auth()
        .signInWithCredential(credential)
        .then((userid) => {
          const { user } = userid;
          const userSettings = {
            username: user.displayName,
            userPhoto: user.photoURL,
          };
          navigation.navigate('UserScreen', {
            user: userSettings,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [response]);

  return (
    <View>
      <LoginButtonGoogle onPress={() => promptAsync()} />
    </View>
  );
};

export { LoginAndAuthenticateInFirebaseWithGoogle };
