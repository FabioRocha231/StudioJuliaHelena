import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { HomeScreen } from '../pages/HomeScreen';
import { SchedulesScreen } from '../pages/SchedulesScreen';

const { Navigator, Screen } = createMaterialBottomTabNavigator();

function AuthRoutes() {
  return (
    <Navigator
      initialRouteName="HomeScreen"
      shifting={true}
      activeColor="#F2526E"
      barStyle={{
        position: 'absolute',
        justifyContent: 'center',
        bottom: 15,
        left: 20,
        right: 20,
        elevation: 2,
        borderRadius: 15,
        height: 90,
      }}
    >
      <Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',

          tabBarColor: 'white',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color="#F2526E" size={26} />
          ),
        }}
      />
      <Screen
        name="SchedulesScreen"
        component={SchedulesScreen}
        options={{
          tabBarLabel: 'Horarios',

          tabBarColor: 'white',
          tabBarIcon: ({ color }) => (
            <Icon name="calendar-sharp" color="#F2526E" size={26} />
          ),
        }}
      />
    </Navigator>
  );
}
export { AuthRoutes };
