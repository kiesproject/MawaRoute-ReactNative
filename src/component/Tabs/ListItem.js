import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { getTheme } from 'react-native-material-kit';

const theme = getTheme();
// title
theme.cardTitleStyle.color = 'white';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    padding: 8,
    // marginTop: Platform.OS === 'android' ? 56 : 0,
  },
  title: {
    padding: 8,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

function typeOfObject(param) {
  return typeof param === 'object';
}

class ListItem extends React.Component {
  render() {
    const { item, goDetail } = this.props;
    const { width } = Dimensions.get('window');
    return (
      <View style={styles.container}>
        <View style={theme.cardStyle}>
          {/* TODO: decide theme */}
          {
            !typeOfObject(item.image_url.shop_image1) ?
              <View>
                <Image
                  source={{ uri: item.image_url.shop_image1 }}
                  style={[theme.cardImageStyle]}
                />
                <View
                  style={[{ ...StyleSheet.absoluteFillObject, backgroundColor: '#0005', height: 170 }]}
                />
              </View> :
              <View style={[{ height: 170, backgroundColor: '#e4581bff' }]} />
          }
          <Text
            style={[theme.cardTitleStyle, { maxWidth: width - 16 - 24 }]}
            numberOfLines={1}
          >
            {item.name}
          </Text>
          <Text style={[theme.cardContentStyle]}>{item.address}</Text>
          <TouchableOpacity onPress={() => goDetail(item)}>
            <Text style={theme.cardActionStyle}>詳細画面</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ListItem;
