/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Form, Icon, Input, Button, Checkbox} from 'antd';
import api from '../../services/index'
import './index.less'

class LoginForm extends React.Component {
   handleSubmit = (e) => {
    const { form } = this.props
    e.preventDefault();
    form.validateFields(async(err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
       const data = await api.users.login()
      console.log(data)
    });
  }

  render() {
    const { form } = this.props
    const { getFieldDecorator } = form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    );
  }
}

export default LoginForm