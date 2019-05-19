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
class Areanull extends React.Component {

  render() {

    const { data, height, isHasAxis, isHasLegend, isHasTypeLine, scale = {} } = this.props

    console.log(data)

    // const scale = {
    //   value: {
    //     formatter(val) {
    //       return `$${ val}`;
    //     }
    //   },
    //   year: {
    //     range: [0, 1]
    //   }
    // };


    const scaleProps = {
      x: {
        type: 'cat',
        range: [0, 1],
        ...scale.year,
      },
      y: {
        min: 0,
        ...scale.y,
      },
    };
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

          <Tooltip crosshairs />

          <Geom type="area" position="year*value" color={isHasTypeLine ? '#BBDEFB' : 'type'} shape="smooth" />
          { isHasTypeLine
          ? <Geom
            type="line"
            position="year*value"
            color="type"
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