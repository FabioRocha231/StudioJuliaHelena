import React from 'react';
import { Text, ScrollView, View } from 'react-native';
import { FotoCollab } from '../../components/FotoCollab';
import { Box } from '../../components/Box';
import { HairFlatList } from '../../components/HairFlatList';
import { Title } from '../../components/Title';
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
          <Title
            name="Julia Rocha"
            onPress={'https://www.instagram.com/studiojuliahelena/'}
            borderColor="#000000"
          />
          
          <HairFlatList />
        </Box>

        <Box style={styles.boxThati}>
          <FotoCollab source={require('../../assets/thati.jpg')} />
          <Title
            name="thati.nails_braids"
            onPress={'https://www.instagram.com/thati.nails_braids/'}
            borderColor="#A62D2D"
          />
          
          <NailsFlatList />
        </Box>
        <View style={{ marginTop: 120 }} />
      </ScrollView>
    </View>
  );
}

export { HomeScreen };
