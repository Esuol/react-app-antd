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



class Donut extends React.Component {
  render() {
    const { DataView } = DataSet;
    const { Html } = Guide;
    const { data, height } = this.props
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
          padding={[0, 40, 0, 40]}
        >
          <Coord type="theta" radius={0.6} innerRadius={0.8} />
          <Axis name="percent" />
          <Legend
            position="right"
            offsetY={-250}
            offsetX={-50}
          />
          <Tooltip
            showTitle={false}
            itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
          />
          <Guide>
            <Html
              position={["50%", "50%"]}
              html="<div style=&quot;color:#8c8c8c;font-size:1.16em;text-align: center;width: 10em;&quot;>主机<br><span style=&quot;color:#262626;font-size:2.5em&quot;>200</span>台</div>"
              alignX="middle"
              alignY="middle"
            />
          </Guide>
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
            <Label
              content="percent"
              padding={10}
              formatter={(val, item) => {
                return `${item.point.item }: ${val.substring(0, val.length - 1).slice(0,4)}%`;
              }}
            />
          </Geom>
        </Chart>
      </div>
    );
  }
}

export default Donut
