import React, {Component} from 'react'
// import Animate from 'rc-animate';
import { Layout, Icon } from 'antd'
import RightHeader from './rightHeader'
import './index.less'


const { Header } = Layout

// eslint-disable-next-line react/prefer-stateless-function
class HeaderView extends Component {

  render () {
    const { collapsed, setParentState, currentWidth } = this.props
    return (
      <Header style={{ background: '#fff', padding: 0 }} className="header" >
      { currentWidth < 768
      ? ''
      : <Icon
        style={{ fontSize: 20, color: '#333' }}
        className="collapsed"
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={() => setParentState()}
      /> }
      <RightHeader />

    </Header>
    )
  }

}

export default HeaderView