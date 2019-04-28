import React from 'react'
import { HuePicker } from 'react-color'

// eslint-disable-next-line react/prefer-stateless-function
class ColorPicker extends React.Component {

  render () {
    const {selectColor} = this.props

    return (
      <HuePicker onChange={(val) => {selectColor(val)}} />
    )
  }
}

export default ColorPicker