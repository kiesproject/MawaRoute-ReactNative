import React from 'react';
import { View, Text } from 'react-native';

class DetailScreen extends React.Component {
  render() {
    const rest = this.props.navigation.state.params;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{rest.name}</Text>
      </View>
    );
  }
}

export default DetailScreen;
