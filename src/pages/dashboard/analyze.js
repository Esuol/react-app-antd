/* eslint-disable react/prefer-stateless-function */
import React,{Suspense} from 'react'
// import {Row, Col} from 'antd'
// import api from '../../services'
import Loading from '../../components/jumpLoading/jumpLoading'

const IntroduceRow = React.lazy(() => import('./IntroduceRow.js'));

class Analyze extends React.Component {

  render () {
    return (
      <Suspense fallback={<Loading />}>
        <IntroduceRow />
      </Suspense>
    )
  }
}

export default Analyze