/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Layout, Icon } from 'antd';
import SideMenu from './sideMenu'
import HeaderView from './header'
import Content from './content'
import DrawerMenu from './drawerMenu'
import styles from './index.less';

class SiderDemo extends React.Component {
  constructor (props) {
    super(props)
    this.setParentState = this.toggle.bind(this);
    this.closeDrawer = this.closeDrawerPar.bind(this)
  }

  state = {
    collapsed: false,
    currentWidth: document.body.clientWidth,
    drawerVisible: true
  };

  componentDidMount () {
    window.addEventListener('resize', this.resizeBind)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.resizeBind)
  }

  resizeBind = () => {
    this.setState(() => ({ currentWidth: document.body.clientWidth }))
  }

  toggle = () => {
    this.setState(prevState => ({ collapsed: !prevState.collapsed }));
  };

  showDrawerMenu = () => {
   this.setState( prevState => ({ drawerVisible: !prevState.drawerVisible}))
  }

  closeDrawerPar = () => {
    this.setState( prevState => ({ drawerVisible: !prevState.drawerVisible}))
  }

  render() {
    const { collapsed, currentWidth, drawerVisible } = this.state;
    return (
      <Layout>
        {currentWidth < 768
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        ? <div className={styles.iconWrap}>
            <Icon type="bars" onClick={this.showDrawerMenu} style={{fontSize: '20px',width: '100%', textAlign: 'center', lineHeight: '30px'}} />
            <DrawerMenu drawerVisible={drawerVisible} closeDrawer={this.closeDrawer} />
          </div>
        : <SideMenu trigger={null} collapsed={collapsed} />}
        <Layout>
          <HeaderView collapsed={collapsed} currentWidth={currentWidth} setParentState={this.setParentState} />
          <Content />
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;
