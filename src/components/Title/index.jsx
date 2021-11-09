import React from 'react';

import { View, Text } from 'react-native';

import { styles } from './styles';

function Title({ name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name.toUpperCase()}</Text>
    </View>
  );
}

export { Title };
