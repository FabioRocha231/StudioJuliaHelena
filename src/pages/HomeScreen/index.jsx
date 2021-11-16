import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, View } from 'react-native';

import { BoxWrapper } from '../../components/BoxWrapper';
import { Menu } from '../../components/Menu';
import { styles } from './styles';

function HomeScreen() {
  return (
    <LinearGradient colors={['#F2526E', '#F17A97']}>
      <View>
        <ScrollView style={styles.container}>
          <BoxWrapper
            name="Julia Helena"
            image={require('../../assets/julia.jpg')}
            onPress={'https://www.instagram.com/studiojuliahelena/'}
          />
          <BoxWrapper
            name="Thati NailsBraids"
            image={require('../../assets/thati.jpg')}
            onPress={`https://www.instagram.com/thati.nails_braids/`}
          />
          <BoxWrapper
            name="kelly"
            image={require('../../assets/thati.jpg')}
            onPress={`https://www.instagram.com/studiojuliahelena/`}
          />
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

export { HomeScreen };
