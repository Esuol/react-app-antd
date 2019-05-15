/* eslint-disable no-unused-expressions */
/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { Card } from 'antd';
import { connect } from 'react-redux'
import { analyizeAction } from '../../store/actions'
import SelectPicker from '../../components/layout/selectPicker'
import Pie from '../../components/charts/pie'
import api from '../../services'

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
    this.state = {
      pieData: []
    }
    this.onChangeSelect = this.onChangeSelectPar.bind(this)
  }

  async componentDidMount () {
    this.getPieDataOne()
    setTimeout(() => {
      this.ModifyInterviewLoading(false)
     },1000)
  }

  getPieDataOne = async() => {
    const pieData = await api.dataAnalyize.pieDataOne()

    this.setState(() => ({
      pieData: pieData.payload
    }))
  }

  getPieDataTwo = async() => {
    const pieData = await api.dataAnalyize.pieDataTwo()

    this.setState(() => ({
      pieData: pieData.payload
    }))
  }

  getPieDataThree = async() => {
    const pieData = await api.dataAnalyize.pieDataThree()

    this.setState(() => ({
      pieData: pieData.payload
    }))
  }

  onChangeSelectPar = (e) => {
    e.target.value === '全部渠道' && this.getPieDataOne()
    e.target.value === '线上' && this.getPieDataTwo()
    e.target.value === '门店' && this.getPieDataThree()
  }

  ModifyInterviewLoading = (data) => {
    const { modifyInterviewLoading } = this.props
    modifyInterviewLoading(data)
  }

  render () {
    const { interviewLoading,title } = this.props
    const { pieData } =this.state

    return (
      <Card
        style={{height: 520}}
        bordered={false}
        loading={interviewLoading}
        title={title}
        bodyStyle={{ paddingTop: 10 }}
        extra={ <SelectPicker title={['全部渠道', '线上', '门店']} onChangeSelect={this.onChangeSelect} /> }>
        <h4 style={{ marginTop: 10 }}>
          销售额
        </h4>
        <Pie
         data={pieData}
         height={400} />
      </Card>
    )
  }
}

export default connect(mapStoP, mapDispatchToProps)(ProportionSales)