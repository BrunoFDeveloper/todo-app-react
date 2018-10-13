import React from 'react';
import classes from './TodoItem.module.scss';
import Button from '../UI/Button/Button';

const TodoItem = props => (
  <div className={ classes.ContentTodoItem }>
    <p >{ props.text }</p>
    <Button type='button' label={ props.isDone ? 'Undone' : 'Done' } classActive='ToggleDone' onClick={ props.toggleDoneTodo } />
    <Button type='button' label='Remove' classActive='RemoveItem' onClick={ props.removeTodo } />
  </div>
);

export default TodoItem;
