import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from '../component/HomeScreen';

export const AppNavigator = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'まわルート'
      }
    },
  }, {
    initialRouteName: 'Home',
  }
);

class AppWithNavigationState extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

export default AppWithNavigationState;