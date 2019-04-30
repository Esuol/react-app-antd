/* eslint-disable array-callback-return */
import React from 'react'
import { Drawer, Icon } from 'antd'
import { TwitterPicker } from 'react-color'
import ThemePicker from '../components/colorPicker'
import PxSelects from '../components/pxSelect'
import styles from './index.css'
import api from '../services/index'

// eslint-disable-next-line react/prefer-stateless-function
class DrawerSetting extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
     themeColor: [
      {name: '@secondry-color', color: '#ddd'},
      {name: '@primary-color', color: '#1890ff'},
      {name: '@link-color', color: '#1890ff'},
      {name: '@text-color-secondary', color: '#333'},
      {name: '@heading-color', color: '#333'},
      {name: '@layout-header-background', color:  '#001529'},
      {name: '@layout-body-background', color:  '#f0f2f5'},
      {name: '@btn-primary-bg', color: '#397dcc'},
      {name: '@bg-color', color: '#dddddd'}
     ],
     themePx: [
      {name: '@font-size-base', px: '14px'},
      {name: '@border-radius-base', px: '4px'}
    ]
    }
    this.selectColor = this.selectCurrentColor.bind(this)
    this.onSelect = this.selectPx.bind(this)
  }

  handleChange = (val,name) => {
    this.themeCostom(val, name)
  }

  selectCurrentColor = (val, name) => {
    this.themeCostom(val, name)
  }

  themeCostom = (val, name) => {
    const { themeColor, themePx } = this.state
    const { beginmodifyTheme, themeModified } = this.props
    if(Array.isArray(name)) {
      themeColor.map(item => {
        if(name.includes(item.name)) item.color = val.hex
      })
    } else {
      themeColor.map(item => {
        if(item.name === name) item.color = val.hex
      })
    }
    beginmodifyTheme()
    this.setState(() => ({themeColor}), () => {
     const theme = this.arrayToObj(themeColor, 'color')
     window.less.modifyVars(theme)
     .then(() => {
      themeModified()
      })
    .catch(error => {
      console.log(error);
    });
    const allTheme = [...themeColor, ...themePx]
    api.exportLess(allTheme)
    })
  }

  selectPx = (val, name) => {
    this.themePxCuotom(val, name)
  }

  themePxCuotom = (val, name) => {
    const { themeColor, themePx } = this.state
    themePx.map(item => {
      if(item.name === name) item.px = `${val}px`
    })
    this.setState(() => ({themePx}), () => {
      const theme = this.arrayToObj(themePx, 'px')
      window.less.modifyVars(theme)
      .then(() => {

      })
      .catch(error => {
          console.log(error);
      });
      const allTheme = [...themeColor, ...themePx]
      api.exportLess(allTheme)
    })
  }

  arrayToObj = (arr, arg) => {
    const obj = {}
    for (let i = 0; i < arr.length; i+=1) {
      obj[arr[i].name] = arr[i][arg]
    }
    return obj
  }

  render () {
    const {closeDrawerSetting, drawerSettingVisible, openDrawerSetting } = this.props

    const { themeColor, themePx } = this.state

    const primaryCustom = [ '@secondry-color',
                            '@primary-color',
                            '@link-color',
                            '@btn-primary-bg',
                            '@bg-color'
                          ]

    const selectTheme = themeColor.map((item) =>
      <div key={item.name} className={styles.colorTheme}>
        <h2 className={styles.colorPickers}>{item.name}:</h2>
        <ThemePicker selectColor={this.selectColor} className="huePicker" color={item.color} name={item.name} closeDrawerSetting={closeDrawerSetting} />
      </div>
    )

    const PxSelect = themePx.map((item) =>
    <div key={item.name} className={styles.colorTheme}>
      <h2 className={styles.colorPickers}>{item.name}:</h2>
     <PxSelects currentPx={item.px.length === 3 ? item.px.slice(0, 1) - 0 : item.px.slice(0, 2) - 0 } name={item.name} onSelect={this.selectPx} />
    </div>
    )

    return (
      <div style={{position: 'relative'}}>
        <Drawer
          placement='right'
          title="基础设置"
          closable
          width={325}
          onClose={ () => closeDrawerSetting() }
          visible={drawerSettingVisible}
        >
        <div>
          <h2 className={styles.colorTitle}>主题色定制:</h2>
          <TwitterPicker className={styles.colorPicker} onChange={(val) => this.handleChange(val,primaryCustom)} />
          {selectTheme}
          {PxSelect}
        </div>
        {drawerSettingVisible
        ? <Icon type="close" className={styles.DrawerSettingColse} onClick={ () => closeDrawerSetting() } />
        : <Icon type="setting" className={styles.DrawerSettingColse} onClick={ () => openDrawerSetting() } />}
        </Drawer>
      </div>
    )
  }

}

export default DrawerSetting