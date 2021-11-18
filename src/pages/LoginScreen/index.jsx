import React, { Component, useState } from 'react';
import { Text, View, Button, Image } from 'react-native';
import * as Facebook from 'expo-facebook';
import { FacebookID, AppName } from '../../../configs';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { LoginButton } from '../../components/LoginButton';
/*import InstagramLogin from 'react-native-instagram-login';
import { LoginButton } from '../../components/LoginButton';
import { RedirectButton } from '../../components/RedirectButton';
*/

const LoginScreen = () => {
  const [user, setUser] = useState(null);

  const { appid, appName } = {
    appId: FacebookID,
    appName: AppName,
  };

  const navigation = useNavigation();

  const signUpFacebook = async () => {
    try {
      await Facebook.initializeAsync({ appid, appName });
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile', 'email'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?fields=id,name,picture.type(large),email&access_token=${token}`,
        );
        // console.log((await response.json()).name);
        const data = await response.json();
        setUser(data);
        navigation.navigate('Home', { user: user });
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  return (
    <LinearGradient style={styles.container} colors={['#F2526E', '#F17A97']}>
      <View style={styles.wrapper}>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>Bem vinda(o) ao Studio julia Helena</Text>
          <Text style={styles.text}>Faça login para continuar</Text>
        </View>
        <View>
          <LoginButton onPress={signUpFacebook} />
        </View>
      </View>
    </LinearGradient>
  );
};

/*class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
    };
  }

  setIgToken = (data) => {
    console.log('data', data);
    this.setState({ token: data.access_token });
  };

  onClear() {
    this.setState({ token: null });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <LoginButton onPress={() => this.instagramLogin.show()} />

        <RedirectButton token={this.state.token} />

        <Text style={{ margin: 10 }}>Token: {this.state.token}</Text>
        {this.state.failure && (
          <View>
            <Text style={{ margin: 10 }}>
              failure: {JSON.stringify(this.state.failure)}
            </Text>
          </View>
        )}
        <InstagramLogin
          ref={(ref) => (this.instagramLogin = ref)}
          appId={AppId}
          appSecret={AppSecret}
          redirectUrl="https://www.google.com/"
          scopes={['user_profile', 'user_media']}
          onLoginSuccess={this.setIgToken}
          onLoginFailure={(data) => console.log(data)}
          language
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 5,
    backgroundColor: 'orange',
    height: 30,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});*/

export { LoginScreen };
