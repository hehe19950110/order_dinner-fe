import * as React from 'react';
import HeaderComponent from '../component/header';
import InputComponent from '../component/input';
import TableComponent from '../component/table';

export default class MainPage extends React.Component {
  render(): JSX.Element {
    return (
      <div id="root">
        <HeaderComponent />
        <InputComponent />
        <TableComponent />
      </div>
    );
  }
}