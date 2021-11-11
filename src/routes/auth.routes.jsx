import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../pages/HomeScreen';
import { SchedulesScreen } from '../pages/SchedulesScreen';

const { Navigator, Screen } = createStackNavigator();

function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="SchedulesScreen" component={SchedulesScreen} />
    </Navigator>
  );
}
export { AuthRoutes };
