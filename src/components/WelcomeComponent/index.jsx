import React from 'react';

import { View, Text, Image } from 'react-native';

import { styles } from './styles';

const WelcomeComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Studio Julia Helena</Text>
      <Text style={styles.text}>Seja Bem Vinda(o)!</Text>
    </View>
  );
};

export { WelcomeComponent };
