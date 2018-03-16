import { List } from 'immutable';

import Restaurant from '../model/Restaurant';
import Location from '../model/Location';

export default interface ScreenPropsProperties {
  restaurant: List<Restaurant>,
  location: Location,
  refresh: boolean,
  pullToRefresh: () => void,
  goDetail: (rest: Restaurant) => void,
  check: (isChecked: boolean, index: number) => void,
}