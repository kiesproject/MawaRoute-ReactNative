import React, { Component } from 'react';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';

import HomeScreen from '../component/HomeScreen';
import DetailScreen from '../component/DetailScreen';

export const AppNavigator = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'まわルート'
      }
    },
    Detail: {
      screen: DetailScreen,
      navigationOptions: {
        title: '詳細'
      }
    }
  }, {
    initialRouteName: 'Detail',
  }
);

class AppWithNavigationState extends Component {
  render() {
    const { dispatch, nav, addListener } = this.props;
    return (
      <AppNavigator
        navigation={
          addNavigationHelpers({
            dispatch,
            state: nav,
            addListener,
          })
        }
      />
    );
  }
}

function mapStateToProps(state) {
  return ({
    nav: state.nav,
  })
}

export default connect(mapStateToProps)(AppWithNavigationState);