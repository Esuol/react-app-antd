import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { layoutAction } from '../store/actions'

const mapDispatchToProps = {
  modifyPrevPath:  layoutAction.modifyPrevPath
}

function mapStateToProps (state) {
  return {
    prevPath: state.layoutReducer.prevPath
  }
}

class ScrollToTop extends Component {

  componentDidUpdate(prevProps) {
    this.modifyPrevpath(prevProps.location.pathname)
    const {location} = this.props
      if (location !== prevProps.location) {
        window.scrollTo(0, 0)
      }
  }

  modifyPrevpath = (data) => {
    const { modifyPrevPath } = this.props
    modifyPrevPath(data)
  }

  render() {
    const {children} = this.props
      return children
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ScrollToTop));