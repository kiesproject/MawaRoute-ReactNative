import React from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import ListItem from './ListItem';

const styles = StyleSheet.create({
  snackContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  snack: {
    flexDirection: 'row',
    position: 'absolute',
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 8,
  },
});

class ListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkCount: 0,
      overSelect: true,
    };
    this.handleCheckBox = this.handleCheckBox.bind(this);
  }

  handleCheckBox(item, index) {
    const { check } = this.props.screenProps;

    if (!item.isChecked && this.state.checkCount < 5) {
      check(!item.isChecked, index);
      // increment count
      this.setState({
        checkCount: this.state.checkCount += 1,
      });
    } else if (item.isChecked) {
      check(!item.isChecked, index);
      // decrement count
      this.setState({
        checkCount: this.state.checkCount =
          this.state.checkCount === 0 ? this.state.checkCount : this.state.checkCount -= 1,
        overSelect: false,
      });
    } else {
      this.setState({ overSelect: true });
    }
  }

  render() {
    const {
      restaurant, refresh, pullToRefresh, goDetail,
    } = this.props.screenProps;
    const { width } = Dimensions.get('window');
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={restaurant.toArray()}
          extraData={restaurant.toArray()}
          keyExtractor={(item, index) => String(index)}
          onRefresh={() => {
            pullToRefresh();
            // init count
            this.setState({ checkCount: this.state.checkCount = 0, overSelect: false });
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
        {
          this.state.overSelect ?
            <View style={styles.snackContainer}>
              <View style={[styles.snack, { width }]}>
                <Text style={{ fontSize: 16, color: 'white' }}>5個以内で選択してください</Text>
                <View style={{ flex: 1 }}>
                  <TouchableOpacity
                    onPress={() => this.setState({ overSelect: false })}
                    style={{ alignSelf: 'flex-end', padding: 8, marginRight: 16 }}
                  >
                    <Text style={{ color: 'white' }}>OK</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View> : null
        }
      </View>
    );
  }
}

export default ListScreen;
