import React from 'react';
import Todo from '../components/ToDo';
import { connect } from 'react-redux';

const ToDoList = ({ todos }) => {
  const displayTodos = todos.map(todo => {
    console.log({... todo})
    return (
      <Todo
        {...todo}
        key={todo.id}
      />
    )
  })

  return (
    <ul>
      {displayTodos}
    </ul>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(ToDoList);
