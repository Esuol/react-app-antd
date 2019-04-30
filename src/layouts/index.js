/* eslint-disable react/no-find-dom-node */
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { Layout, Icon, message } from 'antd';
import move from 'move-js'
import classNames from 'classnames'
import { layoutAction } from '../store/actions'
import SideMenu from './sideMenu'
import HeaderView from './header'
import Content from './content'
import DrawerMenu from './drawerMenu'
import DrawerSetting from './drawerSetting'
import SpinLoading from '../components/spin'
import styles from './index.css';

const isEnv = process.env.NODE_ENV === 'development'

function mapStateToProps (state) {
  return {
    spinState: state.layoutReducers.spinState
  }
}

const mapDispatchToProps = {
  openspin:  layoutAction.openspin,
  closespin: layoutAction.closespin
}

class SiderDemo extends React.Component {
  constructor (props) {
    super(props)
    this.setParentState = this.toggle.bind(this);
    this.closeDrawer = this.closeDrawerPar.bind(this)
    this.closeDrawerSetting = this.closeDrawerSettingPar.bind(this)
    this.openDrawerSetting= this.showDrawerSetting.bind(this)
    this.themeModified = this.themeModifiedPar.bind(this)
    this.beginmodifyTheme = this.beginmodifyThemePar.bind(this)
  }

  state = {
    collapsed: false,
    currentWidth: document.body.clientWidth,
    drawerVisible: false,
    drawerSettingVisible: false
  };

  componentDidMount () {
    if(document.body.clientWidth === 0) {
      setTimeout(() => {
        this.setState( () => ({currentWidth: document.body.clientWidth}))
      },100)
      window.addEventListener('resize', this.resizeBind)
    }
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

  closeSpin = () => {
    const { closespin } = this.props
    closespin()
  }

  openSpin = () => {
    const { openspin } = this.props
    openspin()
  }

  beginmodifyThemePar = () => {
    this.openSpin()
  }

  themeModifiedPar = () => {
    setTimeout(() => {
      this.closeSpin()
      message.success('换肤成功，到theme.js查看配置')
    }, 300);

  }

  render() {
    const { collapsed, currentWidth, drawerVisible, drawerSettingVisible } = this.state;

    const DrawerSettingStyle = classNames(styles.setting, {
      [styles.settingDrawerMenu]: drawerVisible,
      [styles.settingNoDrawerMenu]: !drawerVisible,
    });

    return (
      <Layout style={{height:"100vh"}}>
        {currentWidth < 768
        ? <div>
            {!drawerVisible
            ? <div className={styles.iconWrap}>
                <Icon type="bars" onClick={this.showDrawerMenu} style={{fontSize: '20px',width: '100%', textAlign: 'center', lineHeight: '30px', color: '#333'}} />
              </div>
            : ''}
            <DrawerMenu drawerVisible={drawerVisible} closeDrawer={this.closeDrawer} collapsed={collapsed} />
          </div>
        : <SideMenu trigger={null} collapsed={collapsed} /> }
        <Layout ref={node => {this.mainPage = node}}>
          <SpinLoading />
          <HeaderView collapsed={collapsed} currentWidth={currentWidth} setParentState={this.setParentState} />
          <Content />
          {isEnv
          ? <Icon type="setting" onClick={this.showDrawerSetting} className={DrawerSettingStyle} />
          : ''}
          {isEnv
          ? <DrawerSetting
          drawerSettingVisible={drawerSettingVisible}
          closeDrawerSetting={this.closeDrawerSetting}
          openDrawerSetting = {this.openDrawerSetting}
          themeModified = {this.themeModified}
          beginmodifyTheme={this.beginmodifyTheme} />
          : ''}
        </Layout>
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SiderDemo);
