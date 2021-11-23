import React from 'react';

import { Text, View } from 'react-native';

import { styles } from './styles';

const ClientSchedules = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Meus Horarios esta semana</Text>
    </View>
  );
};

export { ClientSchedules };
