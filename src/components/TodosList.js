import React from 'react';
import TodoComponent from './Todo/Todo';

const TodosList = (props) => {
    return (
        <ul>
            {props.todos.map((todo, index) => {
                return <TodoComponent key={todo.id} index={index} delete={props.delete} handleClick={props.handleClick} {...todo} />
            })}
        </ul>
    )
}

export default TodosList;