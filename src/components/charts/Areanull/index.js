/* eslint-disable react/prefer-stateless-function */
import React from "react";
import {
  Chart,
  Geom,
  Axis,
  Legend,
  Tooltip
} from "bizcharts";
import autoHeight from '../autoHeight'

@autoHeight()
class Areanull extends React.PureComponent {

  render() {
    const { data, height, isHasAxis, isHasLegend, isHasTypeLine, scale={}, color = 'rgba(24, 144, 255, 0.2)', borderColor = '#1089ff' } = this.props

    const scaleProps = {
      x: {
        type: 'cat',
        range: [0, 1],
        ...scale.x,
      },
      y: {
        min: 0,
        ...scale.y,
      },
    };

    const tooltip = [
      'x*y',
      (x, y) => ({
        name: x,
        value: y,
      }),
    ];

    return (
      <div>
        <Chart
          height={height}
          data={data}
          padding="auto"
          scale={scaleProps}
          forceFit
        >
          { isHasAxis
          ? <Axis
            label={false}
            line={false}
            tickLine={false}
            grid={false}/>
          : null}

          { isHasLegend
          ? <Legend />
          : null}

          <Tooltip showTitle={false} crosshairs={false} />

          <Geom type="area" position="x*y" shape="smooth" tooltip={tooltip} color={color} />

          { isHasTypeLine
          ? <Geom
            type="line"
            color={borderColor}
            position="x*y"
            shape="smooth"
            size={2}
          />
          : null}


        </Chart>
      </div>
    );
  }
}

export default Areanull