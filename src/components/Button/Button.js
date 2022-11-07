import React from 'react';
import StyledButton from './Button.styled';

const Button = (props) => {
    const {type, onClick, children} = props;
    return (
        <StyledButton type={type} onClick={onClick}>{children}</StyledButton>
    );
};

export default Button;