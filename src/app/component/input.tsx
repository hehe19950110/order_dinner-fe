import * as React from 'react';
import { Form, Icon, Input, Button } from 'antd';

const { Component }: typeof React = React;
const FormItem: typeof Form.Item = Form.Item;

function hasErrors(fieldsError: object): boolean {
  return Object.keys(fieldsError).some((field: string) => fieldsError[field]);
}

class InputForm extends Component<any, any> {
  componentDidMount(): void {
    this.props.form.validateFields();
  }

  render(): JSX.Element {
    const { getFieldDecorator, getFieldsError }: any = this.props.form;
    // const userNameError: string = isFieldTouched('userName') && getFieldError('userName');
    // const passwordError: any = isFieldTouched('password') && getFieldError('password');
    return (
      <Form>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  }
}
const InputComponent: any = Form.create({})(InputForm);
export default InputComponent;