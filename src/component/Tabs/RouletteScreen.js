import React from 'react';
import { Text, FlatList } from 'react-native';

class RouletteScreen extends React.Component {
  render() {
    const { restaurant } = this.props.screenProps;
    const checkedRestaurant = restaurant.filter(rest => rest.isChecked);
    return (
      <FlatList
        data={checkedRestaurant.toArray()}
        extraData={checkedRestaurant.toArray()}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => (
          <Text>{item.name}</Text>
        )}
      />
    );
  }
}

export default RouletteScreen;
