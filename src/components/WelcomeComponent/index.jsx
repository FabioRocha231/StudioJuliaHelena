import React from 'react';

import { View, Text, Image } from 'react-native';

import { styles } from './styles';

const WelcomeComponent = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={require('../../assets/loginIcon.png')}
      />
      <Text style={styles.text}>Seja Bem Vindo!</Text>
    </View>
  );
};

export { WelcomeComponent };
