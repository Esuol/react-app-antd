/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import {Icon, Avatar} from 'antd'

class RightHeader extends React.Component {
  render () {
    return (
      <section className="right-header-wrap">
       <Icon type="search" className="icon" />
       <Icon type="question-circle" className="icon" />
       <Icon type="bell" className="icon"/>
       <Avatar icon="user" className="avatr"/>
       <Icon type="global" className="icon" />
      </section>
    )
  }
}

export default RightHeader