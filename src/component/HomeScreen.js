import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import ListScreen from './Tabs/ListScreen';
import MapScreen from './Tabs/MapScreen';
import RouletteScreen from './Tabs/RouletteScreen';

const Tab = TabNavigator(
  {
    List: {
      screen: ListScreen,
    },
    Map: {
      screen: MapScreen,
    },
    Roulette: {
      screen: RouletteScreen,
    }
  }, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        // TODO: decide color
        backgroundColor: '#a52a2a',
      },
      activeTintColor: '#98fb98',
      inactiveTintColor: '#737373',
      showLabel: true,
      showIcon: true,
    },
  }
)

class HomeScreen extends Component {
  render() {
    return (
      <Tab />
    );
  }
}

export default HomeScreen;