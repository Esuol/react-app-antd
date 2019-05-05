/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import Layout from '../layouts'
import { globalRoute } from '../router'
import ScrollToTop from '../components/scrollToTop'

@withRouter
class App extends React.Component {

  render () {
    const globalRoutes = globalRoute.map(item => (
      <Route
       key={item.key}
       path={item.path}
       exact={item.exact}
       component={item.component}
      >
      </Route>
      ))
    return (
      <ScrollToTop>
        <Switch>
            { globalRoutes }
            <Route path='/' component={Layout}/>
        </Switch>
      </ScrollToTop>
    )
  }
}

export default App
