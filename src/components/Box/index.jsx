import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

function Box({ children, style }) {
  return <View style={[styles.box, style]}>{children}</View>;
}

export { Box };
