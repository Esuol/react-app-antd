import React, {Component} from 'react'
// import Animate from 'rc-animate';
import { Layout, Icon } from 'antd'
import RightHeader from './rightHeader'
import './index.less'


const { Header } = Layout

// eslint-disable-next-line react/prefer-stateless-function
class HeaderView extends Component {

  constructor (props) {
    super(props)
    this.state = {
      isShowSearch: true
    }
    this.searchMissed = this.searchMissedPar.bind(this)
  }



  clickHeader = () => {
    this.setState(() => ({isShowSearch: false}))
  }

  searchMissedPar = () => {
    this.setState(() => ({isShowSearch: true}))
  }

  render () {

    const { isShowSearch } = this.state
    const { collapsed, setParentState, currentWidth } = this.props

    return (
      <Header
      style={{ background: '#fff', padding: 0 }}
      className="header"
      onClick={this.clickHeader}>
      { currentWidth < 768
      ? ''
      : <Icon
        style={{ fontSize: 20, color: '#333' }}
        className="collapsed"
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={() => setParentState()}
      /> }
      <RightHeader isShowSearch={isShowSearch} searchMissed={this.searchMissed} />

    </Header>
    )
  }

}

export default HeaderView