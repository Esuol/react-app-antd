/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import { connect } from 'react-redux'
import { Card, Tabs, Row, Col } from 'antd';
import api from '../../services/index'
import { analyizeAction } from '../../store/actions'
import Pie from '../../components/charts/pie'
import TimelineChart from '../../components/charts/timeLineChart'

const { TabPane } = Tabs

const CustomTab = ({ data, currentTabKey: currentKey, pieData }) => (
  <Row gutter={8} style={{ width: 138, margin: '8px 0' }}>
    <Col span={12}>


    </Col>
    <Col span={12} style={{ paddingTop: 36 }}>
        <Pie
         html="<div style=&quot;color:#8c8c8c;font-size:1.16em;text-align: center;width: 10em;&quot;>Berlin<br><span style=&quot;color:#262626;font-size:2.5em&quot;></span>定制</div>"
         hasLegend
         innerRadius={0.8}
         radius={0.6}
         margin={[0, 0, 0, 0]}
         padding={[0, 40, 0, 40]}
         data={pieData}
         height={400} />
    </Col>
  </Row>
);

const mapStoP = state => {
  return {
    interviewLoading: state.analyizeReducer.interviewLoading
  }
}

const mapDis = {
  modifyInterviewLoading:  analyizeAction.modifyInterviewLoading
}

class OfflineData extends React.Component{

  async componentWillMount () {
    const timeLineData = await api.dataAnalyize.timeLineData()
    this.timeLineData = timeLineData.payload
    const pieData = await api.dataAnalyize.pieDataOne()
    this.pieData = pieData.payload

    setTimeout(() => {
      this.ModifyInterviewLoading(false)
     },1000)
  }

  ModifyInterviewLoading = (data) => {
    const { modifyInterviewLoading } = this.props
    modifyInterviewLoading(data)
  }

  render () {
    const { interviewLoading, offlineData } = this.props
    const defaultKey = offlineData[0].name

    return (
      <Card
      loading={interviewLoading}
      bordered={false}
      style={{ marginTop: 32 }}
    >
      <Tabs activeKey={defaultKey}>
        {offlineData.map(item => (
          <TabPane tab={<CustomTab data={item} currentTabKey={defaultKey} pieData={this.pieData} />} key={item.name}>
            <div style={{ padding: '0 24px' }}>
              <TimelineChart
                height={400}
                data={this.timeLineData}
              />
            </div>
          </TabPane>
        ))}
      </Tabs>
    </Card>
    )
  }
}

export default connect(mapStoP, mapDis)(OfflineData)

