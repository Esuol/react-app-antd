/* eslint-disable react/prefer-stateless-function */
import React from "react";
import {
  Chart,
  Geom,
  Axis,
  Legend,
  Tooltip
} from "bizcharts";
import DataSet from "@antv/data-set";
import autoHeight from '../autoHeight'

@autoHeight()
class Areanull extends React.Component {

  render() {

    const { visitorData, height, isHasAxis, isHasLegend, isHasTypeLine } = this.props

    const dv = new DataSet.View().source(visitorData);

    dv.transform({
      type: "fold",
      fields: ["y"],
      key: "type",
      value: "value"
    });

    const scale = {
      value: {
        formatter(val) {
          return `$${ val}`;
        }
      },
      year: {
        range: [0, 1]
      }
    };
    return (
      <div>
        <Chart
          height={height}
          data={dv}
          padding="auto"
          scale={scale}
          forceFit
        >
          { isHasAxis
          ? <Axis />
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