import React from 'react';

import { Image, Text, View } from 'react-native';

import { styles } from './styles';

const FotoSocial = ({ source }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: source }} />
    </View>
  );
};

export { FotoSocial };
