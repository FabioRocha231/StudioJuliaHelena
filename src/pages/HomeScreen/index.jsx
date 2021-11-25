import React from 'react';
import { View } from 'react-native';

import { HeaderComponent } from '../../components/HeaderComponent';

import { styles } from './styles';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <HeaderComponent title={'Bem vinda(o)'} heigth={{ height: 100 }} />
    </View>
  );
}

export { HomeScreen };

{
  /*<FotoCollab source={image} />
<Title name={name} onPress={onPress} />
<Schedules />*/
}

/*name="kelly"
image={require('../../assets/thati.jpg')}
onPress={`https://www.instagram.com/studiojuliahelena/`}*/
