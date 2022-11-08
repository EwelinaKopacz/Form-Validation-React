import React from 'react';
import Title from '../Title/Title.js';
import Button from '../Button/Button.js';
import { ModalWrapper, ModalContainer, ModalText } from "./Modal.styled.js";

const Modal = ({show, onClick}) => {
    return (
        <>
            {show && (
            <ModalWrapper>
                <ModalContainer>
                    <Title>Success</Title>
                    <ModalText>Thank you. Your message was sent successfully. We will contant you as soon as possible.</ModalText>
                    <Button type="submit" onClick={onClick}>OK</Button>
                </ModalContainer>
            </ModalWrapper>
            )}
        </>
    );
};

export default Modal;