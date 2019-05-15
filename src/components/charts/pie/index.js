import React from "react";
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  Guide
} from "bizcharts";
import DataSet from "@antv/data-set";
import autoHeight from '../autoHeight';

@autoHeight()
class Pie extends React.Component {
  render() {
    const { DataView } = DataSet;
    const { Html } = Guide;
    const { data, height, hasLegend, html, padding, radius, innerRadius, toolTip, label } = this.props
    const dv = new DataView();
    dv.source(data).transform({
      type: "percent",
      field: "count",
      dimension: "item",
      as: "percent"
    });
    const cols = {
      percent: {
        formatter: val => {
          val = `${val * 100}%`;
          return val;
        }
      }
    };
    return (
      <div>
        <Chart
          data={dv}
          scale={cols}
          forceFit
          height={height}
          padding={padding}
        >
          <Coord type="theta" radius={radius} innerRadius={innerRadius} />
          <Axis name="percent" />
          { hasLegend
           ? <Legend
              position="right"
              offsetY={-250}
              offsetX={-50}
            />
          : null}

          {toolTip
          ? <Tooltip
            showTitle={false}
            itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
          />
          : null}


          {html && <Guide>
              <Html
                position={["50%", "50%"]}
                html={html}
                alignX="middle"
                alignY="middle"
              />
            </Guide> }
          <Geom
            type="intervalStack"
            position="percent"
            color="item"
            tooltip={[
              "item*percent",
              (item, percent) => {
                percent = `${percent}%`;
                return {
                  name: item,
                  value: percent
                };
              }
            ]}
            style={{
              lineWidth: 1,
              stroke: "#fff"
            }}
          >
          {label && <Label
              content="percent"
              padding={10}
              formatter={(val, item) => {
                return `${item.point.item }: ${val.substring(0, val.length - 1).slice(0,4)}%`;
              }}
            />}

          </Geom>
        </Chart>
      </div>
    );
  }
}

export default Pie
