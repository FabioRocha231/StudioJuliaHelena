import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import { styles } from './styles';

const GobackIcon = () => {
  const navigation = useNavigation();
  return (
    <RectButton style={styles.wrapper} onPress={() => navigation.goBack()}>
      <View>
        <Icon name="arrowleft" size={18} color="#F2F0F2" />
      </View>
    </RectButton>
  );
};

export { GobackIcon };
