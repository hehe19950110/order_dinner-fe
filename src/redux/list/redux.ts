import { LOAD_SUCCESS } from './actionTypes';

export default function userList(state: Array<object> = [], action: any): any {
  switch (action.type) {
    case LOAD_SUCCESS:
      let result: void[] = [...action.payload];
      if (result) {
        result.map((item: any) => {
        item.key = item._id;
      });
      }
      return result;  
    default:
      return state;  
  }
}