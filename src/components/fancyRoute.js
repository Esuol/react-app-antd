import React from 'react'
import { Route } from 'react-router-dom'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import './index.less'

NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

class FancyRoute extends React.Component {
  componentWillMount () {
    NProgress.start()
    NProgress.set(0.4)
  }

  componentDidMount () {
    NProgress.done()
  }

  render () {
    return (
      <Route {...this.props} />
    )
  }
}

export default FancyRoute

