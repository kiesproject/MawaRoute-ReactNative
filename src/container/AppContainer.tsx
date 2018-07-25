import React from 'react';
import { BackHandler } from 'react-native';
import { StackNavigator,  NavigationActions } from 'react-navigation';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';

import HomeScreen from '../component/HomeScreen';
import DetailScreen from '../component/DetailScreen';
import { updateList, goDetail, check } from '../actions';
import Location from '../model/Location';
import Restaurant from '../model/Restaurant';

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

interface AppContainerProperties {
  dispatch: any,
  nav: any,
  location: Location,
  restaurant: Restaurant,
  refresh: boolean,
}

const App = reduxifyNavigator(AppNavigator, 'root'); 

class AppWithNavigationState extends React.Component<AppContainerProperties, any> {
  constructor(props: AppContainerProperties) {
    super(props);
    this.pullToRefresh = this.pullToRefresh.bind(this);
    this.goDetail = this.goDetail.bind(this);
    this.check = this.check.bind(this);
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

  goDetail(rest: Restaurant) {
    const { dispatch } = this.props;
    dispatch(goDetail(rest));
  }

  check(isChecked: boolean, index: number) {
    const { dispatch } = this.props;
    dispatch(check(isChecked, index));
  }

  render() {
    const {
      dispatch, nav, location, restaurant, refresh,
    } = this.props;
    return (
      <AppNavigator
        screenProps={{
          location,
          restaurant,
          refresh,
          pullToRefresh: this.pullToRefresh,
          goDetail: this.goDetail,
          check: this.check,
        }}
      />
    );
  }
}

function mapStateToProps(state: any) {
  return ({
    nav: state.nav,
    location: state.location,
    restaurant: state.restaurant,
    refresh: state.refresh,
  });
}

export default connect(mapStateToProps)(AppWithNavigationState);
