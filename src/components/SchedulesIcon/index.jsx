import React from 'react';
import { View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

Icon.loadFont();

import { styles } from './styles';

function SchedulesIcon() {
  const navigation = useNavigation();

  return (
    <RectButton
      style={styles.icon}
      onPress={() => navigation.navigate('SchedulesScreen')}
    >
      <View>
        <Icon name="book" size={18} color="#F2F0F2" />
      </View>
    </RectButton>
  );
}

export { SchedulesIcon };
