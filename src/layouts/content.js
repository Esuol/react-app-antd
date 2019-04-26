/* eslint-disable array-callback-return */
import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import { Layout } from 'antd'
import sidebarData from '../router'

const { Content } = Layout;

function handleRoute(arr) {
  let newArr = []
  arr.map((item) => {
    if(item.children && item.children.length > 0) {
      newArr = [...newArr, ...item.children]
    }
  })
  return newArr
 }

 const childrenArr = handleRoute(sidebarData)

// eslint-disable-next-line react/prefer-stateless-function
export default class Contents extends React.Component {
  render () {
    const routes = childrenArr.map(item => (
      <Route
       key={item.key}
       path={item.path}
       exact={item.exact}
       component={item.component}
      >
      </Route>
      ))
    return (
      <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280
            }}
          >
            <Switch>
              {routes}
              <Redirect from="/" to="/dashboard/monitor" />
            </Switch>

          </Content>
    )
  }
}