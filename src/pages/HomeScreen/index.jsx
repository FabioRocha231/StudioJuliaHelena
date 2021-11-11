import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import { BoxWrapper } from '../../components/BoxWrapper';
import { Menu } from '../../components/Menu';
import { styles } from './styles';

function HomeScreen() {
  return (
    <View>
      <ScrollView style={styles.container}>
        <BoxWrapper
          name="Julia Helena"
          image={require('../../assets/julia.jpg')}
        />
        <BoxWrapper
          name="Thati NailsBraids"
          image={require('../../assets/thati.jpg')}
        />
        <BoxWrapper name="kelly" image={require('../../assets/thati.jpg')} />
      </ScrollView>
      <Menu />
    </View>
  );
}

export { HomeScreen };
