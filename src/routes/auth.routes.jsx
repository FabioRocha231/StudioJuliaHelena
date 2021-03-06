import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import { HomeScreen } from '../pages/HomeScreen';
import { SchedulesScreen } from '../pages/SchedulesScreen';
import { LoginScreen } from '../pages/LoginScreen';
import { UserScreen } from '../pages/UserScreen';

const { Navigator, Screen } = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs({ route }) {
  return (
    <Navigator
      initialRouteName="UserScreen"
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
        marginTop: 30,
      }}
    >
      <Screen 
        name="UserScreen" 
        component={UserScreen}
        options={{
          tabBarLabel: 'Usuario',
          tabBarColor: 'white',
          tabBarIcon: () => <Icon name="person" color="#F2526E" size={26} />,
        }}
        initialParams={route.params}
      />
      <Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: 'white',
          tabBarIcon: () => <Icon name="ios-home" color="#F2526E" size={26} />,
        }}
      />
      <Screen
        name="SchedulesScreen"
        component={SchedulesScreen}
        options={{
          tabBarLabel: 'Horarios',
          tabBarColor: 'white',
          tabBarIcon: () => (
            <Icon name="calendar-sharp" color="#F2526E" size={26} />
          ),
        }}
        initialParams={route.params}
      />
    </Navigator>
  );
}

const AuthRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="AuthScreen" component={Tabs} />
    </Stack.Navigator>
  );
};
export { AuthRoutes };
