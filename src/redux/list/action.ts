import { LOAD_SUCCESS } from './actionTypes';
import axios from 'axios';

interface UserListData {
  type: string;
  payload: object;
}

function loadSuccess(data: object): UserListData {
  return {
    type: LOAD_SUCCESS,
    payload: data
  };
}

export function loadUserList(): any {
  return (dispatch: any): any => {
    axios.get('./userlist').then((response: any) => {
      if (response.data.code === 0) {
        return dispatch(loadSuccess(response.data.payload));
      } else {
        return false;
      }
    });
  };
}