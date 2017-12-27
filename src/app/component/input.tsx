import * as React from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import { connect } from 'react-redux';
const { Component }: typeof React = React;
const FormItem: typeof Form.Item = Form.Item;

import { submitUser } from '../../redux/user/action';
import { loadUserList } from '../../redux/list/action';

// function hasErrors(fieldsError: object): boolean {
//   return Object.keys(fieldsError).some((field: string) => fieldsError[field]);
// }

class InputForm extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(): void {
    this.props.form.validateFields();
  }

  handleSubmit(e: any, type: string): void {
    e.preventDefault();
    console.dir(type);
    this.props.form.validateFields((err: object, values: object) => {
      if (!err) {
        this.props.submitUser(values, type);
        return this.props.loadUserList();
      } 
      return false;
    });
  }

    render(): JSX.Element {
      const { getFieldDecorator }: any = this.props.form;
      return (
      <Form>
        <Row gutter={4}>
          <Col span={4}/>  
          <Col span={4}>
            <FormItem>
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入你的姓名' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="姓名" />
              )}
            </FormItem>
          </Col>
          <Col span={4}>  
            <FormItem>
              {getFieldDecorator('uid', {
                rules: [{ required: true, message: '请输入你的工号' }],
              })(
               <Input prefix={<Icon type="idcard" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="工号" />
              )}
            </FormItem>
          </Col>
          <Col span={4}>  
            <FormItem>
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: '请输入你的电话' }],
             })(
                <Input prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="电话" />
              )}
            </FormItem>
          </Col>
          <Col span={2}>  
            <FormItem>
                <Button type="primary" htmlType="submit" onClick={(e: any): any => {this.handleSubmit(e, 'add'); }}>订餐</Button>
            </FormItem>
            </Col>
          <Col span={2}>  
            <FormItem>
                <Button type="danger" htmlType="submit" onClick={(e: any): any => {this.handleSubmit(e, 'delete'); }}>取消</Button>
            </FormItem>
            </Col>
          <Col span={4}/>
        </Row>  
      </Form>
    );
  }
}

function mapStateToProps(state: any): object {
  return {
    user: state.user
  };
 }
function mapDispatchToProps(dispatch: any, ownProps: object): object {
  return {
    submitUser: (data: any, type: string): any => { dispatch(submitUser(data, type)); },
    loadUserList: (): any => { dispatch(loadUserList()); }
  };
}

const InputComponent: any = Form.create({})(InputForm);
export default connect(mapStateToProps, mapDispatchToProps)(InputComponent);