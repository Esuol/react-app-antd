/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { connect } from 'react-redux'
import { Card, Tabs, Row ,Col } from 'antd';
import { analyizeAction } from '../../store/actions'
import api from '../../services/index'
import DatePicker from '../../components/layout/datePicker'
import Bar from '../../components/charts/bar'

const { TabPane } = Tabs

function mapStoP(state){
  return {
   interviewLoading: state.analyizeReducer.interviewLoading
  }
 }

 const mapDispatchToProps = {
   modifyInterviewLoading:  analyizeAction.modifyInterviewLoading
 }

class SaleCards extends React.Component{

  async componentDidMount () {
    const bardata = await api.dataAnalyize.getSaleData()
    this.bardata = bardata.payload

    setTimeout(() => {
      this.ModifyInterviewLoading(false)
     },1000)
  }

  ModifyInterviewLoading = (data) => {
    const { modifyInterviewLoading } = this.props
    modifyInterviewLoading(data)
  }

 render () {
  // const {interviewLoading} = this.props

  return (
    <Card bordered={false} bodyStyle={{ padding: 0 }}>
      <Tabs
      defaultActiveKey="sales"
      tabBarExtraContent = {
        <DatePicker />
      }
      size="large"
      tabBarStyle={{ marginBottom: 24 }}>
        <TabPane tab="销售额" key="sales">
          <Row style={{paddingBottom: 20}}>
            <Col xl={16} lg={12} md={12} sm={24} xs={24}>
              <div className="barWrap">
                <Bar data={this.bardata}
                    isHasAxis
                    title="销售量趋势"
                    height={250}
                    padding={0} />
              </div>
            </Col>
            <Col xl={8} lg={12} md={12} sm={24} xs={24}>

            </Col>
          </Row>
        </TabPane>
        <TabPane tab="访问量" key="visit">
          <Row>
            <Col xl={16} lg={12} md={12} sm={24} xs={24}>
              <div className="barWrap">
                <Bar data={this.bardata}
                    isHasAxis
                    title="访问量趋势"
                    height={250}
                    padding={0} />
              </div>
            </Col>
            <Col xl={8} lg={12} md={12} sm={24} xs={24}>

            </Col>
          </Row>
        </TabPane>
      </Tabs>
    </Card>
  )
 }
}

export default connect(mapStoP, mapDispatchToProps)(SaleCards)