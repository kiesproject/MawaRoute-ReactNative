import React from 'react';
import { View, Text, FlatList } from 'react-native';

class ListScreen extends React.Component {
  render() {
    const { restaurant, refresh, pullToRefresh } = this.props.screenProps;
    return (
      <FlatList
        data={restaurant.toArray()}
        extraData={restaurant.toArray()}
        keyExtractor={(item, index) => String(index)}
        onRefresh={() => pullToRefresh()}
        refreshing={refresh}
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
