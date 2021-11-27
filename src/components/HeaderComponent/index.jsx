import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

const HeaderComponent = ({ title, style, textStyle }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.wrapper}>
        <View>
          <Text style={[styles.titleText, textStyle]}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

export { HeaderComponent };
