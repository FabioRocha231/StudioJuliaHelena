import React from 'react';

import { View, Text } from 'react-native';
import { Title } from '../Title';

import { styles } from './styles';
import { FotoCollab } from '../FotoCollab';
import { Schedules } from '../Schedules';

function Box({ name, image }) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <FotoCollab source={image} />
        <Title name={name} />
        <Schedules />
      </View>
    </View>
  );
}

export { Box };
