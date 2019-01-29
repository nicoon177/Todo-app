import React from 'react';
import Select from 'react-styled-select'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Name = styled.h2`
    margin-top: 30px;
    
    color: black;
`;

const Count = styled.span`
    align-self: center;
    margin-top: 15px;
`;

const Header = (props) => {
    return (
        <Container>
            <Name>Todos Generator</Name>
            <Count>Count of todos ( {props.countTodos} )</Count>
        </Container>
    )
}

export default Header;