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
import autoHeight from '../autoHeight';

@autoHeight()
class Pie extends React.Component {
  render() {
    const { Html } = Guide;
    const { data, height, hasLegend, html, padding, radius, innerRadius, toolTip, label } = this.props
    const cols = {
      x: {
        formatter: val => {
          val = `${val * 100}%`;
          return val;
        }
      }
    };
    return (
      <div>
        <Chart
          data={data}
          scale={cols}
          forceFit
          height={height}
          padding={padding}
        >
          <Coord type="theta" radius={radius} innerRadius={innerRadius} />
          <Axis name="x" />
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
            position="x"
            color="y"
            tooltip={[
              "y*x",
              (y, x) => {
                x = `${x}%`;
                return {
                  name: y,
                  value: x
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
                return `${item.point.y }: ${item.point.x}%`;
              }}
            />}
          </Geom>
        </Chart>
      </div>
    );
  }
}

export default Pie
