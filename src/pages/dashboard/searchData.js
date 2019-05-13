import React, { memo } from 'react'

const searchData = memo( ( {mainNumber, smallNumber, type} ) => {
  return (
    <section className="searchDataWrap">
      <h3>{ mainNumber }</h3>
      <div style={{display: 'flex'}}>
        <p>{ smallNumber }</p>
         <div className={type === 'danger' ? 'searchDataWrapPullDanger' : 'searchDataWrapPullSuccess'}></div>
      </div>
    </section>
  )
})

export default searchData