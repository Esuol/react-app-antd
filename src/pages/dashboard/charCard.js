/* eslint-disable no-unused-vars */
import React from 'react'
import { Card } from 'antd';
import CardTitle from '../../components/layout/cardTitle'
import SaleCompare from './saleCompare'
import './index.less'


const charCard = React.memo( props => {
  const {title, icon, desNum, componentName, dayDesc} = props

  return (
    <section>
      <Card>
        <CardTitle title={title} icon={icon} />
        <h2 className="fontStyle-30">{desNum}</h2>
        {componentName === 'SaleCompare'
        ? <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '10px'}}>
            <SaleCompare desc="周同比" descNum="12%" descIcon="up-circle" color="#f5222d" />
            <SaleCompare desc="周同比" descNum="12%" descIcon="up-circle" color="#52c41a" />
          </div>
        : ''}
        <div className="line" />
        { componentName === 'activityProgress'
        ? <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '10px'}}>
            <SaleCompare desc="周同比" descNum="12%" descIcon="up-circle" color="#f5222d" />
            <SaleCompare desc="周同比" descNum="12%" descIcon="up-circle" color="#52c41a" />
          </div>
        : <p>{dayDesc}</p>}
      </Card>
    </section>
  )
})

export default charCard