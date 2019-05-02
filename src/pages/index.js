/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Layout from '../layouts'
import { globalRoute } from '../router'

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
      <Switch>
        { globalRoutes }
        <Route path='/' component={Layout}/>
      </Switch>
    )
  }
}

export default App
