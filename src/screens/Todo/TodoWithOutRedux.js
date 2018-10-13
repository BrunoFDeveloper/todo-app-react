import React, { Component } from 'react';
import Form from '../../components/Form/Form';
import classes from './Todo.module.scss';
import TodoItem from '../../components/TodoItem/TodoItem';

class Todo extends Component {

  state = {
    todoText: '',
    todos: []
  };

  fillField = ({ target }) => this.setState({ [ target.name ]: target.value });

  onSubmit = e => {
    //Prevent page refresh
    e.preventDefault();
    //Building a new todo
    let todo = {
      id: Math.random(),
      text: this.state.todoText,
      isDone: false
    };

    //Send todo to store
    this.setState(prevState => ({
      todos: prevState.todos.concat(todo)
    }));

    //Clean field after send todo
    this.setState({ todoText: '' });
  };

  toggleDoneTodo = (id) => {
    let todosCopy = [ ...this.state.todos ];
    let newTodo = todosCopy.find(item => item.id === id);
    newTodo.isDone = !newTodo.isDone;

    this.setState(prevState => ({
      todos: todosCopy
    }))
  };

  removeTodo = (id) => {
    let todosCopy = [ ...this.state.todos ].filter(item => item.id !== id);
    this.setState({ todos: todosCopy });
  };

  render() {
    const { todoText, todos } = this.state;

    return (
      <div className={ classes.ContentTodo }>
        <div className={ classes.ContentInternal }>

          { todos.map(todo =>
            <TodoItem
              key={ todo.id }
              text={ todo.text }
              isDone={ todo.isDone }
              toggleDoneTodo={ () => this.toggleDoneTodo(todo.id) }
              removeTodo={ () => this.removeTodo(todo.id) } />) }

        </div>
        <Form fillField={ this.fillField } todoText={ todoText } onSubmit={ this.onSubmit } />
      </div>
    );
  }
};

export default Todo;
