/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Layout from '../layouts'
import { globalRoute } from '../router'
import ScrollToTop from '../components/scrollToTop'
import FancyRoute from '../components/fancyRoute'

class App extends React.Component {

  render () {
    console.log(process.env.REACT_APP_MODE)
    const globalRoutes = globalRoute.map(item => (
      <FancyRoute {...item} />
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
