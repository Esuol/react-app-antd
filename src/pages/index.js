/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Layout from '../layouts'
import { globalRoute } from '../router'
import ScrollToTop from '../components/scrollToTop'

class App extends React.Component {

  render () {
    console.log(process.env.REACT_APP_MODE)
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
