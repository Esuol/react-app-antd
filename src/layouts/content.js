import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import { Layout } from 'antd'
import Monitor from '../pages/dashboard/monitor'
import Analyze from '../pages/dashboard/analyze'

const { Content } = Layout;

// eslint-disable-next-line react/prefer-stateless-function
export default class Contents extends React.Component {
  render () {
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
              <Route path="/dashboard/monitor" component={Monitor}></Route>
              <Route path="/dashboard/analyze" component={Analyze}></Route>
              <Redirect from="/" to="/dashboard/monitor" />
            </Switch>

          </Content>
    )
  }
}