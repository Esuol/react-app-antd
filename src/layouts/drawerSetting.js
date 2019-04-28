import React from 'react'
import { Drawer, Icon } from 'antd'
import { TwitterPicker } from 'react-color'
import ThemePicker from '../components/colorPicker'
import styles from './index.less'

// eslint-disable-next-line react/prefer-stateless-function
class DrawerSetting extends React.Component {

  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
     themeColor: [
      {name: '@secondry-color', color: '#ddd'},
      {name: '@primary-color', color: '#1890ff'},
      {name: '@link-color', color: '#1890ff'},
      {name: '@text-color-secondary', color: '#333'},
      {name: '@heading-color', color: '#ccccdd'},
      {name: '@secondary-color', color:  '#0000ff'},
      {name: '@layout-header-background', color:  '#001529'},
      {name: '@btn-primary-bg', color: '#397dcc'},
      {name: '@bg-color', color: '#dddddd'}
     ]
    }
    this.selectColor = this.selectCurrentColor.bind(this)
  }

  handleChange = (val,name) => {
    const { themeColor } = this.state
    // eslint-disable-next-line array-callback-return
    themeColor.map(item => {
      if(item.name === name) item.color = val.hex
    })
    this.setState(() => ({themeColor}), () => {
     const theme = this.arrayToObj(themeColor)
     console.log(theme)
     window.less.modifyVars(theme)
    })
  }

  selectCurrentColor = val => {
    console.log(val.hex)
  }

  arrayToObj = (arr) => {
    const obj = {}
    for (let i = 0; i < arr.length; i+=1) {
      obj[arr[i].name] = arr[i].color
    }
    return obj
  }

  render () {
    const {closeDrawerSetting, drawerSettingVisible, openDrawerSetting } = this.props
    const { themeColor } = this.state
    const selectTheme = themeColor.map((item) =>
      <div key={item.name} className={styles.colorTheme}>
        <h2 className={styles.colorPickers}>{item.name}:</h2>
        <ThemePicker selectColor={this.selectColor} className="huePicker" />
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
          <TwitterPicker className={styles.colorPicker} onChange={(val) => this.handleChange(val,'@primary-color')} />
          {selectTheme}
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