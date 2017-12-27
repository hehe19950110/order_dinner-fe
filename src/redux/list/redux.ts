import { LOAD_SUCCESS } from './actionTypes';

export default function userList(state: Array<object> = [], action: any): any {
  switch (action.type) {
    case LOAD_SUCCESS:
    return {...state, ...action.payload};  
    default:
      return state;  
  }
}