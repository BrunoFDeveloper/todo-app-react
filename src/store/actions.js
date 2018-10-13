import * as actionTypes from './actionTypes';

export const writeTodoText = e => ({ type: actionTypes.WRITE_TODO, payload: { target: e } });
export const addTodo = e => ({ type: actionTypes.ADD_TODO, payload: { target: e } });
export const toggleIsDone = id => ({ type: actionTypes.TOGGLE_TODO_DONE, payload: { id } });
export const removeTodo = id => ({ type: actionTypes.REMOVE_TODO, payload: { id } });