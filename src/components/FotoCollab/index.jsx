import React from 'react';

import { View, Text, Image } from 'react-native';

import { styles } from './styles';

function FotoCollab({ source }) {
  return (
    <View style={styles.imageContain}>
      <Image source={source} style={styles.image} />
    </View>
  );
}

export { FotoCollab };
