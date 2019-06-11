import React, { Component } from 'react';
import Areanull from "../charts/Areanull"
import './index.less'

function fixedZero(val) {
  return val * 1 < 10 ? `0${val}` : val;
}

function getActiveData() {
  const activeData = [];
  for (let i = 0; i < 24; i += 1) {
    activeData.push({
      x: `${fixedZero(i)}:00`,
      y: Math.floor(Math.random() * 200) + i * 50,
    });
  }
  return activeData;
}

export default class ActiveChart extends Component {

  state = {
    activeData: getActiveData(),
  };

  componentDidMount() {
    this.loopData();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  loopData = () => {
    this.timer = setTimeout(() => {
      this.setState(
        {
          // eslint-disable-next-line react/no-unused-state
          activeData: getActiveData(),
        },
        () => {
          this.loopData();
        }
      );
    }, 500);
  }

  render () {
    const { activeData } = this.state

    return (
      <div style={{ marginTop: 32 }} className='activeChart'>
         <Areanull
            isHasTypeLine
            height={50}
            isHasAxis={false}
            isHasLegend={false}
            data={activeData} />
          {activeData && (
          <div>
            <div className='activeChartGrid'>
              <p>{[...activeData].sort()[activeData.length - 1].y + 200} 亿元</p>
              <p>{[...activeData].sort()[Math.floor(activeData.length / 2)].y} 亿元</p>
            </div>
          </div>
        )}
        {activeData && (
          <div className='activeChartLegend'>
            <span>00:00</span>
            <span>{activeData[Math.floor(activeData.length / 2)].x}</span>
            <span>{activeData[activeData.length - 1].x}</span>
          </div>
        )}
      </div>
    )
  }
}