import React from 'react';
import {InputBox, InputField, InputLabel, InputError} from "./Input.styled";

const Input = (props) => {
    const {item, value, error, onChange} = props;
    const {name, type, label} = item;
    console.log(value);
    return (
        <InputBox>
            <InputField name={name} value={value} type={type} onChange={onChange} 
                hasValue={`${value ? true : false}`}
            />
            <InputLabel>{label}</InputLabel>
            <InputError>{error}</InputError>
        </InputBox>
    );
};

export default Input;