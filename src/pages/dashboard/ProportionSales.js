/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { Card } from 'antd';
import { connect } from 'react-redux'
import { analyizeAction } from '../../store/actions'
import SelectPicker from '../../components/layout/selectPicker'

// eslint-disable-next-line react/prefer-stateless-function
function mapStoP(state){
  return {
   interviewLoading: state.analyizeReducer.interviewLoading
  }
 }

 const mapDispatchToProps = {
   modifyInterviewLoading:  analyizeAction.modifyInterviewLoading
 }

class ProportionSales extends React.Component {

  constructor (props) {
    super(props)
    this.onChangeSelect = this.onChangeSelectPar.bind(this)
  }

  async componentDidMount () {
    setTimeout(() => {
      this.ModifyInterviewLoading(false)
     },1000)
  }

  onChangeSelectPar = (value) => {
    console.log(value)
  }

  ModifyInterviewLoading = (data) => {
    const { modifyInterviewLoading } = this.props
    modifyInterviewLoading(data)
  }

  render () {
    const { interviewLoading,title } = this.props

    return (
      <Card
        bordered={false}
        loading={interviewLoading}
        title={title}
        bodyStyle={{ padding: 24 }}
        extra={ <SelectPicker title={['全部渠道', '线上', '门店']} onChangeSelect={this.onChangeSelect} /> }>
      </Card>
    )
  }
}

export default connect(mapStoP, mapDispatchToProps)(ProportionSales)