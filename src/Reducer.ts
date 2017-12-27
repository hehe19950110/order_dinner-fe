import { combineReducers } from 'redux';
import userList from './redux/list/redux';
import user from './redux/user/reducer';

const Reducer: any = combineReducers({
  userList: userList,
  user: user
});
export default Reducer;