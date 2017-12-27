import { SUBMIT_SUCCESS, SUBMIT_FAILURE } from './actionTypes';

export default function user(state: any= {}, action: any): any {
  switch (action.type) {
    case SUBMIT_SUCCESS:
    case SUBMIT_FAILURE:
      return {...state, ...action.payload};
    default:
      return state;
  }
}