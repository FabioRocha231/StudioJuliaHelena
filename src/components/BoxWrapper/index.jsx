import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import { Box } from '../Box';

import { styles } from './styles';

function BoxWrapper({ name, image, onPress }) {
  return (
    <View style={styles.container}>
      <Box name={name} image={image} onPress={onPress} />
    </View>
  );
}

export { BoxWrapper };
