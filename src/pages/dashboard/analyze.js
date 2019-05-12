/* eslint-disable react/prefer-stateless-function */
import React,{Suspense} from 'react'
// import {Row, Col} from 'antd'
// import api from '../../services'
import Loading from '../../components/jumpLoading/jumpLoading'

const IntroduceRow = React.lazy(() => import('./IntroduceRow.js'))
const SaleCard = React.lazy(() => import('./saleCard'))

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
      </div>

    )
  }
}

export default Analyze