import React from 'react';

const Todo = (props) => {
    const { todo, handleToggleCompleted } = props;
    const handleClick = (id) => {
        handleToggleCompleted(todo.id);
    }
    return(<li onClick={handleClick} className={todo.completed ? "completed":""}> {todo.title} </li>)
};

export default Todo;