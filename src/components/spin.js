import React from 'react'
import { Spin } from 'antd'
import styles from './index.css'

const spinLoading = React.memo( () => {
  return (
    <div className={styles.spin}>
      <Spin size="large" spinning />
    </div>

  )
})

export default spinLoading