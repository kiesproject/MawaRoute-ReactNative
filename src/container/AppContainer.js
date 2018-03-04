import React from 'react';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import HomeScreen from '../component/HomeScreen';
import DetailScreen from '../component/DetailScreen';

export const AppNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'まわルート',
    },
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: {
      title: '詳細',
    },
  },
});

class AppWithNavigationState extends React.Component {
  render() {
    const {
      dispatch, nav, addListener, location, restaurant,
    } = this.props;
    return (
      <AppNavigator
        navigation={
          addNavigationHelpers({
            dispatch,
            state: nav,
            addListener,
          })
        }
        screenProps={{
          location,
          restaurant,
        }}
      />
    );
  }
}

function mapStateToProps(state) {
  return ({
    nav: state.nav,
    location: state.location,
    restaurant: state.restaurant,
  });
}

export default connect(mapStateToProps)(AppWithNavigationState);
