import * as React from 'react';
import { connect } from 'react-redux';

import { loadUserList } from '../../redux/list/action';

const { Component }: typeof React = React;

class TableComponent extends Component {
  render(): JSX.Element {
    return (
      <div>123</div>
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