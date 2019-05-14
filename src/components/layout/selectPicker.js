/* eslint-disable react/no-array-index-key */
/* eslint-disable array-callback-return */
import React from 'react'
import { Radio } from 'antd'

const SelectPicker = React.memo( ({title, onChangeSelect}) => {

  return (
    <div>
    <Radio.Group defaultValue={title[0]} buttonStyle="solid" onChange={onChangeSelect}>
      { title.map((item, index) => {
        return <Radio.Button value={item} key={index}>{item}</Radio.Button>
      })}
    </Radio.Group>
  </div>
  )
})

export default SelectPicker