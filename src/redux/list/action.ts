import { LOAD_SUCCESS } from './actionTypes';

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