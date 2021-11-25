import React from 'react';

import { ScrollView, View } from 'react-native';
import { BoxWrapper } from '../BoxWrapper';
import { FotoCollab } from '../FotoCollab';
import { Title } from '../Title';
import { Schedules } from '../Schedules';

import { styles } from './styles';
const BoxComponent = () => {
  return (
    <View styrle={styles.container}>
      <ScrollView style={styles.scrollStyle}>
        <View style={{ marginTop: 50 }} />
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
  );
};

export { BoxComponent };
