import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { HeaderComponent } from '../../components/HeaderComponent';
import { BoxComponent } from '../../components/BoxComponent';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';

const SchedulesScreen = ({ route }) => {
  const { params } = route.params.user;

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#F7D2EE', '#F586DB']}>
        <HeaderComponent title={'Horarios'} />
        <BoxComponent userParams={params} />
      </LinearGradient>
    </View>
  );
};

export { SchedulesScreen };
