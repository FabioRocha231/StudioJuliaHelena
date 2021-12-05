import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { SchedulesIcon } from '../SchedulesIcon';

function Menu() {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <View>
          <SchedulesIcon />
        </View>
      </View>
    </View>
  );
}

export { Menu };
