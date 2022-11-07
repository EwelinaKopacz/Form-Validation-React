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

    const handelChange = e => {
        let inputValue = e.target.value;
        let inputName = e.target.name;

        setState({...state,[inputName]:inputValue})
    }

    const handleSubmit = e => {
        e.preventDefault();
        const errors = formValidation(state);
        if(Object.keys(errors).length === 0){
            return true
        }
        setErrors(errors);
    }

    return {
        state,
        errors,
        handelChange,
        handleSubmit
    };
};

export default useForm;