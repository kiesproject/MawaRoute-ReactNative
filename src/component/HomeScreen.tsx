import React from 'react';
import { TabNavigator, TabBarBottom, NavigationContainer } from 'react-navigation';

import ListScreen from './Tabs/ListScreen';
import MapScreen from './Tabs/MapScreen';
import RouletteScreen from './Tabs/RouletteScreen';
import ScreenPropsProperties from '../model/ScreenProps';

const Tab: NavigationContainer = TabNavigator({
  List: {
    screen: ListScreen,
  },
  Map: {
    screen: MapScreen,
  },
  Roulette: {
    screen: RouletteScreen,
  },
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
    swipeEnabled: false,
  });

interface HomeScreenProperties {
  screenProps: ScreenPropsProperties,
}

class HomeScreen extends React.Component<HomeScreenProperties, any> {
  render() {
    const {
      restaurant, location, refresh, pullToRefresh, goDetail, check,
    } = this.props.screenProps;
    return (
      <Tab
        screenProps={{
          location,
          restaurant,
          refresh,
          pullToRefresh,
          goDetail,
          check,
        }}
      />
    );
  }
}

export default HomeScreen;
