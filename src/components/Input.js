import React from 'react';
import styled from 'styled-components';

const Input =  styled.input`
    width: 47%;
    border: none;
    border-top: 1px solid blue;
    border-bottom: 1px solid blue;
    margin-bottom: 20px;
    padding: 5px 15px;
    &:focus {
        outline: none;
    };
`;

const InputComponent = (props) => {
    return (
        <Input
            onChange={props.change}
            value={props.value}
        />
    );
}

export default InputComponent;