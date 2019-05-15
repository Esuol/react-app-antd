/* eslint-disable react/prefer-stateless-function */
import React from "react";
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend,
} from "bizcharts";

class Stacked extends React.Component {


  render() {
    const {data, height} = this.props

   const cols = {
      year: {
        type: "linear",
        tickInterval: 50
      }
    };
    return (
      <div>
        <Chart height={height} data={data} scale={cols} forceFit>
          <Axis name="year" />
          <Axis name="value" />
          <Legend />
          <Tooltip
            crosshairs={{
              type: "line"
            }}
          />

          <Geom type="lineStack" position="year*value" size={2} color="country" />
        </Chart>
      </div>
    );
  }
}

export default Stacked


