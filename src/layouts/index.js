import React from 'react';
import { Route } from 'react-router-dom'
import { Layout } from 'antd';

import SideMenu from './sideMenu'
import HeaderView from './header'

import Monitor from '../pages/dashboard/monitor'
import Analyze from '../pages/dashboard/analyze'
import './index.less';

const { Content } = Layout;

class SiderDemo extends React.Component {
  constructor (props) {
    super(props)
    this.setParentState = this.toggle.bind(this);
  }

  state = {
    collapsed: false
  };

  toggle = () => {
    console.log(1)
    this.setState(prevState => ({ collapsed: !prevState.collapsed }));
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout>
        <SideMenu trigger={null} collapsed={collapsed} />
        <Layout>
          <HeaderView collapsed={collapsed} setParentState={this.setParentState} />
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280
            }}
          >
            <Route path="/dashboard/monitor" component={Monitor} exact></Route>
            <Route path="/dashboard/analyze" component={Analyze} exact></Route>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;
