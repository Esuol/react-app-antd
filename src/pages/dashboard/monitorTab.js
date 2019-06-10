import React from 'react'
import CountDown from '../../components/CountDown'
import './monitor.less'

const targetTime = new Date().getTime() + 3900000;

export default React.memo( props => {
  const { data } = props

  const TitleTab = data.map( (item) =>
    <section key={item.id}>
      <p className="f14px">{item.title}</p>
      {item.content !== 'COM' ?
      <p className="f24px txtColor">{item.content}</p> :
      <CountDown target={targetTime} className="f24px txtColor"/>}
    </section>
  )

  return (
    <div className="titleWrap">
      {TitleTab}
    </div>
  )
})