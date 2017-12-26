import * as React from 'react';
import '../../static/style/header.less';
import { Row, Col } from 'antd';
// const logo: any = require('../../static/img/icon.png');

const { Component }: typeof React = React;

export default class HeaderComponent extends Component {
  render(): JSX.Element {
    return (
      <div className="header">
        <Row className="title">
          <Col span={2}>1</Col> 
          <Col span={22}>
            <span>加班餐预订系统</span>
            <span>Dinner Booking System</span>
          </Col>
       </Row>
      </div>
    );
  }
}