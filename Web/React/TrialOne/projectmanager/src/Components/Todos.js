import React, { Component } from 'react';
import ToDoItem from './TodoItem';
import PropTypes from 'prop-types';

class ToDos extends Component {
  render() {
    let todoItems;
    if (this.props.todos) {
      todoItems = this.props.todos.map(todo => {
        return (
          <ToDoItem key={todo.title} todo={todo} />
        )
      });
    }
    return (
      <div className="Todos">
        <h4>To Do List:</h4>
        {todoItems}
      </div>
    );
  }
}

ToDos.propTypes = {
  todos: PropTypes.array,
}

export default ToDos;
