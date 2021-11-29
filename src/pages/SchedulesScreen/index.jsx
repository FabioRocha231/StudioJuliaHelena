import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { HeaderComponent } from '../../components/HeaderComponent';
import { BoxComponent } from '../../components/BoxComponent';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';

const SchedulesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#F7D2EE', '#F586DB']}>
        <HeaderComponent title={'Horarios'} />
        <BoxComponent />
      </LinearGradient>
    </View>
  );
};

export { SchedulesScreen };
