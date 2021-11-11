import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import { Box } from '../Box';

import { styles } from './styles';

function BoxWrapper({ name, image }) {
  return (
    <View style={styles.container}>
      <Box name={name} image={image} />
    </View>
  );
}

export { BoxWrapper };