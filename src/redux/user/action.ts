import { SUBMIT_SUCCESS, SUBMIT_FAILURE } from './actionTypes';
import axios from 'axios';

function submitSuccess(data: any): any {
  return {
    type: SUBMIT_SUCCESS,
    payload: data
  };
}

function submitFailure(data: any): any {
  return {
    type: SUBMIT_FAILURE,
    payload: data
  };
}

export function submitUser(data: object, type: string): any {
  return (dispatch: any): any => {
    if (data && type) {
        return axios.post(`/users/${type}`, data).then((response: any) => {
          if (response.data.code === 0) {
            return dispatch(submitSuccess(response.data.payload));
          } else {
            return dispatch(submitFailure(response.data.payload));
          }
        });

      }
    };
  }