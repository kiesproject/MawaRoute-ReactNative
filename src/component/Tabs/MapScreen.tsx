import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import uuid from 'uuid/v4';

import ScreenPropsProperties from '../../model/ScreenProps';
import Restaurant from '../../model/Restaurant';

function regionFrom(lat: number, lon: number, distance: number) {
  const dist = distance / 2;
  const circumference = 40075;
  const oneDegreeOfLatitudeInMeters = 111.32 * 1000;
  const angularDistance = dist / circumference;

  const latitudeDelta = dist / oneDegreeOfLatitudeInMeters;
  const longitudeDelta = Math.abs(Math.atan2(
    Math.sin(angularDistance) * Math.cos(lat),
    Math.cos(angularDistance) - (Math.sin(lat) * Math.sin(lat)),
  ));

  return {
    latitude: lat,
    longitude: lon,
    latitudeDelta,
    longitudeDelta,
  };
}

interface MapScreenProperties {
  screenProps: ScreenPropsProperties,
}

class MapScreen extends React.Component<MapScreenProperties, any> {
  render() {
    const { location, restaurant } = this.props.screenProps;
    return (
      <MapView
        style={{ flex: 1 }}
        region={regionFrom(location.latitude, location.longitude, 80)}
        provider="google"
      >
        {
          restaurant.map((marker: Restaurant) => (
            <Marker
              key={uuid()}
              coordinate={{
                latitude: marker.locale.latitude,
                longitude: marker.locale.longitude,
              }}
              title={marker.name}
              description={marker.category}
              // TODO: decide theme
              pinColor={marker.isChecked ? '#05c8fbff' : '#ff8c00'}
            />
          ))
        }
        <Marker
          coordinate={{ latitude: location.latitude, longitude: location.longitude }}
          title="現在地"
        />
      </MapView>
    );
  }
}

export default MapScreen;
