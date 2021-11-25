import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { View } from 'react-native';

import { styles } from './styles';
import { ButtonGoHome } from '../../components/ButtonGoHome';
import { SocialBox } from '../../components/SocialBox';
import { ClientSchedules } from '../../components/ClientSchedules';

const UserScreen = ({ route }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SocialBox route={route} />
      <ClientSchedules />
      <ButtonGoHome
        title="Pagina Inicial"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export { UserScreen };
