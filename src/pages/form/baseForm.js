/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/require-render-return */
/* eslint-disable no-unused-vars */
import React from 'react';
import { connet } from 'react-redux';
import {
  Form,
  Input,
  DatePicker,
  Select,
  Button,
  Card,
  InputNumber,
  Radio,
  Icon,
  Tooltip
} from 'antd';
import { IntlProvider, FormattedMessage } from 'react-intl';
import './index.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

@Form.create()
class BaseForm extends React.Component {
  handleSubmit = e => {
    const { dispatch, form } = this.props;
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        dispatch({
          type: 'form/submitRegularForm',
          payload: values
        });
      }
    });
  };

  render() {
    const { submitting } = this.props;
    const {
      form: { getFieldDecorator, getFieldValue }
    } = this.props;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 10 }
      }
    };

    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 }
      }
    };

    return (
      <Card bordered={false}>
        <Form
          onSubmit={this.handleSubmit}
          hideRequiredMark
          style={{ marginTop: 8 }}
        >
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="form.title.label" />}
          >
            {getFieldDecorator('title', {
              rules: [
                {
                  required: true,
                  message: 'validation.title.required'
                }
              ]
            })(<Input placeholder="form.title.placeholder" />)}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="form.date.label" />}
          >
            {getFieldDecorator('date', {
              rules: [
                {
                  required: true,
                  message: 'validation.date.required'
                }
              ]
            })(
              <RangePicker
                style={{ width: '100%' }}
                placeholder={[
                  'form.date.placeholder.start',
                  'form.date.placeholder.end'
                ]}
              />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="form.goal.label" />}
          >
            {getFieldDecorator('goal', {
              rules: [
                {
                  required: true,
                  message: 'validation.goal.required'
                }
              ]
            })(
              <TextArea
                style={{ minHeight: 32 }}
                placeholder="form.goal.placeholder"
                rows={4}
              />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="form.standard.label" />}
          >
            {getFieldDecorator('standard', {
              rules: [
                {
                  required: true,
                  message: 'validation.standard.required'
                }
              ]
            })(
              <TextArea
                style={{ minHeight: 32 }}
                placeholder="form.standard.placeholder"
                rows={4}
              />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={
              <span>
                <FormattedMessage id="form.client.label" />
                <em className={styles.optional}>
                  <FormattedMessage id="form.optional" />
                  <Tooltip
                    title={<FormattedMessage id="form.client.label.tooltip" />}
                  >
                    <Icon type="info-circle-o" style={{ marginRight: 4 }} />
                  </Tooltip>
                </em>
              </span>
            }
          >
            {getFieldDecorator('client')(
              <Input placeholder="form.client.placeholder" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={
              <span>
                <FormattedMessage id="form.invites.label" />
                <em className={styles.optional}>
                  <FormattedMessage id="form.optional" />
                </em>
              </span>
            }
          >
            {getFieldDecorator('invites')(
              <Input placeholder="form.invites.placeholder" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={
              <span>
                <FormattedMessage id="form.weight.label" />
                <em className={styles.optional}>
                  <FormattedMessage id="form.optional" />
                </em>
              </span>
            }
          >
            {getFieldDecorator('weight')(
              <InputNumber
                placeholder="form.weight.placeholder"
                min={0}
                max={100}
              />
            )}
            <span className="ant-form-text">%</span>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="form.public.label" />}
            help={<FormattedMessage id="form.public.label.help" />}
          >
            <div>
              {getFieldDecorator('public', {
                initialValue: '1'
              })(
                <Radio.Group>
                  <Radio value="1">
                    <FormattedMessage id="form.public.radio.public" />
                  </Radio>
                  <Radio value="2">
                    <FormattedMessage id="form.public.radio.partially-public" />
                  </Radio>
                  <Radio value="3">
                    <FormattedMessage id="form.public.radio.private" />
                  </Radio>
                </Radio.Group>
              )}
              <FormItem style={{ marginBottom: 0 }}>
                {getFieldDecorator('publicUsers')(
                  <Select
                    mode="multiple"
                    placeholder="form.publicUsers.placeholder"
                    style={{
                      margin: '8px 0',
                      display:
                        getFieldValue('public') === '2' ? 'block' : 'none'
                    }}
                  >
                    <Option value="1">
                      <FormattedMessage id="form.publicUsers.option.A" />
                    </Option>
                    <Option value="2">
                      <FormattedMessage id="form.publicUsers.option.B" />
                    </Option>
                    <Option value="3">
                      <FormattedMessage id="form.publicUsers.option.C" />
                    </Option>
                  </Select>
                )}
              </FormItem>
            </div>
          </FormItem>
          <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
            <Button type="primary" htmlType="submit" loading={submitting}>
              <FormattedMessage id="form.submit" />
            </Button>
            <Button style={{ marginLeft: 8 }}>
              <FormattedMessage id="form.save" />
            </Button>
          </FormItem>
        </Form>
      </Card>
    );
  }
}

export default BaseForm;
