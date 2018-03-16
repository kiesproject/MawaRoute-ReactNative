import { List } from 'immutable';
import { NavigationActions } from 'react-navigation';
import { combineReducers } from 'redux';

import { AppNavigator } from '../container/AppContainer';
import Location from '../model/Location';
import Restaurant from '../model/Restaurant';

const initialNavState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'));

function nav(state = initialNavState, action: any) {
  switch (action.type) {
    case 'GO_DETAIL': {
      return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'Detail',
          params: action.rest,
        }),
        state,
      );
    }
    default: {
      return AppNavigator.router.getStateForAction(action, state);
    }
  }
}

const initialLocationState: Location = {
  latitude: 0.0,
  longitude: 0.0,
};
function location(state = initialLocationState, action: any) {
  switch (action.type) {
    case 'UPDATE_LOCATION': {
      return action.location;
    }
    default: {
      return state;
    }
  }
}

const initialListState: List<Restaurant> = List([]);
function restaurant(state = initialListState, action: any) {
  switch (action.type) {
    case 'UPDATE_RESTAURANT': {
      return List(action.list);
    }
    case 'CHECK': {
      return state.update(action.index, data => ({
        name: data.name,
        address: data.address,
        imgUrl: data.imgUrl,
        locale: data.locale,
        category: data.category,
        isChecked: action.isChecked,
      }));
    }
    default: {
      return state;
    }
  }
}

const initialRefreshVisibility: boolean = false;
function refresh(state = initialRefreshVisibility, action: any) {
  switch (action.type) {
    case 'SET_VISIBILITY': {
      return action.visibility;
    }
    default: {
      return state;
    }
  }
}


const appReducer = combineReducers({
  nav,
  location,
  restaurant,
  refresh,
});

export default appReducer;
