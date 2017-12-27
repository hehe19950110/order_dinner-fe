import { LOAD_SUCCESS, LOAD_FAILURE } from './actionTypes';
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

function loadFailure(data: any): object {
  return {
    type: LOAD_FAILURE,
    payload: data
  };
}

export function loadUserList(): any {
  return (dispatch: any): any => {
    axios.get('./userlist').then((response: any) => {
      if (response.data.code === 0) {
        return dispatch(loadSuccess(response.data.payload));
      } else {
        return dispatch(loadFailure(response.data.payload));
      }
    });
  };
}