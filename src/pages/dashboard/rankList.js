/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import React from 'react'

const RankList = React.memo( ({ title, rankList }) => {

  return (
    <section className="rankWrap">
      <h4>{title}</h4>
      { rankList.map(item => {
        return (<ul className="rlinListWrap" key={item.index}>
          <li style={{
            width: '20px',
            height: '20px',
            textAlign: 'center',
            fontSize: '14px',
            marginRight: '15px',
            color: item.active ? '#fff' : '#333',
            borderRadius: item.active ? '50%' : '',
            background: item.active ? '#314659' : ''
          }}>
          {item.index}
          </li>
          <li style={{
            width: '55%'
          }}>{item.name}</li>
          <li style={{
            width: '35%'
          }}>{item.value}</li>
        </ul>)

      })}

    </section>
  )
})

export default RankList