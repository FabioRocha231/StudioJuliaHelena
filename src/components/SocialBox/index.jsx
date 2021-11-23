import React from 'react';

import { Text, View } from 'react-native';
import { FotoSocial } from '../FotoSocial';

import { styles } from './styles';

const SocialBox = ({ route }) => {
  return (
    <View style={styles.imageWrapper}>
      <FotoSocial source={`${route.params.user.picture.data.url}`} />
      <Text style={styles.text}>Seja Bem-Vinda(o)</Text>
      <Text style={styles.text}>{route.params.user.name}</Text>
    </View>
  );
};

export { SocialBox };
