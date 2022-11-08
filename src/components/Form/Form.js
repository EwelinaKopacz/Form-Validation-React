import React from 'react';
import { FormWrapper, FormContainer } from "./Form.styled.js";
import Title from "../Title/Title.js";
import Input from "../Input/Input.js";
import Button from "../Button/Button.js";
import Modal from '../Modal/Modal.js';
import inputsDB from "../../db/inputsDB.json";
import useForm from '../Hooks/useForm.js';

const Form = () => {
    const {state, errors, handelChange, handleSubmit, showModal, handleModal} = useForm();

    return (
        <FormWrapper>
            <Title>Leave a message</Title>
             <FormContainer noValidate>
                {showModal ? <Modal show={showModal} onClick={handleModal}/>  : null}
                {inputsDB.map(item =>
                    <Input
                        key={item.id}
                        item={item}
                        value={state[item.name]}
                        error={errors[item.name]}
                        onChange={handelChange}
                        />)}
                <Button type='submit' onClick={handleSubmit}>send</Button>
             </FormContainer>
        </FormWrapper>
    );
}

export default Form;