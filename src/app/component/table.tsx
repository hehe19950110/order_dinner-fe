import * as React from 'react';
import { connect } from 'react-redux';
import { Table, Row, Col } from 'antd';

import { loadUserList } from '../../redux/list/action';

const { Component }: typeof React = React;

const Columns: Array<object> = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '工号',
  dataIndex: 'uid',
  key: 'uid',
}, {
  title: '电话',
  dataIndex: 'phone',
  key: 'phone',
  }];

class TableComponent extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      dataSource: []
    };
  }

  componentDidMount(): void {
    const userList: Array<object> = this.props.userList;
    this.setState({
      dataSource: userList
    });
  }
  render(): JSX.Element {
    return (
      <Row>
        <Col span={4} />
        <Col span={16}>
          <Table columns={Columns} dataSource={this.state.dataSource} bordered={true}/>
        </Col>  
        <Col span={4}/>
      </Row>
    );
  }
}

function mapStateToProps(state: any): object {
  return {
    userList: state.userList
  };
 }
function mapDispatchToProps(dispatch: any, ownProps: object): object {
  return {
    loadUserList: (): any => { dispatch(loadUserList()); }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);