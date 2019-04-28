/* eslint-disable react/no-find-dom-node */
import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Icon } from 'antd';
import move from 'move-js'
import classNames from 'classnames'
import SideMenu from './sideMenu'
import HeaderView from './header'
import Content from './content'
import DrawerMenu from './drawerMenu'
import DrawerSetting from './drawerSetting'
import styles from './index.less';

class SiderDemo extends React.Component {
  constructor (props) {
    super(props)
    this.setParentState = this.toggle.bind(this);
    this.closeDrawer = this.closeDrawerPar.bind(this)
    this.closeDrawerSetting = this.closeDrawerSettingPar.bind(this)
  }

  state = {
    collapsed: false,
    currentWidth: document.body.clientWidth,
    drawerVisible: false,
    drawerSettingVisible: false
  };

  componentDidMount () {
    window.addEventListener('resize', this.resizeBind)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.resizeBind)
  }

  resizeBind = () => {
    this.setState(() => ({ currentWidth: document.body.clientWidth }), () => {
      const { currentWidth, drawerVisible } = this.state
      if(currentWidth > 768) this.moveLeft()
      else if(drawerVisible) this.moveRight()
      else this.moveLeft()
    })
  }

  moveRight = () => {
    move(ReactDOM.findDOMNode(this.mainPage))
    .to(200, 0)
    .end()
  }

  moveLeft = () => {
    move(ReactDOM.findDOMNode(this.mainPage))
    .to(0, 0)
    .end()
  }

  toggle = () => {
    this.setState(prevState => ({ collapsed: !prevState.collapsed }));
  };

  showDrawerMenu = () => {
   this.moveRight()
   this.setState( prevState => ({ drawerVisible: !prevState.drawerVisible}))
  }

  closeDrawerPar = () => {
    this.moveLeft()
    this.setState( prevState => ({ drawerVisible: !prevState.drawerVisible}))
  }

  showDrawerSetting = () => {
    this.setState( prevState => ({ drawerSettingVisible: !prevState.drawerSettingVisible}))
  }

  closeDrawerSettingPar = () => {
    this.setState( prevState => ({ drawerSettingVisible: !prevState.drawerSettingVisible}))
  }

  render() {
    const { collapsed, currentWidth, drawerVisible, drawerSettingVisible } = this.state;
    const DrawerSettingStyle = classNames(styles.setting, {
      [styles.settingDrawerMenu]: drawerVisible,
      [styles.settingNoDrawerMenu]: !drawerVisible,
    });
    return (
      <Layout>
        {currentWidth < 768
        ? <div className={styles.iconWrap}>
            <Icon type="bars" onClick={this.showDrawerMenu} style={{fontSize: '20px',width: '100%', textAlign: 'center', lineHeight: '30px'}} />
            <DrawerMenu drawerVisible={drawerVisible} closeDrawer={this.closeDrawer} collapsed={collapsed} />
          </div>
        : <SideMenu trigger={null} collapsed={collapsed} /> }
        <Layout ref={node => {this.mainPage = node}}>
          <HeaderView collapsed={collapsed} currentWidth={currentWidth} setParentState={this.setParentState} />
          <Content />
          <Icon type="setting" onClick={this.showDrawerSetting} className={DrawerSettingStyle} />
          <DrawerSetting drawerSettingVisible={drawerSettingVisible} closeDrawerSetting={this.closeDrawerSetting} />
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;
