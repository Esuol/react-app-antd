import React from 'react'
import { Drawer, Icon } from 'antd'
import styles from './index.less'

// eslint-disable-next-line react/prefer-stateless-function
class DrawerMenu extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)
  }

  render () {
    const { drawerVisible, closeDrawer } = this.props

    return (


        <Drawer
          title="Basic Drawer"
          placement='left'
          closable={false}
          onClose={ () => closeDrawer() }
          visible={drawerVisible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          { drawerVisible
          ? <Icon type="close" className={styles.drawerClose} onClick={() => closeDrawer() } />
          : ''}

        </Drawer>


    )
  }

}

export default DrawerMenu