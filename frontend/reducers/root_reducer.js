import { combineReducers } from 'redux';
import todosReducer from './todos_reducer';

// const rootReducer = combineReducers ({
//   todos: todosReducer
// });
//
// export default rootReducer;

export default combineReducers({
  todos: todosReducer
});
