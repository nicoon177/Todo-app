import React from 'react';
import styled from 'styled-components';

const Button =  styled.button`
    margin-top: 15px;
    border: none;
    color: white;
    padding: 5px 20px;
    font-size: 18px;
`;

const ButtonComponent = ({ addTask, display }) => {
    return (
        <Button
            disabled={display()}
            onClick={addTask}
            style={{ background: display() ? "gray" : "blue", cursor: display() ? "not-allowed" : "pointer" }}
        >
            Add
        </Button>
    )
}

export default ButtonComponent;