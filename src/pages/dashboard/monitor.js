/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import {Row, Col} from 'antd'
import api from '../../services'


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
    return (
        <Row gutter={24}>
          <Col xl={18} lg={24} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
            1
          </Col>
          <Col xl={6} lg={24} md={24} sm={24} xs={24}>
            2
          </Col>
        </Row>
      // <Bar data={data} title="销售趋势" height={350} padding={50} />
    )
  }
}

export default Monitor
