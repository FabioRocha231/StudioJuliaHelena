import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from './styles';

function Title({ name, onPress, borderColor }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.wrapper, {borderColor}]}
        onPress={() => Linking.openURL(`${onPress}`)}
      >
        <View style={styles.instagramIcon}>
          <Icon name="instagram" size={30} color="#ffffff" />
        </View>
        <View>
          <Text style={styles.text}>{name.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export { Title };
