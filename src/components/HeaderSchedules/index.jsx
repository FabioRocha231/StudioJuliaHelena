import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { GobackIcon } from '../GobackIcon';

const HeaderSchedules = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.titleText}>Horarios</Text>
        </View>
      </View>
    </View>
  );
};

export { HeaderSchedules };
