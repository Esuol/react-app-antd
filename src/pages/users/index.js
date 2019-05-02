import React from 'react'
import { Route, Switch} from 'react-router-dom'
import noLayout from '../../router/users'

const noLayoutRoutes = noLayout.map(item => (
  <Route
   key={item.key}
   path={item.path}
   exact={item.exact}
   component={item.component}
  >
  </Route>
))

const noLayoutRoute = React.memo(() => {
  return (
    <Switch>
      {noLayoutRoutes}
    </Switch>
  )
})

export default noLayoutRoute
