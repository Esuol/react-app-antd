/* eslint-disable array-callback-return */
import React from 'react'
import { Drawer, Icon } from 'antd'
import { TwitterPicker } from 'react-color'
import ThemePicker from '../components/colorPicker'
import styles from './index.css'

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
    this.themeCostom(val, name)
  }

  selectCurrentColor = (val, name) => {
    this.themeCostom(val, name)
  }

  themeCostom = (val, name) => {
    const { themeColor } = this.state
    themeColor.map(item => {
      if(item.name === name) item.color = val.hex
    })
    this.setState(() => ({themeColor}), () => {
     const theme = this.arrayToObj({'@primary-color': '#28a745'})
     window.less.modifyVars(theme)
     .then(() => {console.log('success')})
        .catch(error => {
            console.log(error);
        });
    })
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
        <ThemePicker selectColor={this.selectColor} className="huePicker" color={item.color} name={item.name} />
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