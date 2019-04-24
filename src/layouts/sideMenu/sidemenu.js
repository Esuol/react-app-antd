/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import {Link, withRouter} from 'react-router'

import { Layout, Menu, Icon } from 'antd';

import { sidebarData, groupKey} from '../../router'
// import classNames from 'classnames';
// import styles from './index.less'

const { Sider } = Layout
const { SubMenu, Item } = Menu

// eslint-disable-next-line react/prefer-stateless-function
@withRouter
class SideMenu extends Component {
  constructor (props) {
    super(props)
    console.log(this.props)
    this.state = {
      openKeys: [],
      selectedKeys: [],
      rootSubmenuKeys: groupKey
    }
  }

  setDefaultActiveItem = ({ location }) => {
    const { pathname } = location;
    sidebarData.map(item => {
        if (item.pathname) {
            // 做一些事情,这里只有二级菜单
        }
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

  OpenChange = openKeyes => {
    const { rootSubmenuKeys, openKeys } = this.state
    console.log(openKeyes);
    const latestOpenKey = openKeyes.find(
        key => openKeys.indexOf(key) === -1
    );
    console.log(latestOpenKey);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.setState({ openKeys });
    } else {
        this.setState({
            openKeys: latestOpenKey ? [latestOpenKey] : [...openKeys]
        });
    }
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
            collapsible
            breakpoint="lg"
            collapsed={collapsed}
            trigger={collapsed}>
            <Menu
                subMenuOpenDelay={0.3}
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


