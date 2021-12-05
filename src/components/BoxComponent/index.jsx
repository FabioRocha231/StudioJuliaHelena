import React from 'react';

import { ScrollView, View } from 'react-native';
import { BoxWrapper } from '../BoxWrapper';
import { FotoCollab } from '../FotoCollab';
import { Schedules } from '../Schedules';

import { styles } from './styles';
const BoxComponent = ({ userParams }) => {
  return (
    <View styrle={styles.container}>
      <ScrollView style={styles.scrollStyle}>
        <View style={{ marginTop: 50 }} />
        <BoxWrapper>
          <FotoCollab source={require('../../assets/julia.jpg')} />
          <Schedules userParams={userParams} />
        </BoxWrapper>

        <BoxWrapper>
          <FotoCollab source={require('../../assets/thati.jpg')} />
          <Schedules userParams={userParams} />
        </BoxWrapper>

        <BoxWrapper>
          <FotoCollab source={require('../../assets/thati.jpg')} />
          <Schedules userParams={userParams} />
        </BoxWrapper>
        <View style={{ marginTop: 120 }} />
      </ScrollView>
    </View>
  );
};

export { BoxComponent };
