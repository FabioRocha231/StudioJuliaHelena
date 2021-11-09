import React from 'react';

import { View } from 'react-native';
import { Title } from '../Title';

import { styles } from './styles';
import { FotoCollab } from '../FotoCollab';

function Box({ name, image }) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <FotoCollab source={image} />
        <Title name={name} />
      </View>
    </View>
  );
}

export { Box };
