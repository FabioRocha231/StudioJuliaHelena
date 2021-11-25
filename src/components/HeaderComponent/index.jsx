import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

const HeaderComponent = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

export { HeaderComponent };
