import React from 'react';

const TodoComponent = (props) => {
    return (
        <div className='todoInfo'>
            <div
                onClick={ () => props.handleClick(props.index)}
                className="todoContent"
            >
                <img
                    className="imageIcons" 
                    src={props.complited ? './correct-mark.png' : './clock.png'}
                    alt="Task"
                />
                <h3>{props.text}</h3>
            </div>
            <div className='todoTime'>
                <span>{props.date}</span>
                <img
                    onClick={() => props.delete(props.id)}
                    className="imageIcons" 
                    src='./delete.png'
                    alt="Delete"
                />
            </div>
        </div>
    )
}

export default TodoComponent;