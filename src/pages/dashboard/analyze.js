/* eslint-disable react/prefer-stateless-function */
import React,{Suspense} from 'react'
// import {Row, Col} from 'antd'
// import api from '../../services'
import GridContent from '../../components/pageWrapper/gridContent';
import Loading from '../../components/jumpLoading/jumpLoading'
import IntroduceRow from './IntroduceRow'

// const IntroduceRow = React.lazy(() => import('./IntroduceRow.js'));

// eslint-disable-next-line no-unused-vars
class Analyze extends React.Component {

  render () {
    return (
      <GridContent>
          <Suspense fallback={<Loading />}>
           <IntroduceRow />
         </Suspense>
      </GridContent>
    )
  }
}

export default Analyze