/* eslint-disable react/no-array-index-key */
/* eslint-disable array-callback-return */
import React from 'react'
import { Radio } from 'antd'

const SelectPicker = React.memo( ({title}) => {

  return (
    <div>
    <Radio.Group defaultValue={title[0]} buttonStyle="solid">
      { title.map((item, index) => {
        return <Radio.Button value={index} key={index}>{item}</Radio.Button>
      })}
    </Radio.Group>
  </div>
  )
})

export default SelectPicker