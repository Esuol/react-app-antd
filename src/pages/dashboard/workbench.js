/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { Row, Col, Card, Avatar } from 'antd';
import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import './workbench.less'
import { workBenchCardList } from '../../const/dashboard'

class WorkBentch extends React.Component {

  render () {
    const pageHeaderContent = (
      <div>
        <p className="f20px title">早安，Berlin，祝你开心工作每一天！</p>
        <p>陌生人，我也为你祝福 愿你有一个灿烂的前程 愿你有情人终成眷属 愿你在尘世获的幸福</p>
      </div>
    )

    const extraContent = (
      <div className='extraContent'>
        <div className='statItem'>
          <p>姓名</p>
          <p>Berlin</p>
        </div>
        <div className='statItem'>
          <p>爱好</p>
          <p>
            健身<span>/Code</span>
          </p>
        </div>
        <div className='statItem'>
          <p>项目访问</p>
          <p>2,223</p>
        </div>
      </div>
    )

    return (
      <PageHeader
        content={pageHeaderContent}
        extraContent={extraContent}>
        <Row gutter={24} style={{ marginTop: 24 }}>
          <Col xl={16} lg={24} md={24} sm={24} xs={24}>
            <Card title="海子的诗集" extra={<Link to="/">全部项目</Link>}>
              {workBenchCardList.map(item =>
                 <Card.Grid key={item.id}>
                    <Card bodyStyle={{ padding: 0 }} bordered={false}>
                      <Card.Meta
                          avatar={<Avatar src={item.avtar} />}
                          title={item.title}
                          description={item.content}
                        />
                        <div className='projectItemContent'>
                            <span className='datetime' title={item.updatedAt}>
                              {item.time}
                            </span>
                        </div>
                    </Card>
                  </Card.Grid>
                )}

            </Card>
          </Col>
          <Col xl={8} lg={24} md={24} sm={24} xs={24}> 1 </Col>
        </Row>
      </PageHeader>
    )
  }
}

export default WorkBentch