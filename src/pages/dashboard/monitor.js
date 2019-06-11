/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import {Row, Col, Card} from 'antd'
import { connect } from 'react-redux'
import MonitorTitle from './monitorTab'
import { analyizeAction } from '../../store/actions'
import api from '../../services'
import './monitor.less'

function mapStoP(state){
  return {
   interviewLoading: state.analyizeReducer.interviewLoading
  }
 }

 const mapDispatchToProps = {
   modifyInterviewLoading:  analyizeAction.modifyInterviewLoading
 }

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
   setTimeout(() => {
    this.ModifyInterviewLoading(false)
   },1000)
  }

  ModifyInterviewLoading = (data) => {
    const { modifyInterviewLoading } = this.props
    modifyInterviewLoading(data)
  }

  render () {
    const {interviewLoading} = this.props
    const { tabData } = this.state

    return (
        <Row gutter={24} className="mointorWrap">
          <Col xl={18} lg={24} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card title="活动实时交易情况" bordered={false} loading={interviewLoading}>
              <MonitorTitle data={tabData} />
              <div className="mapImg">
                <img
                  className="mapImg"
                  src="https://gw.alipayobjects.com/zos/antfincdn/h%24wFbzuuzz/HBWnDEUXCnGnGrRfrpKa.png"
                  alt="map"
                />
              </div>
            </Card>
          </Col>
          <Col xl={6} lg={24} md={24} sm={24} xs={24}>
            <Card title="活动情况预测" bordered={false} style={{ marginBottom: 24 }} loading={interviewLoading}>
                <p className="f14px">目标评估</p>
                <p className="f24px txtColor">目标评估</p>
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

export default connect(mapStoP, mapDispatchToProps)(Monitor)
