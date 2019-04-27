import React from 'react';
import { Layout } from 'antd';

import SideMenu from './sideMenu'
import HeaderView from './header'
import Content from './content'

import './index.less';



class SiderDemo extends React.Component {
  constructor (props) {
    super(props)
    this.setParentState = this.toggle.bind(this);
  }

  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState(prevState => ({ collapsed: !prevState.collapsed }));
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout>
        <SideMenu trigger={null} collapsed={collapsed} />
        <Layout>
          <HeaderView collapsed={collapsed} setParentState={this.setParentState} />
          <Content />
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;
