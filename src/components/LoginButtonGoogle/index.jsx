import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

const LoginButtonGoogle = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <View style={styles.iconWrapper}>
        <Icon name="logo-google" size={24} color="#ffffff" />
        <View style={styles.textWrapper}>
          <Text style={styles.buttonText}>Entrar Com Google</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export { LoginButtonGoogle };
