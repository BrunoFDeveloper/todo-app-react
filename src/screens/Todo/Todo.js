import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../../store/actions';

import Form from '../../components/Form/Form';
import classes from './Todo.module.scss';
import TodoItem from '../../components/TodoItem/TodoItem';

const Todo = props => (
  <div className={ classes.ContentTodo }>
    <div className={ classes.ContentInternal }>

      { props.todos.map(todo =>
        <TodoItem
          key={ todo.id }
          text={ todo.text }
          isDone={ todo.isDone }
          toggleDoneTodo={ () => props.toggleIsDone(todo.id) }
          removeTodo={ () => props.removeTodo(todo.id) } />) }

    </div>
    <Form fillField={ props.writeTodoText } todoText={ props.todoText } onSubmit={ (e) => props.addTodo(e) } />
  </div>
);

const mapStateToProps = state => ({
  todoText: state.todoText,
  todos: state.todos
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...TodoActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
