import React from 'react';
import Todo from './todo';

const TodoList = (props) => {
  const handleClick = () => {
    props.handleClearCompleted();
  }
    return(
        <div className="todoList">
        <h3>List of Tasks for today!</h3>
        <ul>
          {
            props.todos.map(todo => {
              return(<Todo todo={todo} handleToggleCompleted={props.handleToggleCompleted}/>)
            })
          }
        </ul>
        <button onClick={handleClick}>Clear Completed!</button>
      </div>
    )
}

export default TodoList;