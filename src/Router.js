import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen } from './pages/HomeScreen';

const appNavigator = createStackNavigator({
  Main: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Bem-Vinda(o)',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        color: 'white',
      },
      headerStyle: {
        backgroundColor: '#DA5386',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      },
    },
  },
});

const AppContainer = createAppContainer(appNavigator);

export default AppContainer;
