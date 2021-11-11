import React from 'react';

import { View, Text } from 'react-native';
import { ClientSchedules } from '../../components/ClientSchedules';

import { styles } from './styles';

const SchedulesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Esta e a tela de horarios do cliente</Text>
    </View>
  );
};

export { SchedulesScreen };
