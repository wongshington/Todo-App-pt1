import { RECEIVE_TODOS, RECEIVE_TODO } from "../actions/todo_actions";

const initialState = {
  1: {
    id: 1,
    title: 'Get buckets',
    body: 'with my homie T-Mac (a.k.a. the GOAT)',
    done: true
  },
  2: {
    id: 2,
    title: 'Break ankles',
    body: 'with Dame $$$',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {

  switch (action.type) {
    case RECEIVE_TODOS:
      const newState = {};
        action.todos.forEach (todo => newState[todo.id] = todo );
        return newState;
    case RECEIVE_TODO:
       return Object.assign({}, state, {[action.todo.id]: action.todo});


      // return {
      //
      // }
    default:
      return state;
  }
};













export default todosReducer;
