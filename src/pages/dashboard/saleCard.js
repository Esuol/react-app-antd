/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { connect } from 'react-redux'
import { Card, Tabs, Row ,Col } from 'antd';
import { analyizeAction } from '../../store/actions'
import api from '../../services/index'
import DatePicker from '../../components/layout/datePicker'
import Bar from '../../components/charts/bar'
import RankList from './rankList'

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
  const {interviewLoading} = this.props
  const rankList = [
    {index: 0, name: '工专路 0 号店', value: '321,234', active: true},
    {index: 1, name: '工专路 1 号店', value: '321,234', active: true},
    {index: 2, name: '工专路 2 号店', value: '321,234', active: true},
    {index: 3, name: '工专路 3 号店', value: '321,234', active: false},
    {index: 4, name: '工专路 4 号店', value: '321,234', active: false},
    {index: 5, name: '工专路 5 号店', value: '321,234', active: false},
    {index: 6, name: '工专路 6 号店', value: '321,234', active: false}
  ]

  return (
    <Card bordered={false} bodyStyle={{ padding: 0 }} loading={interviewLoading}>
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
              <div>
                <RankList title="门店销售额排名" rankList={rankList} />
              </div>
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
              <div style={{marginBottom: '15px'}}>
                <RankList title="门店访问量排名" rankList={rankList} />
              </div>
            </Col>
          </Row>
        </TabPane>
      </Tabs>
    </Card>
  )
 }
}

export default connect(mapStoP, mapDispatchToProps)(SaleCards)