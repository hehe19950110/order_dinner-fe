import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './Reducer';

const Store: any = createStore(Reducer,
                               compose(
    applyMiddleware(thunk),
    (<any> window).devToolsExtension ? (<any> window).devToolsExtension() : (f: any): any => f)
  );
export default Store;