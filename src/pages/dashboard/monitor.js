/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import api from '../../services'
import Bar from '../../components/charts/bar'


class Monitor extends React.Component {

  state = {
    data: []
  }

  async componentDidMount () {
   const bardata = await api.dataAnalyize.getSaleData()
   console.log(bardata.payload)
   this.setState(() => ({
     data: bardata.payload
   }))
  }

  render () {
    const { data } = this.state

    return (
      <Bar data={data} title="销售趋势" height={350} padding={50} />
    )
  }
}

export default Monitor
