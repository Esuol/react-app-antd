/* eslint-disable react/prefer-stateless-function */
import React,{Suspense} from 'react'
import {Row, Col} from 'antd'
// import api from '../../services'
import Loading from '../../components/jumpLoading/jumpLoading'

const IntroduceRow = React.lazy(() => import('./IntroduceRow.js'))
const SaleCard = React.lazy(() => import('./saleCard'))
const TopSearch = React.lazy(() => import('./topSearch'))

class Analyze extends React.Component {

  render () {
    return (
      <div>
        <Suspense fallback={<Loading />}>
          <IntroduceRow />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <SaleCard></SaleCard>
        </Suspense>

        <div style={{marginTop: '30px'}}>
          <Row gutter={24}>
              <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                <Suspense fallback={null}>
                  <TopSearch
                  title="线上热门搜索"
                  smallTitleFirst="总销售额"
                  smallTitleSecond="人均搜索次数"
                  icon="exclamation-circle"/>
                </Suspense>
              </Col>
              <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                <Suspense fallback={null}>

                </Suspense>
              </Col>
            </Row>
        </div>
      </div>

    )
  }
}

export default Analyze