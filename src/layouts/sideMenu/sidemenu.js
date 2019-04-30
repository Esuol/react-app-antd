/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { Layout, Menu, Icon, Avatar } from 'antd';

import sidebarData from '../../router'
import logo from '../../assets/images/logo.png'
import './index.less'

// import classNames from 'classnames';
// import styles from './index.less'

const { Sider } = Layout
const { SubMenu, Item } = Menu

// eslint-disable-next-line react/prefer-stateless-function
@withRouter
class SideMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      openKeys: [],
      selectedKeys: []
    }
  }

  setDefaultActiveItem = ({ location }) => {
    let { pathname } = location;
    pathname = pathname === '/' ? '/dashboard/monitor' : pathname
    sidebarData.map(item => {
        // 因为菜单只有二级,简单的做个遍历就可以了
        if (item.children && item.children.length > 0) {
            item.children.map(childitem => {
                // 为什么要用match是因为 url有可能带参数等,全等就不可以了
                // 若是match不到会返回null
                if (pathname.match(childitem.path)) {
                    this.setState({
                        openKeys: [item.key],
                        selectedKeys: [childitem.key]
                    });
                    // 设置title
                    document.title = childitem.text;
                }
            })
        }
    })
  }

  componentDidMount = () => {
    // 设置菜单的默认值
    this.setDefaultActiveItem(this.props);
  }

  OpenChange = routerItemsArray => {
    const { openKeys } = this.state
    if (routerItemsArray.length < openKeys.length) {
        this.setState(() => ({
            openKeys: routerItemsArray
        }))
        return
      }

      routerItemsArray.map((item) => {
        if (!openKeys.includes(item)) {
          this.setState( prevState => ({
              openKeys: [...prevState.openKeys, item]
          }))
        }
      })
  }

  render() {
    const { openKeys, selectedKeys } = this.state;
    const { collapsed } = this.props;
    const SideTree = sidebarData.map(item => (
        <SubMenu
            key={item.key}
            title={
                <span>
                    <Icon type={item.title.icon} />
                    <span>{item.title.text}</span>
                </span>
            }>
            {item.children &&
                item.children.map(menuItem => (
                    <Item
                        key={menuItem.key}
                        onClick={() => {
                            // 设置高亮的item
                            this.setState({ selectedKeys: [menuItem.key] });
                            // 设置文档标题
                            document.title = menuItem.text;
                        }}>
                        <Link to={menuItem.path}>{menuItem.text}</Link>
                    </Item>
                ))}
        </SubMenu>
    ));
    return (
        <Sider
            breakpoint="lg"
            collapsed={collapsed}>
            <div className="wrap">
                <Avatar size={50} src={ logo } shape="square" className="logo" />
                { collapsed ? '' : <h1 className="name">Antd-React</h1>}
            </div>

            <Menu
                theme="dark"
                openKeys={openKeys}
                selectedKeys={selectedKeys}
                mode="inline"
                onOpenChange={this.OpenChange}>
                {SideTree}
            </Menu>
        </Sider>
    );
 }
}

export default SideMenu


