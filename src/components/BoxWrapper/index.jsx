import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import { Box } from '../Box';

import { styles } from './styles';

function BoxWrapper({ children }) {
  return (
    <View style={styles.container}>
      <Box>{children}</Box>
    </View>
  );
}

export { BoxWrapper };
