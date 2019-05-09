import React from 'react'
import { Progress } from 'antd'

export default React.memo( props => {
  const { percent, strokeColor } = props
  return (
    <Progress percent={percent} strokeColor={strokeColor} />
  )
})