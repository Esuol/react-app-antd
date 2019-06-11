/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import {Row, Col, Card} from 'antd'
import { connect } from 'react-redux'
import MonitorTitle from './monitorTab'
import ActiveChart from '../../components/ActiveChart'
import Pie from '../../components/charts/pie'
import WaterWave from '../../components/charts/waterWave'
import Gauge from '../../components/charts/Gauge'
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
    pieData: [],
    tabData: [
      {id: 1, title: '今日交易总额', content: '123,543,233元'},
      {id: 2, title: '销售目标完成率', content: '92%'},
      {id: 3, title: '活动剩余时间', content: 'COM'},
      {id: 4, title: '每秒交易总额', content: '123元'},
    ]
  }

  async componentDidMount () {
   const bardata = await api.dataAnalyize.getSaleData()
   this.getPieDataOne()
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

  getPieDataOne = async() => {
    const pieData = await api.dataAnalyize.pieDataSmall()

    this.setState(() => ({
      pieData: pieData.payload
    }))
  }

  render () {
    const {interviewLoading} = this.props
    const { tabData, pieData } = this.state

    return (
      <section>
        <Row gutter={24} className="mointorWrap">
          <Col xl={18} lg={24} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card title="活动实时交易情况" bordered={false} loading={interviewLoading}>
              <MonitorTitle data={tabData} />
              <div className="mapImg">
                <img
                  className="mapImgs"
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
                <ActiveChart />
              </Card>

              <Card title="券核效率" bordered={false} style={{ marginBottom: 24 }} loading={interviewLoading}>
                <Gauge
                title="薪资过20k率"
                height={180}
                percent={25} />
              </Card>
          </Col>
      </Row>

      <Row gutter={24}>
        <Col xl={12} lg={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
          <Card title="各品类占比" bordered={false} style={{ marginBottom: 24 }} loading={interviewLoading}>
          <Row style={{ padding: '16px 0' }}>
            <Col span={8}>
              <Pie
                toolTip
                html="<div><span style=&quot;color:#262626;font-size:2.5em&quot;></span>苹果</div>"
                innerRadius={0.8}
                radius={0.6}
                padding={[0, 20, 0, 20]}
                data={pieData}
                height={168} />
            </Col>
            <Col span={8}>
              <Pie
                toolTip
                html="<div><span style=&quot;color:#262626;font-size:2.5em&quot;></span>三星</div>"
                innerRadius={0.8}
                radius={0.6}
                padding={[0, 20, 0, 20]}
                data={pieData}
                height={168} />
            </Col>
            <Col span={8}>
              <Pie
                toolTip
                html="<div><span style=&quot;color:#262626;font-size:2.5em&quot;></span>华为</div>"
                innerRadius={0.8}
                radius={0.6}
                padding={[0, 20, 0, 20]}
                data={pieData}
                height={168} />
            </Col>
          </Row>
          </Card>

        </Col>
        <Col xl={6} lg={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
          <Card title="热门搜索" bordered={false} style={{ marginBottom: 24 }} loading={interviewLoading}>
             <Pie
                toolTip
                html="<div><span style=&quot;color:#262626;font-size:2.5em&quot;></span>热门搜索</div>"
                innerRadius={0.8}
                radius={0.6}
                padding={[0, 20, 0, 20]}
                data={pieData}
                height={200} />
          </Card>
        </Col>
        <Col xl={6} lg={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
          <Card title="资源剩余" bordered={false} style={{ marginBottom: 24 }} loading={interviewLoading}>
            <div className="waterWrap">
              <WaterWave
                  height={196}
                  title='剩余工资未发'
                  percent={34}
                />
            </div>
          </Card>
        </Col>
      </Row>
      </section>

      // <Bar data={data} title="销售趋势" height={350} padding={50} />
    )
  }
}

export default connect(mapStoP, mapDispatchToProps)(Monitor)
