import React from 'react'
import { Spin } from 'antd'
import { connect } from 'react-redux'
import styles from './index.css'

const mapStateToProps = state => {
  return {
    spinState: state.layoutReducers.spinState
  }
}

const spinLoading = React.memo( props => {
  const { spinState } = props
  console.log(spinState)

  return (
    <div className={styles.spin}>
      <Spin size="large" spinning={spinState} />
    </div>

  )
})

export default connect(mapStateToProps)(spinLoading)