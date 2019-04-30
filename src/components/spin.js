import React from 'react'
import { Spin } from 'antd'
import { connect } from 'react-redux'
import actions from '../store/actions'
import styles from './index.css'


function mapStateToProps (state) {
  return {
    spinState: state.layoutReducers.spinState
  }
}

const mapDispatchToProps = {
  openspin: actions.layoutAction.openspin,
  closespin: actions.layoutAction.closespin
}

const spinLoading = React.memo( props => {
  console.log(props)
  return (
    <div className={styles.spin}>
      <Spin size="large" spinning />
    </div>

  )
})

export default connect(mapStateToProps, mapDispatchToProps)(spinLoading)