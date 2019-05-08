/* eslint-disable react/prefer-stateless-function */
import React from "react";
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
} from "bizcharts";
import autoHeight from '../autoHeight';

@autoHeight()
class BasicBar extends React.Component {
  state = {
    autoHideXLabels: false,
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  handleRoot = n => {
    this.root = n;
  };

  handleRef = n => {
    this.node = n;
  };

  @Bind()
  @Debounce(400)
  resize() {
    if (!this.node) {
      return;
    }
    const canvasWidth = this.node.parentNode.clientWidth;
    const { data = [], autoLabel = true } = this.props;
    if (!autoLabel) {
      return;
    }
    const minWidth = data.length * 30;
    const { autoHideXLabels } = this.state;
    console.log(autoHideXLabels)

    if (canvasWidth <= minWidth) {
      if (!autoHideXLabels) {
        this.setState({
          autoHideXLabels: true,
        });
      }
    } else if (autoHideXLabels) {
      this.setState({
        autoHideXLabels: false,
      });
    }
  }

  render() {
    const {
      data,
      title,
      height,
      color = 'rgba(24, 144, 255, 0.85)',
      padding } = this.props

      const { autoHideXLabels } = this.state;

      const tooltip = [
        'x*y',
        (x, y) => ({
          name: x,
          value: y,
        }),
      ];

      const scale = {
        x:{range:
           [0.05, 1]
        }

      };

    return (
      <div style={{ height }} ref={this.handleRoot}>
        <div ref={this.handleRef}>
          {title && <h4 style={{ marginBottom: 20 }}>{title}</h4>}
          <Chart
            scale={scale}
            height={title ? height - 41 : height}
            data={data}
            forceFit
            title={title}
            padding={padding || 'auto'}>
            <Axis
              name="x"
              title={false}
              label={autoHideXLabels ? false : {}}
              tickLine={autoHideXLabels ? false : {}}
            />
            <Axis name="y" min={0} />
            <Tooltip showTitle={false} crosshairs={false} />
            <Geom type="interval" position="x*y" color={color} tooltip={tooltip} />
          </Chart>
        </div>
      </div>

    );
  }
}


export default BasicBar
