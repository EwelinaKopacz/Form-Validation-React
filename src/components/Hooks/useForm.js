// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import formValidation from '../Utility/formValidation.js';

const useForm = () => {
    const init = {
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
    }

    const [state, setState] = useState(init);
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);

    const handelChange = e => {
        let inputValue = e.target.value;
        let inputName = e.target.name;

        setState({...state,[inputName]:inputValue})
    }

    const clearState = ()=> {
        setState(init);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const errors = formValidation(state);
        if(Object.keys(errors).length === 0){
            setShowModal(true);
            clearState();
        }
        setErrors(errors);
    }

    const handleModal = () => {
        setShowModal(false)
    }

    return {
        state,
        errors,
        handelChange,
        handleSubmit,
        showModal,
        handleModal
    };
};

export default useForm;