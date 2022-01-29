import { createStore, combineReducers } from 'redux';
import { todoReducer } from './todoReducer';

export default createStore(
  combineReducers({
    todos: todoReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
