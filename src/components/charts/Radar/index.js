/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Chart, Geom, Axis, Tooltip, Coord, Legend } from 'bizcharts';
import DataSet from '@antv/data-set';

// CDN START

class Withline extends React.Component {
  render() {
    const { height, padding, data, hasLegend = false } = this.props;
    const { DataView } = DataSet;
    const dv = new DataView().source(data);
    dv.transform({
      type: 'fold',
      fields: ['a', 'b'],
      // 展开字段集
      key: 'user',
      // key字段
      value: 'score' // value字段
    });
    const cols = {
      score: {
        min: 0,
        max: 80
      },
      user: { formatter: val => ({ a: 'No cares', b: 'Popular' }[val]) }
    };

    return (
      <div>
        <Chart
          height={height}
          data={dv}
          padding={padding}
          scale={cols}
          forceFit
        >
          <Coord type="polar" radius={0.8} />
          <Axis
            name="item"
            line={null}
            tickLine={null}
            grid={{
              lineStyle: {
                lineDash: null
              },
              hideFirstLine: false
            }}
          />
          <Tooltip />
          <Axis
            name="score"
            line={null}
            tickLine={null}
            grid={{
              type: 'polygon',
              lineStyle: {
                lineDash: null
              },
              alternateColor: 'rgba(0, 0, 0, 0.04)'
            }}
          />
          {hasLegend ? (
            <Legend name="user" marker="circle" offset={30} />
          ) : null}
          <Geom type="line" position="item*score" color="user" size={2} />
          <Geom
            type="point"
            position="item*score"
            color="user"
            shape="circle"
            size={4}
            style={{
              stroke: '#fff',
              lineWidth: 1,
              fillOpacity: 1
            }}
          />
        </Chart>
      </div>
    );
  }
}

export default Withline;
