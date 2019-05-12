/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { connect } from 'react-redux'
import { Card, Tabs } from 'antd';
import { analyizeAction } from '../../store/actions'
import DatePicker from '../../components/layout/datePicker'

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

 

  ModifyInterviewLoading = (data) => {
    const { modifyInterviewLoading } = this.props
    modifyInterviewLoading(data)
  }

 render () {
  // const {interviewLoading} = this.props

  return (
    <Card bordered={false} bodyStyle={{ padding: 0 }}>
      <Tabs
      defaultActiveKey="1"
      tabBarExtraContent = {
        <DatePicker />
      }
      size="large"
      tabBarStyle={{ marginBottom: 24 }}>
        <TabPane tab="Tab 1" key="1"> qq</TabPane>
        <TabPane tab="Tab 3" key="3">Tab 3</TabPane>
      </Tabs>
    </Card>
  )
 }
}

export default connect(mapStoP, mapDispatchToProps)(SaleCards)