import React from 'react';
import { View, Dimensions } from 'react-native'
import { List } from 'immutable';
import d3 from 'd3';
import * as d3scale from 'd3-scale'
import * as d3shape from 'd3-shape'
import * as d3Array from 'd3-array'
import Svg, { Circle, Rect, Path } from 'react-native-svg';

import ScreenPropsProperties from '../../model/ScreenProps';

interface RouletteScreenProperties {
  screenProps: ScreenPropsProperties,
}

const colors = [
  '#F44336', '#E91E63', '#FFC107', '#8BC34A', '#3F51B5',
]

class RouletteScreen extends React.Component<RouletteScreenProperties, any> {
  render() {
    const { width, height } = Dimensions.get('window');
    const { restaurant } = this.props.screenProps;
    const checkedRestaurant = restaurant.filter(rest => rest.isChecked).toArray();
    const arcs = d3shape.pie().value(item => item.valueOf())(checkedRestaurant.map((item: any, index: number) => 1));
    const pieChart: { paths: any[] } = { paths: [] };
    arcs.map((arc: any, index: number) => {
      const path = d3shape.arc().outerRadius(180).padAngle(.05).innerRadius(50)(arc)
      pieChart.paths.push({ path })
    });
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Svg width={width} height={height} >
          {
            pieChart.paths.map((item, index) => (
              <Path
                key={String(index)}
                x={width / 2}
                y={height / 2}
                scale={0.7}
                fill={colors[index]}
                d={item.path}
              />
            ))
          }
        </Svg>
      </View>
    );
  }
}

export default RouletteScreen;
