import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'antd'
import { analyizeAction } from '../../store/actions'
import api from '../../services/index'
import CardTitle from '../../components/layout/cardTitle'
import Areanull from '../../components/charts/Areanull'
import SearchData from './searchData'

function mapStoP(state){
  return {
   interviewLoading: state.analyizeReducer.interviewLoading
  }
 }

 const mapDispatchToProps = {
   modifyInterviewLoading:  analyizeAction.modifyInterviewLoading
 }

class TopSearch extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)
  }

  async componentDidMount () {
    const visitorData = await api.dataAnalyize.getSVisitorData()
    this.visitorData = visitorData.payload
    setTimeout(() => {
      this.ModifyInterviewLoading(false)
     },1000)
  }

  ModifyInterviewLoading = (data) => {
    const { modifyInterviewLoading } = this.props
    modifyInterviewLoading(data)
  }

  render () {
   const { interviewLoading, title, smallTitleFirst, smallTitleSecond, icon } = this.props

   return (
    <section>
      <Card
      bordered={false}
      bodyStyle={{ padding: 0 }}
      loading={interviewLoading}
      title={title}>
      <div className="topCardWrap">
        <section style={{width: '40%',margin: '20px'}}>
            <CardTitle title={smallTitleFirst} icon={icon} />
            <SearchData mainNumber="12,321" smallNumber={17.5} type="danger" />
            <Areanull
              isHasTypeLine
              height={50}
              isHasAxis={false}
              isHasLegend={false}
              visitorData={this.visitorData} />
          </section>
          <section style={{width: '40%', margin: '20px'}}>
            <CardTitle title={smallTitleSecond} icon={icon} />
            <SearchData mainNumber="121" smallNumber={23.5} type="success" />
            <Areanull
              isHasTypeLine
              height={50}
              isHasAxis={false}
              isHasLegend={false}
              visitorData={this.visitorData} />
          </section>
      </div>

      </Card>
    </section>
   )
  }
}
export default connect(mapStoP, mapDispatchToProps)(TopSearch)