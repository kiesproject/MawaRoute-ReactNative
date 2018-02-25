import React from 'react';
import { View, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { List } from 'immutable';

class ListScreen extends React.Component {
  render() {
    const { restaurant } = this.props.screenProps;
    return (
      <FlatList
        data={restaurant.toArray()}
        extraData={restaurant.toArray()}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => (
          <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    );
  }
}

export default ListScreen;