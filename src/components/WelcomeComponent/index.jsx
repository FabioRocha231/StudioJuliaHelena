import React from 'react';

import { View, Text } from 'react-native';

import { styles } from './styles';

const WelcomeComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Seja Bem Vindo!</Text>
      <Text style={styles.text}>
        Escolha a rede Social do seu interesse e faça login para continuar
      </Text>
    </View>
  );
};

export { WelcomeComponent };
