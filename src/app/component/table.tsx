import * as React from 'react';
import { connect } from 'react-redux';
import { Table, Row, Col } from 'antd';

import { loadUserList } from '../../redux/list/action';
//// import userList from '../../redux/list/redux';

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

  componentDidMount(): any {
    // const {userList}: any = this.props;
    return this.props.loadUserList();

  }
  render(): JSX.Element {
    let userList: any[] = [];
    if (this.props.userList.length !== 0) {
      userList = this.props.userList;
    }
    return (
      <Row>
        <Col span={4} />
        <Col span={16}>
          <Table columns={Columns} dataSource={userList} bordered={true}/>
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