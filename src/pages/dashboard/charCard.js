/* eslint-disable no-unused-vars */
import React from 'react'
import { Card } from 'antd';
import CardTitle from '../../components/layout/cardTitle'
import SaleCompare from './saleCompare'
import Progress from './progress'
import './index.less'


const charCard = React.memo( props => {
  const {title, icon, desNum, componentName, dayDesc} = props

  return (
    <section>
      <Card
      bordered={false}
      style={{borderRadius: '4px'}}>
        <CardTitle title={title} icon={icon} />
        <h2 className="fontStyle-30">{desNum}</h2>
        {componentName === 'SaleCompare'
        ? <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '10px', height: '30px'}}>
            <SaleCompare desc="周同比" descNum="12%" descIcon="up-circle" color="#f5222d" />
            <SaleCompare desc="周同比" descNum="12%" descIcon="up-circle" color="#52c41a" />
          </div>
        : ''}
        {componentName === 'activityProgress'
        ? <div style={{marginTop: '10px', height: '30px'}}>
            <Progress percent={90} strokeColor="rgb(19, 194, 194)" />
          </div>
        : ''}
        <div className="line" />
        { componentName === 'activityProgress'
        ? <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '10px', height: '20px'}}>
            <SaleCompare desc="周同比" descNum="12%" descIcon="up-circle" color="#f5222d" />
            <SaleCompare desc="周同比" descNum="12%" descIcon="up-circle" color="#52c41a" />
          </div>
        : <p style={{height: '20px'}}>{dayDesc}</p>}
      </Card>
    </section>
  )
})

export default charCard