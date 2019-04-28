import React from 'react'
import { Drawer } from 'antd'
import styles from './index.less'

// eslint-disable-next-line react/prefer-stateless-function
class DrawerSetting extends React.Component {
  render () {
    const {closeDrawerSetting, drawerSettingVisible } = this.props

    return (
        <Drawer
          placement='right'
          title="基础设置"
          closable
          width={300}
          onClose={ () => closeDrawerSetting() }
          visible={drawerSettingVisible}
        >
         <p className={styles.p}>setting</p>
        </Drawer>

    )
  }

}

export default DrawerSetting