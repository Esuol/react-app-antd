/* eslint-disable react/prefer-stateless-function */
import React from "react";
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend,
} from "bizcharts";
import autoHeight from '../autoHeight'

@autoHeight()
class Stacked extends React.Component {
  render() {
    const {data, height, name, type} = this.props

   const cols = {
      year: {
        type: "linear",
        tickInterval: 50
      }
    };
    return (
      <div>
        <Chart height={height} data={data} scale={cols} forceFit>
          <Axis name={name[0]} />
          <Axis name={name[1]} />
          <Legend />
          <Tooltip
            crosshairs={{
              type
            }}
          />

          <Geom type="lineStack" position="year*value" size={2} color="country" />
        </Chart>
      </div>
    );
  }
}

export default Stacked


