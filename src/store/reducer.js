import * as actionTypes from './actionTypes';

const initialState = {
  todoText: 'Test',
  todos: []
};

const reducer = ( state = initialState, { type, payload } ) => {
  switch ( type ) {
    case actionTypes.WRITE_TODO:
      return {
        ...state,
        [ payload.target.target.name ]: payload.target.target.value
      }
    case actionTypes.ADD_TODO:
      payload.target.preventDefault();

      let todo = {
        id: Math.random(),
        text: state.todoText,
        isDone: false
      };

      return {
        ...state,
        todos: state.todos.concat( todo ),
        todoText: ''
      }
    case actionTypes.TOGGLE_TODO_DONE:

      let todosCopy = [ ...state.todos ],
        newTodo = todosCopy.find( item => item.id === payload.id );

      newTodo.isDone = !newTodo.isDone;

      return {
        ...state,
        todos: todosCopy
      }
    case actionTypes.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter( item => item.id !== payload.id )
      }
    default:
      return state;
  }
};

export default reducer;