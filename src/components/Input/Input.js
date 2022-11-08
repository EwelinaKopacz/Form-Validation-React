import React from 'react';
import {InputBox, InputField, InputLabel, InputError} from "./Input.styled";

const Input = (props) => {
    const {item, value, error, onChange} = props;
    const {name, type, label} = item;

    return (
        <InputBox>
            <InputField name={name} value={value} type={type} onChange={onChange}/>
            <InputLabel className={`${value ? "has-value" : ""}`}>{label}</InputLabel>
            <InputError>{error}</InputError>
        </InputBox>
    );
};

export default Input;