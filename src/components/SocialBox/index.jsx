import React from 'react';

import { Text, View } from 'react-native';
import { FotoSocial } from '../FotoSocial';

import { styles } from './styles';

const SocialBox = ({ route }) => {
  return (
    <View style={styles.imageWrapper}>
      <FotoSocial source={`${route.params.user.userPhoto}`} />
      <Text style={styles.text}>{route.params.user.username}</Text>
    </View>
  );
};

export { SocialBox };
