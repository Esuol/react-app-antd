/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { Card } from 'antd';
import { connect } from 'react-redux'
import { analyizeAction } from '../../store/actions'
import SelectPicker from '../../components/layout/selectPicker'
import Pie from '../../components/charts/pie'

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
      pieData: [
        {
          item: "事例一",
          count: 40
        },
        {
          item: "事例二",
          count: 21
        },
        {
          item: "事例三",
          count: 17
        },
        {
          item: "事例四",
          count: 13
        },
        {
          item: "事例五",
          count: 9
        }
      ]
    }
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
    const { pieData } =this.state

    return (
      <Card
        style={{height: 520}}
        bordered={false}
        loading={interviewLoading}
        title={title}
        bodyStyle={{ paddingTop: 10 }}
        extra={ <SelectPicker title={['全部渠道', '线上', '门店']} onChangeSelect={this.onChangeSelect} /> }>
        <Pie
         data={pieData} />
      </Card>
    )
  }
}

export default connect(mapStoP, mapDispatchToProps)(ProportionSales)