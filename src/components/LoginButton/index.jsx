import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

const LoginButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <View style={styles.iconWrapper}>
        <Icon name="logo-facebook" size={24} color="#ffffff" />
        <Text style={{ color: 'white', textAlign: 'center', marginLeft: 40 }}>
          Login now
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export { LoginButton };
