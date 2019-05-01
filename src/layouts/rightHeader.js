/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import {Icon, Avatar, Input, Popover, Badge} from 'antd'
import Animate from 'rc-animate'

const { Search } = Input

class RightHeader extends React.Component {

  state = {
    isShowSearchInput: false
  }

  componentWillReceiveProps () {
    const { isShowSearch, searchMissed } = this.props
    if (!isShowSearch) {
      this.setState(() => ({ isShowSearchInput: false }));
      searchMissed()
    }
  }

  onSearch = () => {
    this.setState(() => ({ isShowSearchInput: true }));
  }

  goGithub = () => {
    window.open('https://github.com/berlinen')
  }

  render () {
    const { isShowSearchInput } = this.state

    const style = {
      display: isShowSearchInput ? 'block' : 'none',
      marginTop: '15px',
      width: '200px',
    };

    const content = (
      <div>
        <p>消息提示1</p>
        <p>消息提示2</p>
      </div>
    );

    const personalDom = (
      <div>
        <p className="personal"> <Icon type="user" className="icon"/>&nbsp;&nbsp;个人中心</p>
        <p className="personal"> <Icon type="setting" className="icon"/>&nbsp;&nbsp;个人设置</p>
        <p className="personal"> <Icon type="close-circle" className="icon"/>&nbsp;&nbsp;触发报错</p>
        <p className="personal"> <Icon type="logout" className="icon"/>&nbsp;&nbsp;退出登录</p>
      </div>
    );

    const languageDom = (
      <div>
        <p className="personal">中文</p>
        <p className="personal">英文</p>
      </div>
    );


    return (
      <section style={{display: "flex", height: 10}}>
         <section className="right-header-wrap" style={{width: isShowSearchInput ? 400 : 250}}>
            <Animate
              component=""
              transitionName="fade">
              {isShowSearchInput
                ? <Search

                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={style}
                  />
                : <Icon type="search" className="icon" onClick={this.onSearch} />
                }
            </Animate>
            <Icon type="question-circle" className="icon" onClick={this.goGithub} />

            <Popover content={content} title="消息提示" trigger="hover">
              <Badge count={2}>
                <Icon type="bell" className="icon"/>
              </Badge>
            </Popover>

            <Popover content={personalDom} title="" trigger="hover">
              <Avatar icon="user" className="avatr"/>
            </Popover>

            <Popover content={languageDom} title="" trigger="hover">
              <Icon type="global" className="icon" />
            </Popover>

          </section>
      </section>
    )
  }
}

export default RightHeader