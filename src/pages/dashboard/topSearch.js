import React from 'react'
import { connect } from 'react-redux'
import { Card, Row, Col, Table } from 'antd'
import { analyizeAction } from '../../store/actions'
import api from '../../services/index'
import CardTitle from '../../components/layout/cardTitle'
import Areanull from '../../components/charts/Areanull'
import SearchData from './searchData'

const columns = [
  {
    title: '排名',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: '搜索关键词',
    dataIndex: 'keyword',
    key: 'keyword',
    render: text => <a href="/">{text}</a>,
  },
  {
    title: '用户数',
    dataIndex: 'count',
    key: 'count',
    sorter: (a, b) => a.count - b.count
  },
  {
    title: '周涨幅',
    titleAlign: 'left',
    dataIndex: 'range',
    key: 'range',
    sorter: (a, b) => a.range - b.range,
    render: (text, record) => {
      const type = record.status === 1 ? 'danger' : 'success'
      return (
        <div style={{ display: 'flex' }}>
          <p>{ `${record.range}%` }</p>
          <div className={type === 'danger' ? 'searchDataWrapPullDanger' : 'searchDataWrapPullSuccess'}></div>
        </div>

      )
    },
    align: 'left',
  },
];

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
    this.state = {
      visitorData: [],
      searchList: []
    }
  }

  async componentDidMount () {
    const visitorData = await api.dataAnalyize.getSVisitorData()
    const searchList = await api.dataAnalyize.searchList()

    this.setState(() => ({
      visitorData: visitorData.payload,
      searchList: searchList.payload
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
   const { interviewLoading, title, smallTitleFirst, smallTitleSecond, icon } = this.props
   const { searchList, visitorData } = this.state

   return (
    <section>
      <Card
      style={{height: 520}}
      bordered={false}
      bodyStyle={{ padding: 0 }}
      loading={interviewLoading}
      title={title}>
      <div className="topCardWrap">
        <Row gutter={24} style={{width: '100%'}}>
            <Col sm={12} xs={24}>
              <section style={{margin: '20px'}}>
                  <CardTitle title={smallTitleFirst} icon={icon} />
                  <SearchData mainNumber="12,321" smallNumber={17.5} type="danger" />
                  <Areanull
                    isHasTypeLine
                    height={50}
                    isHasAxis={false}
                    isHasLegend={false}
                    data={this.visitorData} />
                </section>
              </Col>
              <Col sm={12} xs={24}>
              <section style={{ margin: '20px'}}>
                <CardTitle title={smallTitleSecond} icon={icon} />
                <SearchData mainNumber="121" smallNumber={23.5} type="success" />
                <Areanull
                  isHasTypeLine
                  height={50}
                  isHasAxis={false}
                  isHasLegend={false}
                  data={visitorData} />
              </section>
              </Col>
          </Row>
        </div>
        <Table
         style={{marginBottom: '10px'}}
         dataSource={searchList}
         rowKey={record => record.index}
         size="small"
         columns={columns}
         pagination={{
           style: { marginBottom: 0 },
           pageSize: 5,
         }}
        />
      </Card>
    </section>
   )
  }
}

export default connect(mapStoP, mapDispatchToProps)(TopSearch)