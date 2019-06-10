/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import {Row, Col, Card} from 'antd'
import MonitorTitle from './monitorTab'
import api from '../../services'


class Monitor extends React.Component {

  state = {
    data: [

    ],
    tabData: [
      {id: 1, title: '今日交易总额', content: '123,543,233元'},
      {id: 2, title: '销售目标完成率', content: '92%'},
      {id: 3, title: '活动剩余时间', content: 'COM'},
      {id: 4, title: '每秒交易总额', content: '123元'},
    ]
  }

  async componentDidMount () {
   const bardata = await api.dataAnalyize.getSaleData()
   this.setState(() => ({
     data: bardata.payload
   }))
  }

  render () {
    const { tabData } = this.state
    return (
        <Row gutter={24}>
          <Col xl={18} lg={24} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card title="活动实时交易情况" bordered={false}>
              <MonitorTitle data={tabData} />
            </Card>
          </Col>
          <Col xl={6} lg={24} md={24} sm={24} xs={24}>
            <Card title="活动情况预测" bordered={false} style={{ marginBottom: 24 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card title="券核效率" bordered={false}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
          </Col>
        </Row>
      // <Bar data={data} title="销售趋势" height={350} padding={50} />
    )
  }
}

export default Monitor
