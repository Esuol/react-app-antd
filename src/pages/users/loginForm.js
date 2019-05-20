/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Form, Icon, Input, Button, Checkbox, message} from 'antd';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { userAction } from '../../store/actions'
import './index.less'

@withRouter
class LoginForm extends React.Component {
  fetchLogin = () => {
    const { fetchLogin } = this.props
    fetchLogin()
  }

   handleSubmit = (e) => {
    const { form, history } = this.props

    e.preventDefault();
    form.validateFields(async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
      await this.fetchLogin(values)
      message.success('登陆成功')
      history.push('/dashboard/analyze')
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
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          <a href="/myapp/register">register now!</a>
        </Form.Item>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  nickName: state.userReducer.nickName,
  loading: state.userReducer.loading,
  token: state.userReducer.token
});
const mapDispatchToProps = {
  fetchLogin:  userAction.fetchLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)