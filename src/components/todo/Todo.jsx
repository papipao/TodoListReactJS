import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.createTodo = this.createTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  createTodo(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }

  updateTodo(id, updatedTodo) {
    const updateTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, name: updatedTodo };
      }
      return todo;
    });

    this.setState({
      todos: updateTodos,
    });
  }

  toggleTodo(id) {
    const updateTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });

    this.setState({
      todos: updateTodos,
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }

  render() {
    return (
      <div className='Todo'>
        <h1>
          To Do List! <span>Simple React To do List App</span>
        </h1>
        <TodoForm createTodo={this.createTodo} />
        <ul>
          {this.state.todos.map((todo) => (
            <TodoList
              key={todo.id}
              id={todo.id}
              name={todo.name}
              isCompleted={todo.isCompleted}
              toggleTodo={() => this.toggleTodo(todo.id)}
              removeTodo={() => this.removeTodo(todo.id)}
              updateTodo={this.updateTodo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
