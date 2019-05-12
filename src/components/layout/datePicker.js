/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

class DataPicker extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      name: 'day'
    }
  }

  selects = (e, item) => {

   this.setState( () => ({name: item}), () => {
    const { name } = this.state
    
   })
  }

  onChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }


  onOk = (value) => {
    console.log('onOk: ', value);
  }

render () {
  const { name } = this.state
  return (
    <section className="datePickerrWrap">
      <div style={{marginTop: '10px'}}>
       <span className="selectDate"
             onClick={(e) => this.selects(e, 'day')}
             role="presentation"
             style={{color: name === 'day' ? '#0693e3' : '#666'}}>
             今日
       </span>
       <span className="selectDate"
             onClick={(e) => this.selects(e, 'week')}
             role="presentation"
             style={{color: name === 'week' ? '#0693e3' : '#666'}}>
             本周
       </span>
       <span className="selectDate"
             onClick={(e) => this.selects(e, 'month')}
             role="presentation"
             style={{color: name === 'month' ? '#0693e3' : '#666'}}>
             本月
        </span>
       <span className="selectDate"
             onClick={(e) => this.selects(e, 'year')}
             role="presentation"
             style={{color: name === 'year' ? '#0693e3' : '#666'}}>
             全年
       </span>
      </div>
      <div className="rangePicker">
       <RangePicker
         showTime={{ format: 'HH:mm' }}
         format="YYYY-MM-DD HH:mm"
         placeholder={['Start Time', 'End Time']}
         onChange={this.onChange}
         onOk={this.onOk}
       />
      </div>

    </section>
  )
}

}

export default DataPicker