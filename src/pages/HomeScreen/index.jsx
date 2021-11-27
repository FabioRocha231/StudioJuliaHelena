import React from 'react';
import { Text, ScrollView, View } from 'react-native';
import { FotoCollab } from '../../components/FotoCollab';
import { Box } from '../../components/Box';
import { HairFlatList } from '../../components/HairFlatList';

import { HeaderComponent } from '../../components/HeaderComponent';

import { styles } from './styles';
import { NailsFlatList } from '../../components/NailsFlatList';

function HomeScreen() {
  return (
    <View>
      <HeaderComponent
        title={'Bem vinda(o)'}
        style={{ height: 100 }}
        textStyle={{ marginTop: 20 }}
      />

      <ScrollView style={styles.container}>
        <Box style={styles.boxJulia}>
          <FotoCollab source={require('../../assets/julia.jpg')} />
          <Text style={{ textAlign: 'center', marginTop: 50 }}>
            Este e um pouco do trabalho da Julia Helena
          </Text>
          <HairFlatList />
        </Box>

        <Box style={styles.boxThati}>
          <FotoCollab source={require('../../assets/thati.jpg')} />
          <Text
            style={{ textAlign: 'center', marginTop: 50, color: '#D9A296' }}
          >
            Este e um pouco do trabalho da ThatiNailsBraids
          </Text>
          <NailsFlatList />
        </Box>

        <Box style={styles.boxKelly}>
          <FotoCollab source={require('../../assets/thati.jpg')} />
          <Text
            style={{ textAlign: 'center', marginTop: 50, color: '#ffffff' }}
          >
            Este e um pouco do trabalho da Kelly
          </Text>
          <NailsFlatList />
        </Box>
        <View style={{ marginTop: 120 }} />
      </ScrollView>
    </View>
  );
}

export { HomeScreen };
