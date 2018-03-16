import React from 'react';
import { View, Text } from 'react-native';

import Restaurant from '../model/Restaurant';

interface DetailScreenProperties {
  navigation: any
}

class DetailScreen extends React.Component<DetailScreenProperties, any> {
  render() {
    const rest: Restaurant = this.props.navigation.state.params;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{rest.name}</Text>
      </View>
    );
  }
}

export default DetailScreen;
