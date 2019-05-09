import React from 'react'
import { Icon } from 'antd';
import './index.less'

const cardTitle = React.memo( props => {
  const {title, icon} = props
  return (
    <section className="fontStyle-14 wraps" >
      <p>{title}</p>
      <Icon type={icon} />
    </section>
  )
})

export default cardTitle