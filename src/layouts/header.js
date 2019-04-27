import React, {Component} from 'react'
import { Layout, Icon } from 'antd'
import styles from './index.less'

const { Header } = Layout

// eslint-disable-next-line react/prefer-stateless-function
class HeaderView extends Component {

  render () {
    const { collapsed, setParentState } = this.props
    return (
      <Header style={{ background: '#fff', padding: 0 }}>
      <Icon
        style={{ fontSize: 20, color: '#333' }}
        className={styles.collapsed}
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={() => setParentState()}
      />
    </Header>
    )
  }

}

export default HeaderView