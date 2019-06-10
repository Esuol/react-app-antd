import React from 'react'
import './monitor.less'

export default React.memo( props => {
  const { data } = props

  const TitleTab = data.map( (item) =>
    <section key={item.id}>
      <p className="f14px">{item.title}</p>
      <p className="f24px">{item.content}</p>
    </section>
  )

  return (
    <div className="titleWrap">
      {TitleTab}
    </div>
  )
})