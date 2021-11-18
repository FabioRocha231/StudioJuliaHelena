import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

function Box({ children }) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>{children}</View>
    </View>
  );
}

export { Box };
