import React from 'react';

import { View, Text } from 'react-native';
import { HeaderSchedules } from '../../components/HeaderSchedules';

import { styles } from './styles';

const SchedulesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderSchedules />
    </View>
  );
};

export { SchedulesScreen };
