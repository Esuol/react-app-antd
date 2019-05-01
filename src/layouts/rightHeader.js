/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import {Icon, Avatar, Input} from 'antd'
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
            <Icon type="bell" className="icon"/>
            <Avatar icon="user" className="avatr"/>
            <Icon type="global" className="icon" />
          </section>
      </section>
    )
  }
}

export default RightHeader