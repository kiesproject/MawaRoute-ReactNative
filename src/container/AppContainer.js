import React from 'react';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import HomeScreen from '../component/HomeScreen';
import DetailScreen from '../component/DetailScreen';
import { updateList } from '../actions/index';

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
  constructor(props) {
    super(props);
    this.pullToRefresh = this.pullToRefresh.bind(this);
  }

  pullToRefresh() {
    const { dispatch } = this.props;
    dispatch(updateList());
  }

  render() {
    const {
      dispatch, nav, addListener, location, restaurant, refresh,
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
          refresh,
          pullToRefresh: this.pullToRefresh,
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
    refresh: state.refresh,
  });
}

export default connect(mapStateToProps)(AppWithNavigationState);
