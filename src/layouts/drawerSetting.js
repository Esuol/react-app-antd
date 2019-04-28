import React from 'react'
import { Drawer } from 'antd'
import { BlockPicker } from 'react-color'
import styles from './index.less'

// eslint-disable-next-line react/prefer-stateless-function
class DrawerSetting extends React.Component {

  handleChange = val => {
    console.log(val.hex)
  }

  render () {
    const {closeDrawerSetting, drawerSettingVisible } = this.props

    return (
        <Drawer
          placement='right'
          title="基础设置"
          closable
          width={240}
          onClose={ () => closeDrawerSetting() }
          visible={drawerSettingVisible}
        >
        <div className={styles.colorTheme}>
          <h2 className={styles.colorTitle}>主题色定制:</h2>
          <BlockPicker className={styles.colorPicker} onChange={this.handleChange} />
        </div>

        </Drawer>

    )
  }

}

export default DrawerSetting