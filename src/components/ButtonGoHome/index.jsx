import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

const ButtonGoHome = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export { ButtonGoHome };
