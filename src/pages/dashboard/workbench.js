/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import PageHeader from '../../components/PageHeader'
import './workbench.less'

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
          <p>项目数</p>
          <p>56</p>
        </div>
        <div className='statItem'>
          <p>团队内排名</p>
          <p>
            8<span> / 24</span>
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
        <div>111</div>
      </PageHeader>
    )
  }
}

export default WorkBentch