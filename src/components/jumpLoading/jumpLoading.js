import React from 'react'
import { connect } from 'react-redux'
import './index.less'

const mapStateToProps = state => {
  return {
    spinState: state.layoutReducers.spinState
  }
}

const jumpLoading = React.memo( props => {
  const { spinState } = props
  return (
    <div className="slice">
      {spinState
      ? <div className="jump"></div>
      : ''}

    </div>

  )
})

export default connect(mapStateToProps)(jumpLoading)