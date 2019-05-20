/* eslint-disable import/no-unresolved */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import { connect } from 'react-redux'
import { Card, Tabs, Row, Col } from 'antd';
import api from '@/services/index'
import { analyizeAction } from '@/store/actions'
import Pie from '@/components/charts/pie'
import TimelineChart from '@/components/charts/timeLineChart'
import timeData from '@/components/charts/timeLineChart/data'

const { TabPane } = Tabs
const ftStyle = { color: 'rgba(0, 0, 0, 0.45)',
                  fontSize: '14px',
                  lineHeight: '22px',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  wordBreak: 'break-all',
                  marginBottom: '20px',
                  marginTop: '20px' }

const CustomTab = ({ data, currentTabKey: currentKey, pieData }) => (
  <Row gutter={8} style={{ width: 138, margin: '8px 0' }}>
    <Col span={12}>
     <section>
      <h4>{data.name}</h4>
      <div style={{display: 'flex', flexDirection: 'column', cursor: 'none'}}>
        <span style={ftStyle}>转化率</span>
        <span style={ftStyle}>{`${data.cvr }%`}</span>
      </div>
     </section>
    </Col>
    <Col span={12} style={{ paddingTop: 36 }}>
        <Pie
         label={false}
         toolTip={false}
         innerRadius={1.8}
         radius={1}
         margin={[0, 0, 0, 0]}
         padding={[0, 40, 0, 40]}
         data={pieData}
         height={65} />
    </Col>
  </Row>
);

const mapStoP = state => {
  return {
    interviewLoading: state.analyizeReducer.interviewLoading
  }
}

const mapDis = {
  modifyInterviewLoading:  analyizeAction.modifyInterviewLoading
}

class OfflineData extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      pieData: []
    }
  }

  async componentWillMount () {
    const pieData = await api.dataAnalyize.pieDataSmall()
    this.setState( () => ({pieData: pieData.payload}) )

    setTimeout(() => {
      this.ModifyInterviewLoading(false)
     },1000)
  }

  ModifyInterviewLoading = (data) => {
    const { modifyInterviewLoading } = this.props
    modifyInterviewLoading(data)
  }

  render () {
    const { interviewLoading, offlineData } = this.props
    const { pieData } = this.state
    const defaultKey = offlineData[0].name

    return (
      <Card
      loading={interviewLoading}
      bordered={false}
      style={{ marginTop: 32 }}
    >
      <Tabs activeKey={defaultKey}>
        {offlineData.map(item => (
          <TabPane tab={<CustomTab data={item} currentTabKey={defaultKey} pieData={pieData} />} key={item.name}>
            <div style={{ padding: '0 24px' }}>
              <TimelineChart
                name={['year','value']}
                type='line'
                height={400}
                data={timeData}
              />
            </div>
          </TabPane>
        ))}
      </Tabs>
    </Card>
    )
  }
}

export default connect(mapStoP, mapDis)(OfflineData)

