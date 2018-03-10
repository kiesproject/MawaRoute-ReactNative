import React from 'react';
import { BackHandler } from 'react-native';
import { StackNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import HomeScreen from '../component/HomeScreen';
import DetailScreen from '../component/DetailScreen';
import { updateList, goDetail } from '../actions/index';

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
    this.goDetail = this.goDetail.bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };
  pullToRefresh() {
    const { dispatch } = this.props;
    dispatch(updateList());
  }

  goDetail(rest) {
    console.log('goDetail');
    const { dispatch } = this.props;
    dispatch(goDetail(rest));
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
          goDetail: this.goDetail,
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
