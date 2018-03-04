import { List } from 'immutable';
import { combineReducers } from 'redux';
import { AppNavigator } from '../container/AppContainer';

const initialNavState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'));

function nav(state = initialNavState, action) {
  switch (action.type) {
    default: {
      return AppNavigator.router.getStateForAction(action, state);
    }
  }
}

const initialLocationState = {
  latitude: 0.0,
  longitude: 0.0,
};
function location(state = initialLocationState, action) {
  switch (action.type) {
    case 'UPDATE_LOCATION': {
      return action.location;
    }
    default: {
      return state;
    }
  }
}

const initialListState = List([]);
function restaurant(state = initialListState, action) {
  switch (action.type) {
    case 'UPDATE_RESTAURANT': {
      return List(action.list);
    }
    default: {
      return state;
    }
  }
}

const initialRefreshVisibility = false;
function refresh(state = initialRefreshVisibility, action) {
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
