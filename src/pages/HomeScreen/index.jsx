import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, View } from 'react-native';

import { BoxWrapper } from '../../components/BoxWrapper';
import { styles } from './styles';
import { FotoCollab } from '../../components/FotoCollab';
import { Title } from '../../components/Title';
import { Schedules } from '../../components/Schedules';

function HomeScreen() {
  return (
    <LinearGradient colors={['#F2526E', '#F17A97']}>
      <View>
        <ScrollView style={styles.container}>
          <BoxWrapper>
            <FotoCollab source={require('../../assets/julia.jpg')} />
            <Title
              name="Julia Rocha"
              onPress={'https://www.instagram.com/studiojuliahelena/'}
            />
            <Schedules />
          </BoxWrapper>

          <BoxWrapper>
            <FotoCollab source={require('../../assets/thati.jpg')} />
            <Title
              name="thati.nails_braids"
              onPress={'https://www.instagram.com/thati.nails_braids/'}
            />
            <Schedules />
          </BoxWrapper>

          <BoxWrapper>
            <FotoCollab source={require('../../assets/thati.jpg')} />
            <Title
              name="Kelly"
              onPress={'https://www.instagram.com/thati.nails_braids/'}
            />
            <Schedules />
          </BoxWrapper>
          <View style={{ marginTop: 120 }} />
        </ScrollView>
      </View>
    </LinearGradient>
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
