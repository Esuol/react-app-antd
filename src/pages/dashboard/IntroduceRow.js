/* eslint-disable no-unused-vars */
import React from 'react'
import { Row, Col, Icon, Tooltip } from 'antd';
import CharCard from './charCard'
import CardTitle from '../../components/layout/cardTitle'

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
};


export default React.memo( () => {
  return (
    <Row gutter={24}>
      <Col {...topColResponsiveProps}>
        <CharCard
        title="总销售额"
        icon="exclamation-circle"
        desNum="¥ 126,560"
        componentName="SaleCompare"
        dayDesc="日销售额￥12,423" />
      </Col>
      <Col {...topColResponsiveProps}>
        <CharCard
        title="访问量"
        icon="exclamation-circle"
        desNum="884,6"
        componentName="dayVisitChart"
        dayDesc="日访问量1,234" />
      </Col>
      <Col {...topColResponsiveProps}>
        <CharCard
        title="支付笔数"
        icon="exclamation-circle"
        desNum="656,0"
        componentName="payChart"
        dayDesc="转化率60%" />
      </Col>
      <Col {...topColResponsiveProps}>
        <CharCard
        title="运营活动效果"
        icon="exclamation-circle"
        desNum="78%"
        componentName="activityProgress"
        dayDesc="日销售额￥12,423" />
      </Col>
    </Row>
  )
})