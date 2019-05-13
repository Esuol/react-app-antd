import React from 'react'
import { Icon } from 'antd'
import './index.less'

export default React.memo (props => {
  const {desc, descNum, descIcon, color} = props
  return (
    <section className="saleCompare">
      <p style={{marginRight:'5px'}}>{desc}</p>
      <p style={{marginRight:'5px'}}>{descNum}</p>
      <Icon type={descIcon} style={{fontSize:'10px',marginTop: '5px',color}}/>
    </section>
  )
})