/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Form, Icon, Input, Button, message} from 'antd';
import history from '../../history'
import api from '../../services'
import './index.less'

class RegisterForm extends React.Component {
  fetchLogin = () => {
    const { fetchLogin } = this.props
    fetchLogin()
  }

   handleSubmit = (e) => {
    const { form } = this.props
    e.preventDefault();
    form.validateFields(async (err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
      }
      const request = await api.users.register(values)
      if (request.status === 'ok') {
        message.success('注册成功');
        history.push('/login')
      }
    });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次密码输入不一致');
    } else {
      callback();
    }
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
          {getFieldDecorator('newPassword', {
            rules: [
            {
              required: true, message: 'Please input your Password!'
            },
            {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
           REGISTER NOW
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={() => {history.go(-1)}} className="login-form-button">
           GO BACK
          </Button>
        </Form.Item>
      </Form>
    );
  }
}



export default RegisterForm