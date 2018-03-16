import * as React from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet, TouchableOpacity, Animated } from 'react-native';

import ListItem from './ListItem';
import ScreenPropsProperties from '../../model/ScreenProps';
import Restaurant from '../../model/Restaurant';

const snackHeight = 50;

const styles = StyleSheet.create({
  snackContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  snack: {
    flexDirection: 'row',
    position: 'absolute',
    height: snackHeight,
    backgroundColor: 'blue',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 8,
  },
});

interface ListScreenProperties {
  screenProps: ScreenPropsProperties,
}

interface ListScreenState {
  checkCount: number,
  moveSnack: Animated.Value,
}

class ListScreen extends React.Component<ListScreenProperties, ListScreenState> {
  constructor(props: ListScreenProperties) {
    super(props);
    this.state = {
      checkCount: 0,
      moveSnack: new Animated.Value(snackHeight),
    };
    this.animationStart = this.animationStart.bind(this);
    this.animationBack = this.animationBack.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
  }

  componentWillUnmount() {
    this.state.moveSnack.stopAnimation();
  }

  animationStart() {
    Animated.timing(this.state.moveSnack, {
      toValue: 0,
      duration: 200,
    }).start();
  }

  animationBack() {
    Animated.timing(this.state.moveSnack, {
      toValue: snackHeight,
    }).start();
  }

  handleCheckBox(item: Restaurant, index: number) {
    const { check } = this.props.screenProps;

    if (!item.isChecked && this.state.checkCount < 5) {
      check(!item.isChecked, index);
      // increment count
      this.setState(prevState => ({
        checkCount: prevState.checkCount + 1
      }));
    } else if (item.isChecked) {
      check(!item.isChecked, index);
      // decrement count
      this.setState(prevState => ({
        checkCount: prevState.checkCount === 0 ? prevState.checkCount : prevState.checkCount - 1
      }));
    } else {
      this.animationStart();
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
            this.setState({ checkCount: 0 });
            this.animationBack();
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
        <View style={styles.snackContainer}>
          <Animated.View style={[
            styles.snack, {
              width,
              transform: [
                { translateY: this.state.moveSnack },
              ],
            }]}
          >
            <Text style={{ fontSize: 16, color: 'white' }}>5個以内で選択してください</Text>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                onPress={() => this.animationBack()}
                style={{ alignSelf: 'flex-end', padding: 8, marginRight: 16 }}
              >
                <Text style={{ color: 'white' }}>OK</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </View>
    );
  }
}

export default ListScreen;
