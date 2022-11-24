import React, { Component } from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      isEditing: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  handleChange(evt) {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  }

  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updateTodo(this.props.id, this.state.name);
    this.setState({
      isEditing: false,
    });
  }

  toggleForm() {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <form onSubmit={this.handleUpdate} className='TodoList-edit'>
          <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
          <button type='submit'>Update</button>
        </form>
      );
    } else {
      result = (
        <li className='TodoList-task' onClick={this.props.toggleTodo}>
          {this.props.name}
        </li>
      );
    }
    return (
      <div className={this.props.isCompleted ? 'TodoList complete' : 'TodoList'}>
        {result}
        <div className='TodoList-btn'>
          <button onClick={this.toggleForm}>
            <AiOutlineEdit />
          </button>
          <button onClick={this.props.removeTodo}>
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    );
  }
}

export default TodoList;
