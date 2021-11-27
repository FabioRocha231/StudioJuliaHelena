import React from 'react';

import { Text, View } from 'react-native';
import { FotoSocial } from '../FotoSocial';

import { styles } from './styles';

const SocialBox = ({ route }) => {
  return (
    <View style={styles.imageWrapper}>
      <View style={styles.currentHeight}>
        <FotoSocial source={`${route.params.user.userPhoto}`} />
        <Text style={styles.text}>{route.params.user.username}</Text>
      </View>
    </View>
  );
};

export { SocialBox };
