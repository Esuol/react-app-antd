/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import PageHeader from '../../components/PageHeader'

class WorkBentch extends React.Component {

  render () {
    const pageHeaderContent = (
      <div>
        <p>早安，Berlin，祝你开心工作每一天！</p>
        <p>陌生人，我也为你祝福 愿你有一个灿烂的前程 愿你有情人终成眷属 愿你在尘世获的幸福</p>
      </div>
    )

    const extraContent = (
      <div>yes</div>
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