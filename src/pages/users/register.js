/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import Particles from 'react-particles-js';
import { Form } from 'antd'
import priticleParams from './priticle'
import RegisterForm from './registerForm'
import './index.less'

class Resgister extends React.Component {

  render () {
    const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(RegisterForm);
    return (
      <div className="wrapForm">
        <Particles
              params={ priticleParams }
              className="login"
              />
       <section className="loginWrap">
          <h2 className="loginTitle">ANTD-REACT REGISTER</h2>
          <WrappedNormalLoginForm />
       </section>
      </div>
    )
  }
}

export default Resgister