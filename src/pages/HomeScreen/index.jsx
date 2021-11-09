import React from 'react';
import { ScrollView, Text } from 'react-native';

import { Collabs } from '../../components/Collabs';
import { styles } from './styles';

function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Collabs name="Julia Helena" image={require('../../assets/julia.jpg')} />
      <Collabs
        name="Thati NailsBraids"
        image={require('../../assets/thati.jpg')}
      />
      <Collabs name="kelly" image={require('../../assets/thati.jpg')} />
    </ScrollView>
  );
}

export { HomeScreen };
