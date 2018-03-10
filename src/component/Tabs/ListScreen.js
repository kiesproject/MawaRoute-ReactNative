import React from 'react';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

class ListScreen extends React.Component {
  render() {
    const {
      restaurant, refresh, pullToRefresh, goDetail, check, isChecked,
    } = this.props.screenProps;
    return (
      <FlatList
        data={restaurant.toArray()}
        extraData={restaurant.toArray()}
        keyExtractor={(item, index) => String(index)}
        onRefresh={() => pullToRefresh()}
        refreshing={refresh}
        renderItem={({ item, index }) => (
          <ListItem
            item={item}
            goDetail={goDetail}
            check={check}
            isChecked={isChecked}
            index={index}
          />
        )}
      />
    );
  }
}

export default ListScreen;
