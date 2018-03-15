import Location from './Location';

export default interface Restaurant {
  name: string,
  address: string,
  imgUrl: object | string,
  locale: Location,
  category: string,
  isChecked: boolean,
}