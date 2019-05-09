/* eslint-disable no-unused-vars */
import React from 'react'
import { Card } from 'antd';
import CardTitle from '../../components/layout/cardTitle'
import './index.less'


const charCard = React.memo( props => {
  const {title, icon, desNum} = props

  return (
    <section>
      <Card>
        <CardTitle title={title} icon={icon} />
        <h2 className="fontStyle-30">{desNum}</h2>
        <div className="line"/>
      </Card>
    </section>
  )
})

export default charCard