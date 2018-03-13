import React from 'react';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

class ListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkCount: 0,
    };
    this.handleCheckBox = this.handleCheckBox.bind(this);
  }

  handleCheckBox(item, index) {
    const { check } = this.props.screenProps;

    if (!item.isChecked && this.state.checkCount < 5) {
      check(!item.isChecked, index);
      // increment count
      this.setState = {
        checkCount: this.state.checkCount += 1,
      };
    } else if (item.isChecked) {
      check(!item.isChecked, index);
      // decrement count
      this.setState = {
        checkCount: this.state.checkCount =
          this.state.checkCount === 0 ? this.state.checkCount : this.state.checkCount -= 1,
      };
    } else {
      // TODO: error handling
      console.log('max!!');
    }
  }

  render() {
    const {
      restaurant, refresh, pullToRefresh, goDetail,
    } = this.props.screenProps;
    return (
      <FlatList
        data={restaurant.toArray()}
        extraData={restaurant.toArray()}
        keyExtractor={(item, index) => String(index)}
        onRefresh={() => {
          pullToRefresh();
          // init count
          this.setState = { checkCount: this.state.checkCount = 0 };
        }}
        refreshing={refresh}
        renderItem={({ item, index }) => (
          <ListItem
            item={item}
            goDetail={goDetail}
            index={index}
            handleCheckBox={this.handleCheckBox}
          />
        )}
      />
    );
  }
}

export default ListScreen;
