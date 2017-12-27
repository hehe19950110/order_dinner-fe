import { combineReducers } from 'redux';
import userList from './redux/list/redux';

const Reducer: any = combineReducers({
  userList: userList
});
export default Reducer;