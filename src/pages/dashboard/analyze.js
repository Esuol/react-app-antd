/* eslint-disable react/prefer-stateless-function */
import React,{Suspense} from 'react'
import {Row, Col} from 'antd'
// import api from '../../services'
import Loading from '../../components/jumpLoading/jumpLoading'

const IntroduceRow = React.lazy(() => import('./IntroduceRow.js'))
const SaleCard = React.lazy(() => import('./saleCard'))
const TopSearch = React.lazy(() => import('./topSearch'))
const ProportionSales = React.lazy(() => import('./ProportionSales'))

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

        <div style={{marginTop: '20px'}}>
          <Row gutter={24}>
              <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                <Suspense fallback={null}>
                  <TopSearch
                  className="topSearch"
                  title="线上热门搜索"
                  smallTitleFirst="总销售额"
                  smallTitleSecond="搜索次数"
                  icon="exclamation-circle"/>
                </Suspense>
              </Col>
              <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                <Suspense fallback={null}>
                  <div className="proportionSales">
                  <ProportionSales
                    title="销售额类别占比" />
                  </div>
                </Suspense>
              </Col>
            </Row>
        </div>
      </div>

    )
  }
}

export default Analyze