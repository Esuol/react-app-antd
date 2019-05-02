/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import {Route, Switch} from 'react-router-dom'
// import Layout from '../layouts'
import route from '../router/users'

class App extends React.Component {

  render () {
    const routes = route.map(item => (
      <Route
       key={item.key}
       path={item.path}
       exact={item.exact}
       component={item.component}
      >
      </Route>
      ))
    return (
      <div>
        <Switch>
          {routes}
        </Switch>
      </div>

    )
  }
}

export default App
