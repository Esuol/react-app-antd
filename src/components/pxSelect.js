
import React from 'react'
import { Slider } from 'antd';

// eslint-disable-next-line react/prefer-stateless-function
class PxSelects extends React.Component {

  render () {

    const {onSelect, currentPx, name, closeDrawerSetting} = this.props

    return(
       <Slider defaultValue={currentPx} tooltipVisible={closeDrawerSetting} min={name === '@font-size-base' ? 14 : 2} max={name === '@font-size-base' ? 30 : 6} onChange={(val) => onSelect(val, name)} />
    )
  }
}

export default PxSelects